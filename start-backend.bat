@echo off
REM EcoQuest Backend Startup Script

echo.
echo ========================================
echo  EcoQuest Backend Startup
echo ========================================
echo.

cd backend

echo Checking for node_modules...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo Creating .env file if it doesn't exist...
if not exist ".env" (
    echo Creating .env file...
    (
        echo MONGODB_URI=mongodb://localhost:27017/ecoquest
        echo JWT_SECRET=ecoquest_secret_key_2026_change_in_production
        echo PORT=5000
        echo NODE_ENV=development
    ) > .env
)

echo.
echo ========================================
echo  Starting Express Backend Server...
echo ========================================
echo  Server will run on: http://localhost:5000
echo ========================================
echo.
echo Make sure MongoDB is running locally!
echo.

call npm start

pause
