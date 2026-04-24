# 🌱 EcoQuest - Rebuilt Edition

## Project Overview
EcoQuest is a gamified environmental education platform designed for schools and colleges. It combines learning, task completion, and competitive elements to inspire students to take action on environmental issues.

### ✨ Key Improvements in This Version
✅ **React Vite Frontend** - Fast, modern, production-ready SPA
✅ **Express.js Backend** - Scalable Node.js API with clean architecture
✅ **MongoDB Database** - Flexible NoSQL data management
✅ **Two Dashboards** - Role-based interfaces for students and teachers
✅ **Complete Feature Set** - Courses, quizzes, tasks, news, leaderboards

---

## 📁 Project Structure

```
ecoquest-rebuild/
├── backend/                    # Express.js + MongoDB API
│   ├── models/                # Mongoose schemas
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Quiz.js
│   │   ├── Task.js
│   │   └── News.js
│   ├── routes/                # API endpoints
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── courses.js
│   │   ├── quizzes.js
│   │   ├── tasks.js
│   │   ├── news.js
│   │   ├── leaderboard.js
│   │   └── admin.js
│   ├── middleware/            # JWT auth, validation
│   │   └── auth.js
│   ├── server.js              # Express app entry point
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
└── frontend/                   # React Vite SPA
    ├── src/
    │   ├── components/        # Reusable React components
    │   │   └── PrivateRoute.jsx
    │   ├── pages/             # Full page components
    │   │   ├── HomePage.jsx
    │   │   ├── LoginPage.jsx
    │   │   ├── SignupPage.jsx
    │   │   ├── StudentDashboard.jsx
    │   │   └── AdminDashboard.jsx
    │   ├── services/          # API calls with axios
    │   │   └── api.js
    │   ├── context/           # React context providers
    │   │   └── AuthContext.jsx
    │   ├── hooks/             # Custom React hooks
    │   ├── App.jsx            # Root component with routing
    │   ├── main.jsx           # React entry point
    │   ├── App.css
    │   └── index.css
    ├── index.html             # HTML template
    ├── vite.config.js         # Vite configuration
    ├── tailwind.config.js     # Tailwind CSS config
    ├── postcss.config.js      # PostCSS config
    ├── package.json
    ├── .gitignore
    └── .env.example

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file**
   ```bash
   cp .env.example .env
   ```
   
   Configure your MongoDB URI and JWT secret:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ecoquest
   JWT_SECRET=your_secret_key_change_in_production
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   App runs on `http://localhost:3000`

---

## 📚 Features

### For Students
- 📚 **Courses**: Enroll in environmental education courses
- 🧠 **Quizzes**: Take daily quizzes and earn XP
- ✅ **Tasks**: Complete daily environmental tasks
- 📈 **Progress**: Track XP, level, streak, and coins
- 🏆 **Leaderboard**: Compete globally and by school
- 📰 **News**: Stay updated on environmental news

### For Teachers/Admins
- ✅ **Task Verification**: Review student task submissions
- 📚 **Course Management**: Create and manage courses
- 🧠 **Quiz Creation**: Build quizzes with multiple question types
- 👥 **User Management**: Manage students and permissions
- 📊 **Analytics**: View platform-wide statistics
- 📰 **News Publishing**: Post environmental news and updates

---

## 🔐 Authentication

The platform uses **JWT (JSON Web Tokens)** for secure authentication:

- **Sign Up**: Create account as Student or Teacher
- **Login**: Authenticate with email/password
- **Role-Based Access**: Automatic redirect to appropriate dashboard
- **Token Storage**: JWT stored in localStorage
- **Auto-Logout**: Token validation on app load

### User Roles
- **Student**: Access student dashboard, enroll courses, submit tasks
- **Teacher**: Access admin dashboard, verify tasks, create content
- **Admin**: Full platform management

---

## 📊 Database Schema

### User
```javascript
{
  name, email, password (hashed),
  role: 'student' | 'teacher' | 'admin',
  school, grade, bio, avatar,
  xp, level, streak, coins,
  badges: [{badgeId, earnedAt}],
  enrolledCourses: [CourseId],
  completedQuizzes: [QuizId],
  completedTasks: [TaskId]
}
```

### Course
```javascript
{
  title, description, category,
  level, content, modules,
  instructor: UserId,
  enrolledStudents: [{studentId, enrolledAt, progress}],
  xpReward
}
```

### Quiz
```javascript
{
  title, description, category,
  difficulty, questions: [{questionText, options, correctAnswer}],
  timeLimit, passingScore,
  xpReward, coinReward,
  createdBy: UserId
}
```

### Task
```javascript
{
  title, description, category,
  instructions, proofType: 'photo|text|video',
  xpReward, coinReward,
  submissions: [{studentId, proof, verified, verifiedBy}],
  deadline, createdBy: UserId
}
```

### News
```javascript
{
  title, description, content,
  category, imageUrl, sourceUrl, source,
  isPinned, likes, likedBy: [UserId],
  publishedDate
}
```

---

## 🔌 API Endpoints

### Auth
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/stats` - Get user stats

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (admin)
- `POST /api/courses/:id/enroll` - Enroll in course

### Quizzes
- `GET /api/quizzes` - Get all quizzes
- `GET /api/quizzes/:id` - Get single quiz
- `POST /api/quizzes` - Create quiz (admin)
- `POST /api/quizzes/:id/submit` - Submit answers

### Tasks
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/daily/tasks` - Get daily tasks
- `POST /api/tasks` - Create task (admin)
- `POST /api/tasks/:id/submit` - Submit task
- `POST /api/tasks/:id/verify/:index` - Verify submission (admin)

### News
- `GET /api/news` - Get all news
- `GET /api/news/pinned` - Get pinned news
- `POST /api/news` - Create news (admin)
- `POST /api/news/:id/like` - Like news
- `POST /api/news/:id/pin` - Pin news (admin)

### Leaderboard
- `GET /api/leaderboard` - Global leaderboard
- `GET /api/leaderboard/school/:school` - School leaderboard
- `GET /api/leaderboard/top/performers` - Top performers

### Admin
- `GET /api/admin/stats` - Platform statistics
- `GET /api/admin/users` - All users
- `PUT /api/admin/users/:id/role` - Update user role
- `GET /api/admin/pending-verifications` - Pending verifications

---

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **Lucide React** - Icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin handling

---

## 📖 Usage Guide

### For Students

1. **Create Account**
   - Go to Home → Sign Up
   - Choose "Student" role
   - Fill in details and create account

2. **Access Dashboard**
   - Auto-redirects to Student Dashboard
   - View XP, Level, Streak, Coins

3. **Complete Course**
   - Browse "Available Courses"
   - Click "Enroll" to join course
   - Read course content

4. **Take Quizzes**
   - Find daily quizzes on dashboard
   - Answer questions and submit
   - Earn XP and coins if passed

5. **Submit Tasks**
   - View "Today's Tasks"
   - Click "Submit Proof"
   - Upload photo/video or text
   - Wait for teacher verification

6. **Check Leaderboard**
   - View global and school rankings
   - Compete with peers

---

### For Teachers

1. **Create Account**
   - Go to Home → Sign Up
   - Choose "Teacher" role
   - Fill in details and create account

2. **Access Admin Dashboard**
   - Auto-redirects to Admin Dashboard
   - View platform statistics

3. **Manage Content**
   - Go to "Content" tab
   - Create courses, quizzes, tasks, news

4. **Verify Tasks**
   - Go to "Verifications" tab
   - Review student submissions
   - Approve or reject with feedback

5. **Manage Users**
   - Go to "Users" tab
   - View all students and teachers
   - Manage roles and permissions

---

## 🔄 Workflow Example

### Student Task Submission
1. Student sees daily task
2. Completes the environmental action
3. Takes photo as proof
4. Submits via dashboard
5. Teacher reviews submission
6. Teacher approves/rejects
7. If approved: Student gains XP, coins, streak

### Quiz Completion
1. Student takes quiz
2. Answers all questions
3. Submits answers
4. System calculates score
5. If score ≥ passing score: Student gains XP and coins

---

## 🚀 Future Enhancements

- [ ] Real-time notifications
- [ ] Video course modules
- [ ] Carbon footprint calculator
- [ ] AI-powered recommendations
- [ ] Mobile app (React Native)
- [ ] Social features (friends, challenges)
- [ ] Gamification badges system
- [ ] Integration with environmental APIs
- [ ] Advanced analytics dashboard
- [ ] Payment system for premium features

---

## 🐛 Troubleshooting

### Frontend not connecting to Backend
- Ensure backend is running on port 5000
- Check proxy in `vite.config.js`
- Verify API_BASE_URL in `src/services/api.js`

### MongoDB Connection Error
- Check MongoDB is running locally or Atlas connection string
- Verify MONGODB_URI in `.env`

### JWT Authentication Issues
- Clear localStorage and login again
- Check JWT_SECRET matches between frontend and backend
- Verify token is being sent in Authorization header

---

## 📝 Notes

- All passwords are hashed using bcryptjs before storage
- JWT tokens expire after 7 days
- MongoDB indexes are recommended for production
- CORS is enabled for frontend development
- Rate limiting should be added for production API

---

## 👥 Contributing

This is a Solo Project. Feel free to use, fork, and improve!

---

## 📄 License

MIT License - Feel free to use for educational and commercial purposes.

---

## 🌱 Made with ❤️ for the Environment

EcoQuest aims to make environmental education engaging, interactive, and impactful. Every action counts! 🌍

