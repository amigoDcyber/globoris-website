# 🚀 Vercel Deployment Guide for Teammates

## Quick Summary

Deploy your Globoris website to Vercel in **5 minutes** so your teammates can see it live!

---

## ⚡ Step-by-Step Instructions

### Step 1: Create GitHub Account (FREE)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Enter your email and create a strong password
4. Verify your email address
5. You're done! ✅

---

### Step 2: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Fill in the details:
   - **Repository name**: `globoris-website`
   - **Description**: `Globoris Technologies Website`
   - **Public**: Select this (so teammates can view the repo)
   - **Add .gitignore**: Choose "Node" (optional, we have our own)
3. Click "Create repository"
4. Copy the repository URL (you'll need it next)

---

### Step 3: Push Code to GitHub

Open your terminal and run these commands:

```bash
cd /home/cyb3r/Hacking/copilotdocs/globoris-website

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Globoris Technologies website"

# Rename branch to main (Vercel default)
git branch -M main

# Add remote repository (REPLACE YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/globoris-website.git

# Push code to GitHub
git push -u origin main
```

**Important**: Replace `YOUR_USERNAME` with your actual GitHub username!

If prompted for password, use a [GitHub Personal Access Token](https://github.com/settings/tokens):
1. Go to github.com/settings/tokens
2. Click "Generate new token"
3. Select: `repo` (full control of private repositories)
4. Click "Generate token"
5. Copy the token and use it as your password

---

### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Click "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Click "New Project"
6. Select your `globoris-website` repository
7. Click "Import"
8. Keep the default settings and click "Deploy"
9. **Wait 1-2 minutes for deployment** ⏳

---

### Step 5: Get Your Live URL

Once deployment is complete:

1. Vercel shows you a URL like: `https://globoris-website.vercel.app`
2. Click the URL to visit your live website
3. Share this URL with your teammates! 🎉

---

## 🌐 How to Share with Teammates

Simply send them this link:
```
https://globoris-website.vercel.app
```

They can click and see your website instantly! No installation needed.

---

## 🔄 Auto-Deployment (The Cool Part)

Every time you make changes:

1. Make edits to your code locally
2. Run these commands:
   ```bash
   git add .
   git commit -m "Your change description"
   git push origin main
   ```
3. Vercel automatically deploys your changes
4. Your teammates instantly see the updates!

**No manual deployment needed!** 🚀

---

## 🌐 Custom Domain (Optional)

Want `globoris.com` instead of `vercel.app`?

1. Buy a domain from:
   - [Google Domains](https://domains.google)
   - [Namecheap](https://www.namecheap.com)
   - [GoDaddy](https://www.godaddy.com)

2. In Vercel Dashboard:
   - Click your project
   - Go to "Settings"
   - Click "Domains"
   - Add your custom domain
   - Follow Vercel's DNS setup instructions

Cost: ~$10-15 per year

---

## 🆘 Troubleshooting

### "git: command not found"
```bash
# Install git
sudo apt-get install git
```

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Usually just need to add `--legacy-peer-deps` to build command
- In Vercel dashboard: Settings → Build & Development Settings → Build Command
  ```bash
  npm install --legacy-peer-deps && npm run build
  ```

### Can't push to GitHub
1. Make sure you're using a personal access token (not password)
2. Check that you have the right remote: `git remote -v`
3. Fix remote: `git remote set-url origin https://github.com/YOUR_USERNAME/globoris-website.git`

### Website shows 404
- Wait 2-3 minutes for deployment to complete
- Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Check Vercel dashboard for build errors

---

## 📊 Monitoring Your Deployment

In Vercel Dashboard, you can:

- ✅ View deployment history
- ✅ Check build logs
- ✅ Monitor performance
- ✅ Set up domain
- ✅ Configure environment variables
- ✅ View analytics

---

## 🎯 Complete Timeline

| Step | Time | What Happens |
|------|------|--------------|
| 1. GitHub Account | 2 min | Create free account |
| 2. GitHub Repo | 1 min | Create repository |
| 3. Push Code | 1 min | Upload your code |
| 4. Vercel Deploy | 2-3 min | Automatic build & deploy |
| **Total** | **~7 minutes** | **Website is LIVE!** |

---

## 💡 Pro Tips

- **Keep code on GitHub**: Makes it easy to collaborate with teammates
- **Use meaningful commits**: `git commit -m "Add contact form"` not just `git commit -m "fix"`
- **Deploy often**: Better to deploy small changes frequently than big changes rarely
- **Check Vercel dashboard**: See build times, traffic, and any issues
- **Share Vercel link**: Teammates don't need GitHub access, just the Vercel URL

---

## ✨ After Deployment

### For You:
- Your website is live on the internet! 🎉
- Any changes you push are automatically deployed
- You can see analytics and performance metrics

### For Your Teammates:
- They have a live URL to visit
- They can see all pages and interactions
- Everything works perfectly (mobile responsive too!)

---

## 📞 Need More Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Next.js Docs**: https://nextjs.org/docs

---

## 🚀 You're All Set!

Your website is now on the internet!

**Share this URL with your teammates:**
```
https://YOUR-SITE.vercel.app
```

**Good luck! Your teacher is going to love it!** ✨
