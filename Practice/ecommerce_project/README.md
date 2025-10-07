# E-Commerce Starter Project (React + Express)

This project includes:
- Frontend: React (Vite) in `frontend/`
- Backend: Node.js + Express in `backend/`
- User auth (register/login) using bcrypt + JWT
- Admin product CRUD (protected by JWT + isAdmin flag)
- Payment gateway integrations:
  - Stripe (Checkout Session) — backend route: `/api/create-checkout-session`
  - Razorpay (Order creation) — backend route: `/api/razorpay-order`
- Simple file-based persistence using JSON files in `backend/` (products.json, users.json, orders.json)

## How to run

### Backend
1. Open a terminal:
```bash
cd backend
npm install
# copy .env.example to .env and fill keys (STRIPE, RAZORPAY, JWT_SECRET)
cp .env.example .env
npm run dev
```
Backend runs on `http://localhost:4000`.

### Frontend
1. Open another terminal:
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`.

## Notes
- The admin routes require an authenticated JWT token with `isAdmin: true`. To create an admin quickly, register a user, then edit `backend/users.json` setting `"isAdmin": true` for that user and restart backend.
- Stripe and Razorpay keys in `.env` are required to actually perform payments. These are included as placeholders in `.env.example`.
- This starter uses file-based JSON for simplicity. For production use, migrate to a database (MongoDB/Postgres) and secure secret management.

