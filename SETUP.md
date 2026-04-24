# 🌱 EcoQuest - Quick Start Guide

## Prerequisites

- **Node.js** v16+ (Download from nodejs.org)
- **MongoDB** (Download from mongodb.com or use MongoDB Atlas cloud)
- **npm** or **yarn** (comes with Node.js)

---

## 🚀 Quick Start (2 minutes)

### Step 1: Install MongoDB

**Option A: Local Installation**
1. Download MongoDB Community Edition from https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. MongoDB will run on `mongodb://localhost:27017`

**Option B: Cloud (MongoDB Atlas)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster and get your connection string
4. Update `backend/.env` with your Atlas connection string

### Step 2: Start the Backend

**Windows:**
```bash
start-backend.bat
```

**macOS/Linux:**
```bash
bash start-backend.sh
```

**Manual (Any OS):**
```bash
cd backend
npm install
npm start
```

Expected output:
```
✅ MongoDB connected
🚀 EcoQuest Backend running on port 5000
```

### Step 3: Start the Frontend

**In a NEW terminal window:**

**Windows:**
```bash
start-frontend.bat
```

**macOS/Linux:**
```bash
bash start-frontend.sh
```

**Manual (Any OS):**
```bash
cd frontend
npm install
npm run dev
```

Expected output:
```
VITE v5.4.21 ready in XXX ms
➜ Local: http://localhost:3000/
```

### Step 4: Open Your Browser

Navigate to: **http://localhost:3000**

You should see the EcoQuest home page! 🎉

---

## 📝 Creating Test Accounts

### Student Account
1. Click **"Sign Up"** on homepage
2. Choose role: **"Student"**
3. Fill in details:
   - Name: `John Student`
   - Email: `student@example.com`
   - Password: `password123`
   - School: `Green High School`
   - Grade: `10`
4. Click **Sign Up**
5. Auto-redirects to **Student Dashboard** ✅

### Teacher/Admin Account
1. Click **"Sign Up"** on homepage
2. Choose role: **"Teacher"**
3. Fill in details:
   - Name: `Jane Teacher`
   - Email: `teacher@example.com`
   - Password: `password123`
   - School: `Green High School`
4. Click **Sign Up**
5. Auto-redirects to **Admin Dashboard** ✅

---

## 🗂️ Project Structure

```
ecoquest-rebuild/
├── backend/                         # Express API Server
│   ├── models/                      # MongoDB Schemas
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Quiz.js
│   │   ├── Task.js
│   │   └── News.js
│   ├── routes/                      # API Endpoints
│   │   ├── auth.js                  # Login/SignUp
│   │   ├── users.js                 # User Profiles
│   │   ├── courses.js               # Course Management
│   │   ├── quizzes.js               # Quiz System
│   │   ├── tasks.js                 # Task Management
│   │   ├── news.js                  # News Feed
│   │   ├── leaderboard.js           # Rankings
│   │   └── admin.js                 # Admin Dashboard
│   ├── middleware/
│   │   └── auth.js                  # JWT Authentication
│   ├── server.js                    # Express App
│   ├── package.json
│   └── .env                         # Configuration
│
├── frontend/                         # React Vite SPA
│   ├── src/
│   │   ├── components/
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   ├── StudentDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/
│   │   │   └── api.js               # API Client
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Auth State
│   │   ├── App.jsx                  # Routes
│   │   └── main.jsx                 # Entry Point
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── start-backend.bat                # Windows Backend Starter
├── start-frontend.bat               # Windows Frontend Starter
├── start-backend.sh                 # macOS/Linux Backend Starter
├── start-frontend.sh                # macOS/Linux Frontend Starter
└── README.md                        # Full Documentation
```

---

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/stats` - Get user statistics

### Courses
- `GET /api/courses` - List all courses
- `POST /api/courses` - Create course (admin)
- `POST /api/courses/:id/enroll` - Enroll in course

### Quizzes
- `GET /api/quizzes` - List quizzes
- `POST /api/quizzes/:id/submit` - Submit quiz answers

### Tasks
- `GET /api/tasks/daily/tasks` - Get daily tasks
- `POST /api/tasks/:id/submit` - Submit task proof
- `POST /api/tasks/:id/verify/:index` - Verify submission (admin)

### News
- `GET /api/news` - Get environmental news
- `POST /api/news/:id/like` - Like news article

### Leaderboard
- `GET /api/leaderboard` - Global rankings
- `GET /api/leaderboard/school/:school` - School rankings

### Admin
- `GET /api/admin/stats` - Platform statistics
- `GET /api/admin/users` - List all users
- `GET /api/admin/pending-verifications` - Tasks awaiting verification

---

## 🎨 Features Overview

### Student Dashboard
- 📊 View XP, Level, Streak, Coins
- 📚 Browse and enroll in courses
- 🧠 Take daily quizzes
- ✅ Complete and submit daily tasks
- 🏆 Check global & school leaderboards
- 📰 Read environmental news

### Admin Dashboard (Teachers)
- 📊 View platform statistics
- 👥 Manage students and teachers
- ✅ Verify student task submissions
- 📚 Create courses & quizzes
- ✅ Create tasks and set deadlines
- 📰 Post environmental news
- 📋 Manage verified tasks

---

## 🔐 Authentication Flow

```
User Signs Up → Password Hashed → User Created → JWT Token Generated → 
Token Stored in localStorage → Auto-Login → Redirect Based on Role

Student → Student Dashboard
Teacher → Admin Dashboard
```

---

## 🐛 Troubleshooting

### "Cannot GET /"
- Make sure frontend is running on port 3000
- Check browser console for errors
- Verify Vite server started correctly

### "Connection refused" when accessing API
- Ensure backend is running on port 5000
- Check backend terminal for errors
- Verify MongoDB is connected

### "MongoDB not connected"
- Start MongoDB service locally OR
- Update `.env` with MongoDB Atlas connection string
- Restart backend server

### Bundle/Build errors
- Delete `node_modules` and `package-lock-json`
- Run `npm install` again
- Clear browser cache (Ctrl+Shift+Delete)

### Port already in use
- Frontend default: 3000 (change in `vite.config.js`)
- Backend default: 5000 (change in `.env`)
- Or kill the process using the port:
  - Windows: `netstat -ano | findstr :PORT` then `taskkill`
  - macOS/Linux: `lsof -i :PORT` then `kill PID`

---

## 📚 Database

MongoDB collections created automatically on first run:

- `users` - Student and teacher accounts
- `courses` - Educational courses
- `quizzes` - Quiz questions and scores
- `tasks` - Daily environmental tasks
- `news` - Environmental news articles

---

## 🔄 Common Workflows

### As a Student
1. Sign up with student role
2. View student dashboard stats
3. Enroll in a course
4. Take the daily quiz
5. Submit a task with proof
6. Wait for teacher verification
7. Gain XP/coins when verified
8. Climb the leaderboard

### As a Teacher
1. Sign up with teacher role
2. View admin dashboard
3. Create a new course
4. Create a quiz
5. Create a daily task
6. Review pending task verifications
7. Approve/reject student submissions
8. Monitor student progress

---

## 💾 Environment Variables

### Backend `.env`
```env
MONGODB_URI=mongodb://localhost:27017/ecoquest
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
```

### Frontend (Optional)
- No .env file needed
- API URL hardcoded in `src/services/api.js`

---

## 📦 Key Dependencies

**Backend:**
- express - Web framework
- mongoose - MongoDB ORM
- jsonwebtoken - Authentication
- bcryptjs - Password hashing
- cors - Cross-origin requests

**Frontend:**
- react - UI library
- vite - Build tool
- react-router-dom - Navigation
- axios - HTTP client
- tailwindcss - CSS styling
- recharts - Charts/graphs

---

## 🎯 Next Steps

After running the project:

1. **Explore both dashboards** - Try student and teacher interfaces
2. **Create test data** - Add courses, quizzes, and tasks
3. **Test the flow** - Submit tasks and verify them
4. **Check leaderboards** - See rankings update in real-time
5. **Customize** - Add your own courses and tasks

---

## 📞 Support

For issues or questions:
1. Check the full README.md in the project root
2. Review error messages in browser console
3. Check backend terminal output
4. Verify MongoDB connection
5. Try restarting both servers

---

## ✨ You're All Set!

EcoQuest is now ready to run. Let's make environmental education engaging! 🌍

**Happy coding!** 🚀

