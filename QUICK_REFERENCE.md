# 🌱 EcoQuest - Quick Reference

## File Locations

```
C:\Users\jnyan\Downloads\ecoquest-rebuild\
├── backend/                    # API Server
│   ├── models/                # Database models
│   ├── routes/                # API endpoints
│   ├── middleware/            # Authentication
│   ├── server.js              # Start here
│   ├── package.json
│   └── .env                   # MongoDB & JWT config
│
├── frontend/                   # React App
│   ├── src/
│   │   ├── pages/             # Page components
│   │   ├── services/          # API calls
│   │   ├── App.jsx            # Routes
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── SETUP.md                   # ← START HERE
├── BUILD_SUMMARY.md           # What was built
├── README.md                  # Full docs
├── start-backend.bat          # Windows backend
├── start-frontend.bat         # Windows frontend
├── start-backend.sh           # macOS/Linux backend
└── start-frontend.sh          # macOS/Linux frontend
```

---

## 🔧 Quick Commands

### Start Backend (Windows)
```bash
start-backend.bat
```

### Start Backend (macOS/Linux)
```bash
bash start-backend.sh
```

### Start Frontend (Windows)
```bash
start-frontend.bat
```

### Start Frontend (macOS/Linux)
```bash
bash start-frontend.sh
```

### Manual Start (Any OS)
```bash
# Terminal 1
cd backend
npm install
npm start

# Terminal 2
cd frontend
npm install
npm run dev
```

---

## 🌐 URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |
| API Health | http://localhost:5000/health |

---

## 📝 Login Credentials (After Creating Account)

**Student:**
- Email: student@example.com
- Password: password123

**Teacher:**
- Email: teacher@example.com  
- Password: password123

---

## 🛠️ API Endpoints Cheat Sheet

### Auth
```
POST   /api/auth/signup          # Register
POST   /api/auth/login           # Login
GET    /api/auth/me              # Current user
```

### Courses
```
GET    /api/courses              # List all
POST   /api/courses              # Create (admin)
POST   /api/courses/:id/enroll   # Enroll
```

### Quizzes
```
GET    /api/quizzes              # List
POST   /api/quizzes/:id/submit   # Submit answers
```

### Tasks
```
GET    /api/tasks/daily/tasks    # Daily tasks
POST   /api/tasks/:id/submit     # Submit proof
POST   /api/tasks/:id/verify/:ix # Verify (admin)
```

### Leaderboard
```
GET    /api/leaderboard          # Global
GET    /api/leaderboard/school   # By school
```

### Admin
```
GET    /api/admin/stats          # Statistics
GET    /api/admin/users          # All users
GET    /api/admin/pending-verifications
```

---

## 🔐 How Two Dashboards Work

1. **User signs up** → chooses "Student" or "Teacher"
2. **Password is hashed** → stored in MongoDB
3. **JWT token created** → sent to frontend
4. **Token stored** → in browser localStorage
5. **Routes check role**:
   - Student role → Redirects to `/student/dashboard`
   - Teacher role → Redirects to `/admin/dashboard`
6. **PrivateRoute** → Protects pages by role

---

## 📊 Database Collections

Automatically created when app first runs:

| Collection | Purpose |
|-----------|---------|
| users | Student & teacher accounts |
| courses | Educational courses |
| quizzes | Quiz questions & scores |
| tasks | Daily environmental tasks |
| news | Environmental news articles |

---

## 🎮 Gamification System

**XP** → Earned from: Quiz (30 XP), Task (25 XP)
**Level** → Calculated every 100 XP
**Coins** → Earned from Quiz (10), Task (5)
**Streak** → Increases when task verified
**Badges** → Ready to implement

---

## 🔄 Task Verification Flow

1. **Student submits proof** (photo, video, text)
2. **Goes to pending list**
3. **Teacher reviews** in verifications tab
4. **Approves or rejects**
5. **If approved** → Student gets XP + coins + streak
6. **If rejected** → Can resubmit

---

## 🌍 Environmental News System

- **Admin posts news** about: climate, renewable, waste, policy, research
- **Students like/share** articles
- **Pinned news** appears at top of feed
- **Categories** for filtering

---

## 🚨 Troubleshooting Quick Fixes

| Issue | Solution |
|-------|----------|
| Can't connect to MongoDB | Start MongoDB service locally OR add Atlas connection string to .env |
| Port 3000 in use | Change in vite.config.js: `port: 3001` |
| Port 5000 in use | Change in backend/.env: `PORT=5001` |
| Dependencies error | Delete node_modules, run `npm install` again |
| CORS error | Already configured in server.js |
| Login not working | Check MongoDB is running |

---

## 📱 Responsive Design

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Tailwind CSS responsive classes used

---

## 🔒 Security Features

✅ Passwords hashed with bcryptjs
✅ JWT with 7-day expiration
✅ CORS enabled for frontend
✅ Role-based access control
✅ Protected routes
✅ Authentication middleware

---

## 📦 Tech Stack Summary

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite + Tailwind CSS |
| Backend | Express.js + Node.js |
| Database | MongoDB |
| Auth | JWT + bcryptjs |
| HTTP | Axios |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |

---

## ✨ Features Implemented

**Student Features:**
- ✅ View dashboard stats (XP, level, streak, coins)
- ✅ Enroll in courses
- ✅ Take daily quizzes
- ✅ Submit daily tasks
- ✅ View leaderboards
- ✅ Read environmental news
- ✅ User profile management

**Teacher/Admin Features:**
- ✅ View platform statistics
- ✅ Manage users (view all)
- ✅ Verify student task submissions
- ✅ Create courses & quizzes (endpoints ready)
- ✅ Post environmental news
- ✅ View pending verifications
- ✅ User role management

---

## 🎯 What's Next?

Priority:
1. Test both dashboards
2. Create sample courses & quizzes
3. Test task submission & verification
4. Add more UI features
5. Implement rich components

Future:
- Carbon footprint calculator
- AI recommendations
- Real-time notifications
- Mobile app
- Advanced analytics

---

## 📞 Configuration Files

### Backend .env
```env
MONGODB_URI=mongodb://localhost:27017/ecoquest
JWT_SECRET=ecoquest_secret_key_2026_change_in_production
PORT=5000
NODE_ENV=development
```

### Frontend (No .env needed)
API URL in: `src/services/api.js`
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

---

## 🎓 Code Examples

### Create Account
```javascript
const { signup } = useAuth();
await signup({
  name: "John",
  email: "john@example.com",
  password: "secure123",
  role: "student",
  school: "Green High"
});
```

### Submit Task
```javascript
await taskService.submitTask(taskId, proofUrl);
```

### Get Leaderboard
```javascript
const leaderboard = await leaderboardService.getGlobalLeaderboard();
```

### Create Quiz
```javascript
await quizService.createQuiz({
  title: "Carbon Quiz",
  questions: [...],
  xpReward: 50
});
```

---

## 📊 Data Models

### User
```javascript
{
  name: "John Student",
  email: "john@example.com",
  password: "hashed_password",
  role: "student",
  xp: 250,
  level: 3,
  streak: 5,
  coins: 45,
  school: "Green High",
  grade: "10"
}
```

### Course
```javascript
{
  title: "Climate Change 101",
  description: "Learn about climate change",
  category: "climate",
  level: "beginner",
  instructor: ObjectId,
  enrolledStudents: [ObjectId],
  xpReward: 50
}
```

### Task
```javascript
{
  title: "Use Public Transport",
  description: "Take public transport instead of car",
  category: "daily",
  proofType: "photo",
  xpReward: 25,
  coinReward: 5,
  submissions: [
    {
      studentId: ObjectId,
      proof: "image_url",
      verified: true,
      verifiedBy: teacherId
    }
  ]
}
```

---

## 🚀 Deployment Checklist

- [ ] Update JWT_SECRET in .env
- [ ] Use MongoDB Atlas connection string
- [ ] Set NODE_ENV=production
- [ ] Build frontend: `npm run build`
- [ ] Test production build
- [ ] Deploy backend to Heroku/Railway
- [ ] Deploy frontend to Vercel/Netlify
- [ ] Update API URL in frontend config
- [ ] Test live application
- [ ] Set up monitoring

---

**Everything is set up and ready to go!** 🎉

Start with SETUP.md for quick start instructions.

