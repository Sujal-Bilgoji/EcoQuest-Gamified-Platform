#!/bin/bash
# EcoQuest Frontend Startup Script for macOS/Linux

echo ""
echo "========================================"
echo " EcoQuest Frontend Startup"
echo "========================================"
echo ""

cd frontend

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo ""
echo "========================================"
echo " Starting React Vite Server..."
echo "========================================"
echo " App will run on: http://localhost:3000"
echo " Backend API: http://localhost:5000"
echo "========================================"
echo ""

npm run dev
