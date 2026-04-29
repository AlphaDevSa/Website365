@echo off
REM Website365 Coolify Deployment Helper Script (Windows)
REM This script helps you prepare and monitor deployment to Coolify

echo ================================
echo Website365 Deployment Helper
echo ================================
echo.

REM Check Git status
echo Checking Git status...
git status
echo.

REM Check if there are uncommitted changes
git diff-index --quiet HEAD --
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo WARNING: You have uncommitted changes!
    echo Please commit your changes before deploying.
    echo.
    echo Run these commands:
    echo   git add .
    echo   git commit -m "your message"
    echo   git push origin master
    echo.
) else (
    echo Git working directory is clean.
    echo.
    echo Your code is ready to deploy to Coolify!
    echo.
    echo Next steps:
    echo 1. Go to your Coolify dashboard: http://83.229.75.26:8000/
    echo 2. Create/update project with GitHub repository
    echo 3. Set environment variables in Coolify
    echo 4. Trigger deployment
    echo.
    echo For manual deployment via SSH:
    echo   ssh root@83.229.75.26
    echo   cd /home/coolify/website365
    echo   bash deploy.sh
    echo.
)

pause
