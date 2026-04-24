const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecoquest';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/quizzes', require('./routes/quizzes'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/news', require('./routes/news'));
app.use('/api/leaderboard', require('./routes/leaderboard'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/carbon', require('./routes/carbon'));
app.use('/api/challenges', require('./routes/challenges'));
app.use('/api/ecocity', require('./routes/ecocity'));
app.use('/api/timeline', require('./routes/timeline'));
app.use('/api/ecobot', require('./routes/ecobot'));
app.use('/api/media', require('./routes/media'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running! 🌱' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 EcoQuest Backend running on port ${PORT}`);
});
