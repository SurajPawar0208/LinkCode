Write-Host "====================================="
Write-Host "   Starting E-Commerce Project 🚀"
Write-Host "====================================="

# Setup backend .env if missing
if (-not (Test-Path "backend\.env")) {
    Write-Host "Creating backend\.env..."
    Copy-Item "backend\.env.example" "backend\.env"
}

# Setup frontend .env if missing
if (-not (Test-Path "frontend\.env")) {
    Write-Host "Creating frontend\.env..."
    "VITE_API_BASE=http://localhost:4000" | Out-File -FilePath "frontend\.env" -Encoding utf8
}

# Start backend
Start-Process powershell -ArgumentList "cd backend; npm install; npm run dev"

# Start frontend
Start-Process powershell -ArgumentList "cd frontend; npm install; npm run dev"

Write-Host "-------------------------------------"
Write-Host "Backend running on: http://localhost:4000"
Write-Host "Frontend running on: http://localhost:5173"
Write-Host "-------------------------------------"
