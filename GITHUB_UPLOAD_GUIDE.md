## 🚀 Manual GitHub Upload Steps

### Step 1: Create Personal Access Token

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: repo, workflow, write:packages
4. Copy the token (you'll need it)

### Step 2: Update Remote URL

Run in terminal:

```bash
cd "c:\Users\dell\OneDrive\Desktop\Coading\ecommerce-login"
git remote set-url origin https://YOUR_TOKEN@github.com/Rahul-Meena01/ecommerce-login.git
git push -u origin main
```

Replace YOUR_TOKEN with the token you generated.

### Step 3: Alternative - Delete and Re-create

If still having issues:

```bash
# Remove existing remote
git remote remove origin

# Add it back with token
git remote add origin https://YOUR_TOKEN@github.com/Rahul-Meena01/ecommerce-login.git

# Push
git push -u origin main
```

### Step 4: Verify Upload

Check your repository at: https://github.com/Rahul-Meena01/ecommerce-login
