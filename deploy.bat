@echo off
REM Portfolio GitHub Deployment Script for Windows PowerShell
REM This script automates the GitHub Pages deployment process
REM Usage: Run this script in PowerShell from the portfolio folder

echo.
echo ================================
echo Portfolio GitHub Deployment
echo ================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo [Step 1] Checking for existing Git repository...
if exist ".git" (
    echo Git repository already exists.
) else (
    echo Initializing new Git repository...
    call git init
    if %errorlevel% neq 0 (
        echo ERROR: Failed to initialize Git repository
        pause
        exit /b 1
    )
)

echo.
echo [Step 2] Adding all files to staging...
call git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files
    pause
    exit /b 1
)
echo Files added successfully.

echo.
echo [Step 3] Creating initial commit...
call git commit -m "Initial portfolio commit"
if %errorlevel% neq 0 (
    echo Note: This may be the first commit or there are no changes.
)

echo.
echo [Step 4] GitHub Repository Information
echo.
echo Your GitHub username: 
set /p github_username="Enter your GitHub username: "

echo Your repository name should be: %github_username%.github.io
echo.
set /p confirm="Is this correct? (y/n): "
if /i not "%confirm%"=="y" (
    echo Deployment cancelled.
    pause
    exit /b 1
)

echo.
echo [Step 5] Connecting to GitHub...
set github_repo=https://github.com/%github_username%/%github_username%.github.io.git

echo Adding remote: %github_repo%
call git remote remove origin >nul 2>&1
call git remote add origin %github_repo%
if %errorlevel% neq 0 (
    echo ERROR: Failed to add remote
    pause
    exit /b 1
)

echo.
echo [Step 6] Renaming branch to 'main' (if needed)...
call git branch -M main
if %errorlevel% neq 0 (
    echo Note: Branch rename skipped or already main.
)

echo.
echo [Step 7] Pushing to GitHub...
echo This will open a browser for authentication. Please sign in with your GitHub account.
echo.
call git push -u origin main
if %errorlevel% neq 0 (
    echo ERROR: Failed to push to GitHub
    echo Please ensure:
    echo   1. Your GitHub username is correct
    echo   2. Repository %github_username%.github.io exists on GitHub
    echo   3. You have internet connection
    echo   4. Git is properly configured
    pause
    exit /b 1
)

echo.
echo ================================
echo Deployment Successful!
echo ================================
echo.
echo Your portfolio will be available at:
echo https://%github_username%.github.io
echo.
echo Note: It may take 1-5 minutes for GitHub Pages to build and deploy.
echo.
echo Next steps:
echo 1. Wait 2-5 minutes for GitHub Pages to build
echo 2. Visit https://%github_username%.github.io
echo 3. Share your portfolio!
echo.
pause
