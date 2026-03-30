# 🚀 Quick Start Guide

## Ready to Go in 3 Steps!

### Step 1: Install Dependencies
```bash
cd /home/cyb3r/Hacking/copilotdocs/globoris-website
npm install --legacy-peer-deps
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

## That's It! 🎉

Your website is now running locally. You can:

- **Edit Pages**: Modify files in `app/` folder
- **Edit Components**: Modify files in `components/` folder
- **Change Colors**: Edit `tailwind.config.js`
- **Hot Reload**: Changes appear instantly

## Available Pages

- Home: `/`
- About: `/about`
- Solutions: `/solutions`
- Products: `/products`
- Industries: `/industries`
- Technology: `/technology`
- Security: `/security`
- Careers: `/careers`
- Contact: `/contact`

## Build for Production

```bash
npm run build
npm start
```

## Deploy (Choose One)

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
- Connect GitHub repo in Netlify dashboard

### Option 3: Docker
```bash
docker build -t globoris .
docker run -p 3000:3000 globoris
```

## Make It Yours

1. **Update Content**: Edit text in page files
2. **Change Colors**: Modify `tailwind.config.js`
3. **Add Logo**: Place image in `public/` folder
4. **Update Contact**: Edit contact information in Contact page

## Need Help?

- See `README.md` for detailed docs
- See `DEPLOYMENT.md` for deployment options
- Check `package.json` for available scripts

Happy coding! 🎨
