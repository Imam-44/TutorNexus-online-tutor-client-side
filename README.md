# 🌍 Language Exchange - Online Tutor Booking Platform

A user-friendly, fully responsive platform that connects learners with tutors worldwide. Users can browse tutors by language, add tutorials, book sessions, and leave reviews — all with secure login, protected routes, and an elegant design.

🌐 **Live Website:** [https://your-client-site.firebase.app](https://assignment-11-clint-7c349.web.app/)  

📁 **Client GitHub Repository:** [https://github.com/your-username/language-exchange-client](https://github.com/Imam-44/TutorNexus-online-tutor-client-side.git)  
📁 **Server GitHub Repository:** [https://github.com/your-username/language-exchange-server](https://github.com/Imam-44/TutorNexus-online-tutor-server-side.git)

---

## 🎯 Project Purpose

To create an online tutoring platform that allows learners to find tutors based on language preferences, book sessions securely, and engage in global language exchange.

Inspired by platforms like **Preply** and **Italki**.

---

## 📸 Screenshot

![Language Exchange Screenshot](https://i.ibb.co.com/Q3rKC3KZ/assignment-11.png)

---

## 🧰 Technologies Used

### ⚛️ Client:
- React.js
- React Router DOM
- Firebase Auth
- JWT (Token-based Authentication)
- Tailwind CSS + DaisyUI / Mamba UI / Chakra UI (one used)
- Axios
- React Toastify / SweetAlert2
- Framer Motion / Custom Animations
- Light/Dark Theme Toggle
- React Context API

### 🛠️ Server:
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS
- JSON Web Token (JWT)
- Vercel for deployment

---

## ✨ Core Features

- 🔐 Secure User Authentication (Email/Password & Google)
- 🔐 JWT-Based Protected Routes
- 📚 Browse Tutors by Category
- 📦 Add, Update, Delete Tutorials (CRUD)
- 🛒 Book Tutor Sessions
- ⭐ Review Tutors (using MongoDB `$inc`)
- 🔍 Search Tutors by Language
- 🌙 Light/Dark Theme Toggle
- 📊 Stats Section: Total Tutors, Reviews, Languages, Users
- 📱 Fully Responsive for All Devices
- ⚠️ Error Page, Loading Spinners, Proper UI Feedback

---

## 🧪 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Home page with banner, stats, categories & extras |
| `/login` | Login page with email/password & Google |
| `/register` | Registration page |
| `/find-tutors` | Browse all tutors |
| `/find-tutors/:category` | Tutors by specific language category |
| `/tutor/:id` | Tutor details with Book button (Private) |
| `/my-booked-tutors` | View booked tutors and review (Private) |
| `/add-tutorials` | Add a new tutorial (Private) |
| `/my-tutorials` | View, edit, delete own tutorials (Private) |
| `/update-tutorial/:id` | Update tutorial page or modal |
| `*` | 404 Not Found Page |

---

## 🌐 Environment Variables

### 🧾 Client `.env`:
