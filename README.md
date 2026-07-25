# 🛡️ SheShield - Women Safety & Emergency Assistance Platform

## 📌 Project Overview

SheShield is a women safety and emergency assistance platform designed to provide quick help during emergency situations.

The platform allows users to send SOS alerts with their location details, enables administrators to monitor emergency requests, and connects verified volunteers to assist users during critical situations.

SheShield provides a secure role-based system with three types of users:

- 👩 User
- 🤝 Volunteer
- 👨‍💻 Admin


---

# 🚀 Features

## 👩 User Module

- User registration and login
- Secure JWT authentication
- Create SOS emergency alerts
- Share emergency location coordinates
- View SOS alert history
- Track emergency status
- View assigned volunteer details


## 🤝 Volunteer Module

- Volunteer registration
- Volunteer login
- Admin verification system
- View assigned SOS requests
- Accept emergency alerts
- Resolve emergency requests


## 👨‍💻 Admin Module

- Admin login
- Dashboard statistics
- View registered users
- Manage volunteers
- Approve volunteer accounts
- Monitor SOS alerts
- Assign volunteers to emergency requests


---

# 🏗️ Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React


## Backend

- Node.js
- Express.js
- REST API
- JWT Authentication


## Database

- MongoDB
- Mongoose


---

# 📂 Project Structure

```
SheShield

│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── context
│   │   └── api
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
└── README.md

```

---

# 🔐 Authentication & Authorization

SheShield uses JWT-based authentication for secure access.

The system provides role-based access:

### User
- Create SOS alerts
- View emergency status

### Volunteer
- Handle assigned emergency requests

### Admin
- Manage users, volunteers, and alerts


---

# 🔄 Emergency Workflow

```
User

   |
   | Creates SOS Alert
   ↓

Admin Dashboard

   |
   | Assigns Volunteer
   ↓

Volunteer Dashboard

   |
   | Accepts SOS
   |
   | Resolves Emergency
   ↓

User Dashboard

   |
   | Checks Updated Status

```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <your-github-link>
```

---

# Backend Setup

Navigate to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/sheshield

JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📡 API Modules

## User APIs

```
POST   /api/users/register
POST   /api/users/login
```


## Alert APIs

```
POST   /api/alerts

GET    /api/alerts/my

GET    /api/alerts/volunteer

PUT    /api/alerts/accept/:id

PUT    /api/alerts/resolve/:id
```


## Admin APIs

```
POST   /api/admin/login

GET    /api/admin/users

GET    /api/admin/volunteers

GET    /api/admin/alerts

GET    /api/admin/stats

PUT    /api/admin/volunteers/approve/:id

PUT    /api/admin/alerts/assign/:id
```

---

# 🗄️ Database Collections

## Users Collection

Stores:

- Name
- Email
- Phone
- Password
- Role


## Volunteers Collection

Stores:

- Volunteer details
- Contact information
- Verification status


## Alerts Collection

Stores:

- User ID
- Emergency location
- Alert status
- Assigned volunteer
- Created timestamp


## Admin Collection

Stores:

- Admin credentials


---

# 🎯 Future Enhancements

- Real-time SOS notifications using Socket.io
- Live location tracking with maps
- SMS and email emergency notifications
- Police emergency integration
- Mobile application
- AI-based emergency assistance


---

# 👩‍💻 Developer

**Prachi Deshmukh**

Project Name:
**SheShield - Women Safety & Emergency Assistance Platform**

Developed as an internship project.


---

# 📄 License

This project is developed for educational and internship purposes.