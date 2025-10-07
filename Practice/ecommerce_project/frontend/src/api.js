export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/api/products`);
  return res.json();
}
export async function fetchProduct(id) {
  const res = await fetch(`${API_BASE}/api/products/${id}`);
  return res.json();
}
export async function createCheckout(items) {
  const res = await fetch(`${API_BASE}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  });
  return res.json();
}
export async function razorpayOrder(amount) {
  const res = await fetch(`${API_BASE}/api/razorpay-order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });
  return res.json();
}
export async function register(data) {
  const res = await fetch(`${API_BASE}/api/register`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
  return res.json();
}
export async function login(data) {
  const res = await fetch(`${API_BASE}/api/login`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
  return res.json();
}
