# 🎓 SkillSphere

🌐 Live Site: https://skill-sphere-bwih.vercel.app/


## 📌 Overview
**SkillSphere** is a modern full-stack online learning platform where users can explore courses, learn skills, and manage their profiles in a smooth and secure environment.

It includes authentication, protected routes, dynamic course system, and user profile management.

---

## ✨ Features

### 🔐 Authentication System
- Built with **Better Auth**
- Sign In / Sign Up functionality
- Secure session handling
- User avatar shown in navbar
- Login / Logout system (right side navbar)

### 🏠 Home Page
- 🎯 Hero Banner section
- 📚 Top 3 featured courses
- 🆕 New Releases (6 courses)
- 👨‍🏫 Top Instructors section
- 🧑‍🎓 Student feedback banner
- 🎞️ React fast marquee reviews section

---

### 📚 Course System
- Course listing page
- Course details page (protected)
- Only authenticated users can access course details
- Route protection using middleware / proxy

---

### 👤 Profile System
- User profile page
- Profile update modal
- Edit and update user information

---

### 🧭 Navigation
- Clean and responsive navbar
- Right side:
  - Login button (if not logged in)
  - Logout button (if logged in)
  - User profile image/avatar

---

### 🔒 Protected Routes
- Course pages are protected
- Course details page requires login
- Redirect to login page if not authenticated

---

## 🛠️ Tech Stack

- ⚡ **Next.js** (App Router)
- 🎨 **Tailwind CSS**
- 💎 **DaisyUI**
- 🧩 **HeroUI**
- 🔐 **Better Auth**
- 🍃 **MongoDB**
- 🌐 REST API Integration
- 🚀 Vercel (Deployment)

## 🧱 Project Structure
```bash id="structure123"
skillsphere/
│
├── app/                # Next.js app routes
├── components/         # Reusable UI components
├── lib/                # API calls & helpers
├── models/             # MongoDB schemas
├── middleware/         # Route protection
├── context/            # Auth context (if used)
├── public/             # Static assets
└── styles/             # Global styles