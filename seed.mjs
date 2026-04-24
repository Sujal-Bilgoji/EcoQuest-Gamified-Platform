import mongoose from 'mongoose';
import User from './models/User.js';
import Course from './models/Course.js';
import Quiz from './models/Quiz.js';
import Task from './models/Task.js';
import News from './models/News.js';
import bcryptjs from 'bcryptjs';

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/ecoquest', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB');

    console.log('🌱 Seeding database...');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Quiz.deleteMany({});
    await Task.deleteMany({});
    await News.deleteMany({});

    // Create admin user
    const adminPassword = await bcryptjs.hash('admin123', 10);
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@ecoquest.com',
      password: adminPassword,
      role: 'admin',
      school: 'EcoQuest Academy',
      xp: 5000,
      level: 50,
      streak: 30,
      coins: 500
    });

    // Create sample courses
    const courses = await Course.create([
      {
        title: 'Climate Change Fundamentals',
        description: 'Understand the science behind climate change and global warming',
        category: 'climate',
        level: 'beginner',
        content: 'Climate change is the long-term shift in global temperatures and weather patterns. Learn about greenhouse gases, carbon cycle, and human impact on our planet.',
        modules: [
          { title: 'What is Climate Change?', content: 'Introduction to climate science', videoUrl: 'https://example.com/video1' },
          { title: 'Greenhouse Gases', content: 'Understanding CO2, methane, and other gases', videoUrl: 'https://example.com/video2' },
          { title: 'Global Impact', content: 'How climate change affects our world', videoUrl: 'https://example.com/video3' }
        ],
        instructor: admin._id,
        xpReward: 100
      },
      {
        title: 'Renewable Energy Sources',
        description: 'Explore solar, wind, hydro, and other sustainable energy alternatives',
        category: 'renewable',
        level: 'beginner',
        content: 'Renewable energy sources are replenished naturally. Discover how solar panels, wind turbines, and hydroelectric dams power our future.',
        modules: [
          { title: 'Solar Energy', content: 'How photovoltaic cells convert sunlight to electricity', videoUrl: 'https://example.com/video4' },
          { title: 'Wind Power', content: 'Understanding wind turbines and wind farms', videoUrl: 'https://example.com/video5' },
          { title: 'Hydroelectric & Geothermal', content: 'Water and Earth heat as energy sources', videoUrl: 'https://example.com/video6' }
        ],
        instructor: admin._id,
        xpReward: 100
      },
      {
        title: 'Waste Management & Recycling',
        description: 'Learn about waste reduction, recycling programs, and circular economy',
        category: 'waste',
        level: 'beginner',
        content: 'Proper waste management is crucial for environmental protection. Master the principles of reduce, reuse, recycle.',
        modules: [
          { title: '3Rs of Waste', content: 'Reduce, Reuse, Recycle explained', videoUrl: 'https://example.com/video7' },
          { title: 'Recycling Programs', content: 'How to participate in recycling initiatives', videoUrl: 'https://example.com/video8' },
          { title: 'Circular Economy', content: 'Designing products for sustainability', videoUrl: 'https://example.com/video9' }
        ],
        instructor: admin._id,
        xpReward: 100
      },
      {
        title: 'Water Conservation',
        description: 'Understand water resources and learn sustainable water usage practices',
        category: 'water',
        level: 'intermediate',
        content: 'Water is life. Learn how to conserve water and protect our precious water resources.',
        modules: [
          { title: 'Water Crisis', content: 'Global water scarcity issues', videoUrl: 'https://example.com/video10' },
          { title: 'Conservation Tips', content: 'Practical ways to save water daily', videoUrl: 'https://example.com/video11' },
          { title: 'Water Treatment', content: 'How to purify and recycle water', videoUrl: 'https://example.com/video12' }
        ],
        instructor: admin._id,
        xpReward: 100
      },
      {
        title: 'Biodiversity & Ecosystem Protection',
        description: 'Protect wildlife and understand the importance of biodiversity',
        category: 'biodiversity',
        level: 'intermediate',
        content: 'Biodiversity is essential for ecosystem health. Learn how to protect endangered species and preserve natural habitats.',
        modules: [
          { title: 'What is Biodiversity?', content: 'Species diversity and ecosystem complexity', videoUrl: 'https://example.com/video13' },
          { title: 'Endangered Species', content: 'Conservation efforts for at-risk species', videoUrl: 'https://example.com/video14' },
          { title: 'Habitat Protection', content: 'Preserving natural ecosystems', videoUrl: 'https://example.com/video15' }
        ],
        instructor: admin._id,
        xpReward: 100
      }
    ]);

    console.log('✅ Created 5 courses');

    // Create sample quizzes
    const quizzes = await Quiz.create([
      {
        title: 'Climate Change Quiz',
        description: 'Test your knowledge about climate change',
        category: 'daily',
        difficulty: 'easy',
        questions: [
          {
            questionText: 'What is the primary cause of climate change?',
            options: ['Natural cycles only', 'Human activities increasing greenhouse gases', 'Solar radiation changes', 'Asteroid impacts'],
            correctAnswer: 1,
            explanation: 'Human activities, especially burning fossil fuels, are the primary cause of current climate change.'
          },
          {
            questionText: 'Which gas is most responsible for global warming?',
            options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide (CO2)', 'Hydrogen'],
            correctAnswer: 2,
            explanation: 'CO2 is a major greenhouse gas that traps heat in the atmosphere.'
          },
          {
            questionText: 'How much has global temperature risen since 1880?',
            options: ['0.5°C', '1.1°C', '2.5°C', '5°C'],
            correctAnswer: 1,
            explanation: 'Global temperatures have risen approximately 1.1°C since pre-industrial times.'
          }
        ],
        timeLimit: 300,
        passingScore: 70,
        xpReward: 50,
        coinReward: 15,
        createdBy: admin._id
      },
      {
        title: 'Renewable Energy Challenge',
        description: 'Quiz about renewable energy sources',
        category: 'daily',
        difficulty: 'medium',
        questions: [
          {
            questionText: 'What percentage of global electricity comes from renewables?',
            options: ['5%', '15%', '30%', '50%'],
            correctAnswer: 1,
            explanation: 'Approximately 15-20% of global electricity comes from renewable sources.'
          },
          {
            questionText: 'Which renewable source generates the most electricity globally?',
            options: ['Solar', 'Wind', 'Hydroelectric', 'Geothermal'],
            correctAnswer: 2,
            explanation: 'Hydroelectric power is the largest source of renewable electricity globally.'
          }
        ],
        timeLimit: 600,
        passingScore: 70,
        xpReward: 100,
        coinReward: 25,
        createdBy: admin._id
      },
      {
        title: 'Recycling & Waste Management',
        description: 'Learn about proper waste management',
        category: 'daily',
        difficulty: 'easy',
        questions: [
          {
            questionText: 'What does the 3Rs stand for?',
            options: ['Repair, Reuse, Recycle', 'Reduce, Reuse, Recycle', 'Remove, Restore, Recycle', 'Reduce, Restore, Repair'],
            correctAnswer: 1,
            explanation: 'The 3Rs are Reduce, Reuse, Recycle - in that order of priority.'
          }
        ],
        timeLimit: 300,
        passingScore: 70,
        xpReward: 50,
        coinReward: 15,
        createdBy: admin._id
      }
    ]);

    console.log('✅ Created 3 quizzes');

    // Create sample tasks
    const tasks = await Task.create([
      {
        title: 'Use Public Transport',
        description: 'Take a bus, train, or carpool instead of driving alone',
        category: 'daily',
        instructions: 'Use public transportation for your daily commute. Take a photo or screenshot showing your journey.',
        proofType: 'photo',
        xpReward: 25,
        coinReward: 10,
        createdBy: admin._id,
        deadline: new Date(Date.now() + 86400000)
      },
      {
        title: 'Plant a Tree',
        description: 'Plant a tree or help with reforestation efforts',
        category: 'weekly',
        instructions: 'Plant at least one tree. Take a photo with the tree you planted.',
        proofType: 'photo',
        xpReward: 100,
        coinReward: 30,
        createdBy: admin._id,
        deadline: new Date(Date.now() + 604800000)
      },
      {
        title: 'Reduce Plastic Usage',
        description: 'Use reusable bags, bottles, or containers for one day',
        category: 'daily',
        instructions: 'Use reusable bags/bottles/containers and avoid single-use plastics. Share your experience.',
        proofType: 'text',
        xpReward: 20,
        coinReward: 8,
        createdBy: admin._id,
        deadline: new Date(Date.now() + 86400000)
      },
      {
        title: 'Save Water',
        description: 'Take a short shower (< 5 minutes) or do one water-saving action',
        category: 'daily',
        instructions: 'Take a short shower or save water in another way. Describe what you did.',
        proofType: 'text',
        xpReward: 15,
        coinReward: 5,
        createdBy: admin._id,
        deadline: new Date(Date.now() + 86400000)
      },
      {
        title: 'Participate in Beach/Park Cleanup',
        description: 'Join or organize a cleanup activity in your community',
        category: 'weekly',
        instructions: 'Participate in a beach, park, or community cleanup. Take photos of the cleanup effort.',
        proofType: 'photo',
        xpReward: 150,
        coinReward: 50,
        createdBy: admin._id,
        deadline: new Date(Date.now() + 604800000)
      }
    ]);

    console.log('✅ Created 5 tasks');

    // Create sample environmental news
    const news = await News.create([
      {
        title: 'Global Renewable Energy Record',
        description: 'Renewable energy generation hits all-time high globally',
        content: 'In 2025, renewable energy sources generated a record 2,500 GWh of electricity worldwide, accounting for over 30% of global electricity production. Solar and wind power led the growth.',
        category: 'renewable',
        imageUrl: 'https://via.placeholder.com/400x300?text=Renewable+Energy',
        source: 'International Energy Agency',
        author: 'Energy Reporter',
        isPinned: true,
        likes: 245,
        publishedDate: new Date(Date.now() - 86400000)
      },
      {
        title: 'New Climate Agreement Signed',
        description: 'Major nations commit to net-zero emissions by 2040',
        content: 'Fifty countries have signed a new environmental agreement committing to achieve net-zero carbon emissions by 2040, strengthening global climate action efforts.',
        category: 'policy',
        imageUrl: 'https://via.placeholder.com/400x300?text=Climate+Policy',
        source: 'United Nations',
        author: 'Environmental News',
        isPinned: true,
        likes: 312,
        publishedDate: new Date(Date.now() - 172800000)
      },
      {
        title: 'Plastic-Free Packaging Innovation',
        description: 'New biodegradable packaging reduces ocean pollution',
        content: 'Scientists have developed a new biodegradable packaging material that breaks down completely in 6 months, offering hope for reducing ocean plastic pollution.',
        category: 'waste',
        imageUrl: 'https://via.placeholder.com/400x300?text=Eco+Packaging',
        source: 'Environmental Research Today',
        author: 'Science Correspondent',
        likes: 189,
        publishedDate: new Date(Date.now() - 259200000)
      },
      {
        title: 'Amazon Rainforest Recovery Initiative',
        description: 'Massive reforestation project aims to restore biodiversity',
        content: 'A $2 billion initiative launched to restore 1 million hectares of the Amazon rainforest, protecting endangered species and fighting climate change.',
        category: 'research',
        imageUrl: 'https://via.placeholder.com/400x300?text=Rainforest+Protection',
        source: 'Conservation International',
        author: 'Forest Expert',
        likes: 567,
        publishedDate: new Date(Date.now() - 345600000)
      },
      {
        title: 'Water Treatment Technology Breakthrough',
        description: 'Affordable desalination process makes clean water accessible',
        content: 'Researchers have developed an affordable solar-powered desalination system that can provide clean drinking water to remote communities with limited resources.',
        category: 'research',
        imageUrl: 'https://via.placeholder.com/400x300?text=Water+Technology',
        source: 'Tech for Good',
        author: 'Innovation Reporter',
        likes: 234,
        publishedDate: new Date(Date.now() - 432000000)
      },
      {
        title: 'Electric Vehicles Market Surge',
        description: 'EV sales exceed 10 million units annually',
        content: 'Global electric vehicle sales have crossed 10 million units annually for the first time, marking a major shift towards sustainable transportation.',
        category: 'climate',
        imageUrl: 'https://via.placeholder.com/400x300?text=Electric+Vehicles',
        source: 'Automotive Weekly',
        author: 'Auto Analyst',
        likes: 421,
        publishedDate: new Date(Date.now() - 518400000)
      },
      {
        title: 'Community Garden Movement Grows',
        description: 'Thousand of urban gardens feed local communities',
        content: 'Urban gardening initiatives have expanded to 50,000+ community gardens globally, providing fresh produce and building community resilience.',
        category: 'research',
        imageUrl: 'https://via.placeholder.com/400x300?text=Community+Garden',
        source: 'Green Living Today',
        author: 'Agriculture Writer',
        likes: 178,
        publishedDate: new Date(Date.now() - 604800000)
      },
      {
        title: 'Ocean Cleanup Project Success',
        description: 'Breakthrough in removing plastic from oceans',
        content: 'The Great Ocean Cleanup project has successfully removed 500 tons of plastic from the Pacific Ocean, demonstrating viable large-scale ocean cleanup solutions.',
        category: 'waste',
        imageUrl: 'https://via.placeholder.com/400x300?text=Ocean+Cleanup',
        source: 'Marine Science Today',
        author: 'Ocean Researcher',
        likes: 623,
        publishedDate: new Date(Date.now() - 691200000)
      },
      {
        title: 'Green Building Standards Adopted',
        description: 'All new buildings must meet sustainability requirements',
        content: 'New legislation requires all buildings constructed after 2026 to meet strict environmental standards, reducing energy consumption and carbon emissions.',
        category: 'policy',
        imageUrl: 'https://via.placeholder.com/400x300?text=Green+Building',
        source: 'Construction News',
        author: 'Building Expert',
        likes: 234,
        publishedDate: new Date(Date.now() - 777600000)
      },
      {
        title: 'Solar Energy Breaks Cost Records',
        description: 'Solar power now cheaper than fossil fuels',
        content: 'Solar energy has become the cheapest electricity source in history, making renewable energy the economically preferred choice for new power generation projects.',
        category: 'renewable',
        imageUrl: 'https://via.placeholder.com/400x300?text=Solar+Energy',
        source: 'Energy Economics',
        author: 'Energy Analyst',
        likes: 456,
        publishedDate: new Date(Date.now() - 864000000)
      }
    ]);

    console.log('✅ Created 10 environmental news items');

    // Create sample students
    const student1 = await User.create({
      name: 'Emma Green',
      email: 'emma@ecoquest.com',
      password: await bcryptjs.hash('student123', 10),
      role: 'student',
      school: 'Green High School',
      grade: '10',
      xp: 450,
      level: 5,
      streak: 12,
      coins: 120,
      enrolledCourses: [courses[0]._id, courses[1]._id],
      completedQuizzes: [quizzes[0]._id],
      completedTasks: [tasks[0]._id, tasks[2]._id]
    });

    const student2 = await User.create({
      name: 'Liam Eco',
      email: 'liam@ecoquest.com',
      password: await bcryptjs.hash('student123', 10),
      role: 'student',
      school: 'Green High School',
      grade: '11',
      xp: 680,
      level: 7,
      streak: 25,
      coins: 250,
      enrolledCourses: [courses[0]._id, courses[1]._id, courses[2]._id],
      completedQuizzes: [quizzes[0]._id, quizzes[1]._id],
      completedTasks: [tasks[0]._id, tasks[1]._id, tasks[2]._id]
    });

    const student3 = await User.create({
      name: 'Sophia Nature',
      email: 'sophia@ecoquest.com',
      password: await bcryptjs.hash('student123', 10),
      role: 'student',
      school: 'Earth Academy',
      grade: '10',
      xp: 320,
      level: 4,
      streak: 8,
      coins: 95,
      enrolledCourses: [courses[2]._id, courses[3]._id],
      completedQuizzes: [quizzes[2]._id],
      completedTasks: [tasks[3]._id]
    });

    console.log('✅ Created 3 sample students');

    // Create sample teacher
    const teacher = await User.create({
      name: 'Dr. Marcus Green',
      email: 'teacher@ecoquest.com',
      password: await bcryptjs.hash('teacher123', 10),
      role: 'teacher',
      school: 'Green High School',
      managedCourses: courses.map(c => c._id)
    });

    console.log('✅ Created 1 teacher');

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📝 Test Accounts:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('ADMIN:');
    console.log('  Email: admin@ecoquest.com');
    console.log('  Password: admin123');
    console.log('\nTEACHER:');
    console.log('  Email: teacher@ecoquest.com');
    console.log('  Password: teacher123');
    console.log('\nSTUDENTS:');
    console.log('  Email: emma@ecoquest.com');
    console.log('  Email: liam@ecoquest.com');
    console.log('  Email: sophia@ecoquest.com');
    console.log('  Password: student123 (for all)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedDatabase();
