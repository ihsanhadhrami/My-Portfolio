# 🚀 Quick Start Guide

## 5-Minute Setup

### 1. **View Your Portfolio Locally**

```powershell
# Option A: Using Python (if installed)
python -m http.server 8000

# Option B: Using Node.js
npx http-server

# Option C: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.

---

## Essential Customizations (Do These First!)

### 1. **Update Your Name** 
Open `index.html` and find these lines (around line 157):

**Change this:**
```html
Hi, I'm <span class="text-ocean-600">Your Name</span>
```

**To your name:**
```html
Hi, I'm <span class="text-ocean-600">John Doe</span>
```

### 2. **Update Your Title**
Find this line (around line 159):

**Change this:**
```html
Full-stack developer crafting elegant solutions to complex problems.
```

**To your summary:**
```html
Web developer specializing in React and Python automation.
```

### 3. **Update Contact Email**
Search for `your.email@example.com` and replace with your actual email:
- In the Contact section
- In the footer
- Update `main.js` fallback email

### 4. **Update Social Links**
Replace these URLs with your actual profiles:
- `https://github.com/yourprofile`
- `https://linkedin.com/in/yourprofile`
- `https://twitter.com/yourprofile`

### 5. **Update Navigation Initials**
Find this line (around line 105):
```html
YN <!-- Change to your initials -->
```

Change to your initials:
```html
JD <!-- John Doe -->
```

---

## Deploy to GitHub Pages (10 Minutes)

### **Step 1: Create Repository**
1. Go to [GitHub.com](https://github.com)
2. Click **"New"** (green button)
3. Name it: `yourusername.github.io` (replace `yourusername`)
4. Click **"Create repository"**

### **Step 2: Push Your Code**

Open PowerShell in your portfolio folder and run:

```powershell
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio"

# Add remote (replace yourusername)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push
git branch -M main
git push -u origin main
```

### **Step 3: Wait & Visit**
- Wait 1-2 minutes
- Visit `https://yourusername.github.io` 
- Your portfolio is live! 🎉

---

## Common Edits

### Add/Remove Experience

Find `<!-- Experience Item 1 -->` and copy the entire card. Replace:
- Job title
- Company name
- Dates
- Description
- Tech stack

### Edit Projects

Find `<!-- Project Card 1 -->` and update:
- Project name
- Description
- Technologies
- GitHub link: `https://github.com/yourusername/project-name`
- Demo link: Your live demo URL

### Update Skills

Find this section in About:
```html
<span class="bg-ocean-50 text-ocean-700 px-4 py-2 rounded-full text-sm font-medium">HTML5</span>
```

Add or remove skills by duplicating/deleting this line.

---

## Contact Form Setup

### **Option A: Using Formspree (Free, Easy)**

1. Visit [Formspree.io](https://formspree.io)
2. Sign up
3. Create new form with your email
4. Copy your form ID
5. In `main.js`, find this line (around line 241):

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual ID from Formspree.

### **Option B: Email Fallback (Always Works)**

Update your email in `main.js` (around line 251):

```javascript
window.location.href = `mailto:your.email@example.com?...`
```

---

## Customize Colors

### Change Ocean Blue to Different Color

Edit the Tailwind config in `index.html` (around line 15):

```html
colors: {
    'ocean': {
        50: '#f0f9ff',     /* Change this to light version */
        100: '#e0f2fe',
        500: '#0ea5e9',    /* Main color - change here */
        600: '#0284c7',    /* Darker version */
        700: '#0369a1',    /* Even darker */
        900: '#082f49',    /* Darkest */
    }
}
```

**Color ideas:**
- Purple: `500: '#a855f7'`
- Green: `500: '#10b981'`
- Pink: `500: '#ec4899'`
- Red: `500: '#ef4444'`

Use [Tints.dev](https://www.tints.dev/) to generate color shades.

---

## Add Your Profile Picture

1. Place your image in `assets/images/profile.jpg`
2. In `index.html`, find (around line 326):

```html
<i class="fas fa-user text-white text-9xl opacity-20"></i>
<!-- Replace with project image: <img src="assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover rounded-2xl"> -->
```

Replace with:
```html
<img src="assets/images/profile.jpg" alt="Your Name Profile" class="w-full h-full object-cover rounded-2xl">
```

---

## Update Meta Tags (SEO)

Edit the `<head>` section in `index.html` (around line 8):

```html
<meta name="description" content="Your professional summary here">
<meta name="keywords" content="developer, web, python, javascript">
<meta name="author" content="Your Name">

<meta property="og:title" content="Your Name - Developer">
<meta property="og:description" content="Your summary">
<meta property="og:url" content="https://yourusername.github.io">

<title>Your Name - Your Title</title>
```

---

## Test Your Site

- ✅ Open in Chrome, Firefox, Safari
- ✅ Test on mobile (use DevTools)
- ✅ Test all links work
- ✅ Test contact form
- ✅ Test mobile menu
- ✅ Test scroll animations

---

## After Deployment: Update GitHub

After making changes locally:

```powershell
# Stage changes
git add .

# Commit
git commit -m "Update portfolio with new projects"

# Push
git push origin main
```

Site updates in 1-2 minutes.

---

## Troubleshooting

**Portfolio won't load?**
- Check filename is `yourusername.github.io` (exact format)
- Wait 5-10 minutes
- Hard refresh: `Ctrl+Shift+Delete`

**Contact form not working?**
- Did you add your Formspree ID?
- Check browser console (F12)
- Try fallback email link

**Styles look broken?**
- Clear cache: `Ctrl+Shift+Delete`
- Check internet connection (CDN)
- Try different browser

**Can't push to GitHub?**
- Generate GitHub token: [github.com/settings/tokens](https://github.com/settings/tokens)
- Use token as password when prompted

---

## Next Enhancements (After Launching)

1. Add dark mode toggle
2. Add blog section
3. Add case studies
4. Add testimonials
5. Add newsletter signup
6. Add Google Analytics
7. Add animations on scroll
8. Add PDF resume download

---

## Need Help?

1. Check `README.md` for detailed guides
2. Review code comments (everything is explained)
3. Check browser console for errors (F12)
4. Refer to links in README.md

---

**You're all set! 🚀 Customize, deploy, and share your portfolio!**
