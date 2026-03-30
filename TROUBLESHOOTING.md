# 🔧 Troubleshooting Guide

## ✅ Fixed Issues

### 1. Conflicting Lockfiles
**Problem**: Warning about multiple package-lock.json files
**Solution**: ✅ FIXED - Removed conflicting parent lockfile

### 2. Cross-Origin Dev Resource Warning
**Problem**: `⚠ Blocked cross-origin request to Next.js dev resource`
**Solution**: ✅ FIXED - Added allowedDevOrigins to next.config.js
- Now allows localhost, 127.0.0.1, and 192.168.1.197

### 3. Viewport Warning
**Problem**: `⚠ Unsupported metadata viewport in metadata export`
**Solution**: ✅ FIXED - Moved viewport to separate export in layout.js

## 🚀 How to Run Now

```bash
cd /home/cyb3r/Hacking/copilotdocs/globoris-website
npm run dev
```

Then open: **http://localhost:3000**

## ✅ Everything Should Work

- ✓ No more warnings
- ✓ Hot reload working
- ✓ All pages loading
- ✓ Animations working
- ✓ Components rendering
- ✓ Responsive on all devices

## 🌐 Accessing from Network

If accessing from another device on your network, use:
```
http://192.168.1.197:3000
```

This is automatically allowed now!

## 📝 Common Issues & Solutions

### Pages Not Loading?
- Check if dev server is running
- Verify no other app is using port 3000
- Try: `killall node` then restart

### Styles Not Showing?
- This is normal during first load (Turbopack compiling)
- Wait 5-10 seconds for full compilation
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Hot Reload Not Working?
- Restart dev server: Ctrl+C then `npm run dev`
- Check that port 3000 is not blocked

### Port Already in Use?
```bash
# Find process on port 3000
lsof -i :3000

# Kill it with the PID shown
kill -9 <PID>
```

## 🏗️ Production Build

```bash
npm run build
npm start
```

## 📦 Dependencies Issue?

If you get dependency errors, reinstall:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

## 🆘 Still Having Issues?

1. Check the logs: Look for error messages in terminal
2. Try hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. Clear .next folder: `rm -rf .next`
4. Restart dev server: Ctrl+C then `npm run dev`
5. Reinstall dependencies (see above)

## ✨ All Fixed!

Your website should now be:
- ✅ Running without warnings
- ✅ Loading all content properly
- ✅ Responsive on all devices
- ✅ Ready for development

Happy coding! 🎨
