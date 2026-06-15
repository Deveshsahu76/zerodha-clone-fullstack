# 📈 Zerodha Clone - Full Stack Trading Platform

A full-stack Zerodha-inspired trading platform built using React.js, Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

## 🚀 Features

* User Signup & Login Authentication
* JWT-based Secure Authentication
* MongoDB Atlas Database Integration
* Holdings Management
* Positions Management
* Orders Management
* Protected Routes
* Responsive Landing Pages
* Separate Trading Dashboard
* REST API Backend

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js

---

## 📁 Project Structure

```text
stock-project/
│
├── frontend/
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── product/
│   │   │   ├── pricing/
│   │   │   ├── support/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   │
│   │   ├── ProtectedRoute.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UserModel.js
│   │
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   ├── PositionsSchema.js
│   │   └── UserSchema.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── Holdings.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── Summary.js
│   │   │   └── WatchList.js
│   │   │
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3002
```

---

## 🔮 Future Enhancements

* Live Stock Market Data Integration
* Portfolio Analytics
* Forgot Password via Email
* User Profile Management
* Trading Charts & Market Insights

---

## 👨‍💻 Developed By

**Devesh Sahu**


