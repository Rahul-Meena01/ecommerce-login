@echo off
echo Cleaning up and pushing to GitHub...
cd "c:\Users\dell\OneDrive\Desktop\Coading\ecommerce-login"

echo Adding all files...
git add .

echo Committing changes...
git commit -m "docs: Update project documentation and clean repository"

echo Pushing to GitHub...
git push origin main

echo.
echo ✅ Successfully pushed to GitHub!
echo 🔗 Repository: https://github.com/Rahul-Meena01/ecommerce-login
echo.
pause
