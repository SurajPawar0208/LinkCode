@echo off
echo =====================================
echo   Starting E-Commerce Project 🚀
echo =====================================

:: Start backend
cd backend
start cmd /k "npm install && npm run dev"
cd ..

:: Start frontend
cd frontend
start cmd /k "npm install && npm run dev"
cd ..

echo -------------------------------------
echo Backend running on: http://localhost:4000
echo Frontend running on: http://localhost:5173
echo -------------------------------------
pause
