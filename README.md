# Forever Fullstack

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com/)
[Live Demo](https://forever-backend-theta-olive.vercel.app)

A modular MERN (MongoDB, Express, React, Node.js) fullstack demo project with separate front-end, back-end, and admin panel.

---

## 📁 Project Structure

```
Forever_Fullstack/
│
├── backend/      # Node.js + Express backend API (RESTful server)
├── frontend/     # React + Vite frontend (main user-facing application)
├── admin/        # React + Vite admin panel (management dashboard)
└── ...           # other config and project files
```

---

## 🌐 Frontend (`/frontend`)

**Tech:**  
- React (with Vite)
- JavaScript (ES6+)
- CSS Modules or Tailwind (add your CSS tech here)

**Purpose:**  
This is the main client-side application, where users interact with the site. It consumes API data from the backend, displays content, and manages user experience (routing, UI, etc).

**Key Features:**  
- Modern React SPA structure
- Fast development with Vite (HMR, quick builds)
- Handles authentication, product browsing, user actions, etc.
- Easily extendable with new UI components or pages

**Start Frontend:**
```sh
cd frontend
npm install
npm start
```
App runs at [http://localhost:5173](http://localhost:5173) by default.

---

## 🔗 Backend (`/backend`)

**Tech:**  
- Node.js
- Express
- (MongoDB optional, add info if present)
- CORS, body-parser, JWT, and other RESTful API utilities

**Purpose:**  
Serves as the RESTful API server. Handles business logic, authentication, data storage, and provides endpoints for the frontend (and admin panel).

**Key Features:**  
- Modular Express routes and controllers
- User authentication (JWT or session-based)
- CRUD operations for users, products, etc.
- Central place for application state and security

**Start Backend:**
```sh
cd backend
npm install
npm start
```
API runs at [http://localhost:4000](http://localhost:4000).

---

## 🛠️ Admin Panel (`/admin`)

**Tech:**  
- React (with Vite)
- JavaScript

**Purpose:**  
A separate dashboard for admins/managers to handle users, products, orders, and other management tasks.

**Key Features:**  
- Secure login for admins
- Manage resources (CRUD for users/products/orders)
- Dashboard analytics and controls

**Start Admin Panel:**
```sh
cd admin
npm install
npm start
```
Runs at [http://localhost:5174](http://localhost:5174) or your configured port.

---

## ⚡ How Everything Connects

- The **frontend** and **admin panel** are both React apps, but serve different audiences.
- Both connect to the **backend API** for data and actions.
- The backend may connect to a database (MongoDB or another, add details as needed).
- CORS is enabled for local development.
- Environment variables (`.env`) control API endpoints and secrets.

---

## 🧩 Customization & Extending

- **To add new features:**  
  - Extend backend routes/controllers in `/backend`
  - Add new React components/pages in `/frontend` or `/admin`
- **To connect a real database (MongoDB):**  
  - Add models and DB connection in backend
  - Update API endpoints as needed

---

## 🧑‍💻 Author

[Nityanand Vishwakarma](https://github.com/nityanand22)

---

## 📄 License

For educational and demonstration purposes.

---

> ⭐ Feel free to fork, use, and contribute!
