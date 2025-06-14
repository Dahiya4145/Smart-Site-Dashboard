# 🛠️ Smart Site Dashboard – Backend (Server Only)

This repository contains the **backend code** for the **Smart Site Dashboard** project — a construction site management system built using the MERN stack.

> 🚨 **Note:** This repository is **only for backend deployment**.  
> To access the complete project (client + admin + backend), visit the main repository:  
> 👉 [Smart Site Dashboard – Complete Project](https://github.com/Dahiya4145/Smart_-Site_Dashboard_Complete_project)

---

## ⚙️ Tech Stack (Backend)

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT Authentication**
- **Socket.io**
---

## 📦 Folder Structure

```

server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env (you need to create)
├── server.js

````

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v14+)
- MongoDB URI (Atlas or local)

---

### 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/Dahiya4145/smart-site-dashboard-server.git
cd smart-site-dashboard-server
````

---

### 📝 Step 2: Setup `.env`

Create a `.env` file in the `server/` directory and add your configuration:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=7700
```

---

### 📦 Step 3: Install Dependencies

```bash
npm install
```

---

### ▶️ Step 4: Run the Server

You can start the server using:

```bash
nodemon server.js
```

Or:

```bash
npm start
```

The backend will run on:
📍 `http://localhost:7700`

---

## 📚 API Endpoints

The backend provides RESTful APIs for:

* User Authentication
* Sites Management
* Tasks, Materials, Labor Logs
* Notifications
* Role-based Access Control

> See Postman collection or frontend integration for full API usage.

---

## 🔗 Related Repositories

* ✅ [Smart Site Dashboard – Complete Project (Frontend + Admin + Backend)](https://github.com/Dahiya4145/Smart_-Site_Dashboard_Complete_project)

---

## 👨‍💻 Author

**Nishant Dahiya**
📧 [Gmail](dahiya4145@gmail.com)
💼 [LinkedIn](https://www.linkedin.com/in/nishant-dahiya-080bb4259/)

---

## 📄 License

This project is licensed under the MIT License.

```


