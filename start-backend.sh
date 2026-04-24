#!/bin/bash
# EcoQuest Backend Startup Script for macOS/Linux

echo ""
echo "========================================"
echo " EcoQuest Backend Startup"
echo "========================================"
echo ""

cd backend

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cat > .env << EOF
MONGODB_URI=mongodb://localhost:27017/ecoquest
JWT_SECRET=ecoquest_secret_key_2026_change_in_production
PORT=5000
NODE_ENV=development
EOF
fi

echo ""
echo "========================================"
echo " Starting Express Backend Server..."
echo "========================================"
echo " Server will run on: http://localhost:5000"
echo "========================================"
echo ""
echo "Make sure MongoDB is running locally!"
echo ""

npm start
