@echo off
REM EcoQuest Frontend Startup Script

echo.
echo ========================================
echo  EcoQuest Frontend Startup
echo ========================================
echo.

cd frontend

echo Checking for node_modules...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo.
echo ========================================
echo  Starting React Vite Server...
echo ========================================
echo  App will run on: http://localhost:3000
echo  Backend API: http://localhost:5000
echo ========================================
echo.

call npm run dev

pause
