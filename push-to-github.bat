@echo off
REM Script to automatically push changes to GitHub
REM Usage: push-to-github.bat "Your commit message"

echo 🚀 Starting GitHub push process...

REM Check if commit message is provided
if "%~1"=="" (
    echo No commit message provided. Using default message.
    set COMMIT_MSG=Update project files
) else (
    set COMMIT_MSG=%~1
)

REM Check if there are any changes
git diff --quiet && git diff --staged --quiet
if %errorlevel% equ 0 (
    echo No changes detected. Nothing to commit.
    pause
    exit /b 0
)

REM Add all changes
echo 📁 Adding all changes...
git add .

REM Show what will be committed
echo 📋 Files to be committed:
git diff --staged --name-only

REM Commit changes
echo 💾 Committing changes with message: '%COMMIT_MSG%'
git commit -m "%COMMIT_MSG%"

REM Check if commit was successful
if %errorlevel% neq 0 (
    echo ❌ Commit failed!
    pause
    exit /b 1
)

echo ✅ Commit successful!

REM Push to GitHub
echo 🌐 Pushing to GitHub...
git push

REM Check if push was successful
if %errorlevel% neq 0 (
    echo ❌ Push failed!
    pause
    exit /b 1
)

echo 🎉 Successfully pushed to GitHub!
echo Repository: https://github.com/thejwx/hello-nextjs-app
echo ✨ All done!
pause