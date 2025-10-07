import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Stripe from 'stripe';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.resolve();
const app = express();
app.use(cors());
app.use(express.json());

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_YOUR_KEY';
const stripe = new Stripe(STRIPE_KEY);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_YOUR_ID',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_test_YOUR_SECRET'
});

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';
const PRODUCTS_FILE = path.join(__dirname, 'products.json');
const USERS_FILE = path.join(__dirname, 'users.json');
const ORDERS_FILE = path.join(__dirname, 'orders.json');

function readJSON(f) {
  return JSON.parse(fs.readFileSync(f, 'utf8'));
}
function writeJSON(f, data) {
  fs.writeFileSync(f, JSON.stringify(data, null, 2));
}

// Public product endpoints
app.get('/api/products', (req, res) => {
  res.json(readJSON(PRODUCTS_FILE));
});
app.get('/api/products/:id', (req, res) => {
  const products = readJSON(PRODUCTS_FILE);
  const p = products.find(x => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
});

// Auth: register / login
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const users = readJSON(USERS_FILE);
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'Email already used' });
  const hash = await bcrypt.hash(password, 10);
  const user = { id: 'u' + Date.now(), name: name || '', email, password: hash, isAdmin: false };
  users.push(user);
  writeJSON(USERS_FILE, users);
  res.json({ message: 'Registered' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const users = readJSON(USERS_FILE);
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin }});
});

// Middleware to protect routes
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'No auth header' });
  const token = header.replace('Bearer ', '');
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
function adminOnly(req, res, next) {
  if (!req.user || !req.user.isAdmin) return res.status(403).json({ error: 'Admin only' });
  next();
}

// Admin product CRUD
app.get('/api/admin/products', auth, adminOnly, (req, res) => {
  res.json(readJSON(PRODUCTS_FILE));
});
app.post('/api/admin/products', auth, adminOnly, (req, res) => {
  const products = readJSON(PRODUCTS_FILE);
  const p = req.body;
  p.id = 'p' + Date.now();
  products.push(p);
  writeJSON(PRODUCTS_FILE, products);
  res.json(p);
});
app.put('/api/admin/products/:id', auth, adminOnly, (req, res) => {
  const products = readJSON(PRODUCTS_FILE);
  const idx = products.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  products[idx] = { ...products[idx], ...req.body };
  writeJSON(PRODUCTS_FILE, products);
  res.json(products[idx]);
});
app.delete('/api/admin/products/:id', auth, adminOnly, (req, res) => {
  let products = readJSON(PRODUCTS_FILE);
  products = products.filter(x => x.id !== req.params.id);
  writeJSON(PRODUCTS_FILE, products);
  res.json({ message: 'Deleted' });
});

// Create Stripe Checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  const { items, successUrl, cancelUrl } = req.body;
  try {
    const line_items = items.map(i => ({
      price_data: {
        currency: 'usd',
        product_data: { name: i.name },
        unit_amount: Math.round(i.price * 100),
      },
      quantity: i.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: successUrl || 'http://localhost:5173/success',
      cancel_url: cancelUrl || 'http://localhost:5173/cart',
    });
    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Checkout session creation failed' });
  }
});

// Create Razorpay order (for frontend Razorpay integration)
app.post('/api/razorpay-order', async (req, res) => {
  const { amount, currency } = req.body; // amount in smallest currency unit (e.g. INR paise)
  try {
    const options = {
      amount: amount,
      currency: currency || 'INR',
      receipt: 'rcpt_' + Date.now()
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Razorpay order creation failed' });
  }
});

// Simple order save (after payment webhook or frontend confirmation)
app.post('/api/orders', auth, (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  const o = { id: 'o' + Date.now(), userId: req.user.id, items: req.body.items || [], total: req.body.total || 0, status: 'created', createdAt: new Date().toISOString() };
  orders.push(o);
  writeJSON(ORDERS_FILE, orders);
  res.json(o);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
