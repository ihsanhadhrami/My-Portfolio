# 🌊 Minimalist Portfolio Website

A clean, responsive, and modern personal portfolio website inspired by [brittanychiang.com](https://brittanychiang.com). Built with HTML5, Tailwind CSS, and vanilla JavaScript.

## 🎨 Features

✨ **Modern Design**
- Ocean blue accent color with clean white/gray background
- Minimalist layout with generous whitespace
- Smooth animations and transitions
- Professional typography (Inter & Poppins fonts)

📱 **Fully Responsive**
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Adaptive layouts for all screen sizes
- Optimized for tablets and desktop

🎭 **Smooth Animations**
- Fade-in on scroll using IntersectionObserver
- Smooth section transitions
- Hover effects on cards and buttons
- Scroll-to-top floating button

♿ **Accessibility**
- Semantic HTML5 structure
- ARIA labels and keyboard navigation
- Focus states for all interactive elements
- High contrast for readability
- Skip-to-main-content link

🔍 **SEO Optimized**
- Meta tags and descriptions
- Open Graph tags for social sharing
- Semantic HTML markup
- Mobile-friendly design

📦 **GitHub Pages Ready**
- No backend required
- Single-page static site
- Easy deployment
- Custom domain support

## 🚀 Quick Start

### 1. Local Development

Simply open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or use a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.

### 2. Customization Guide

#### 🖤 Basic Information

Edit these sections in `index.html`:

**Your Name & Title:**
```html
<h1 class="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
    Hi, I'm <span class="text-ocean-600">Your Name</span>
</h1>
<p class="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
    Full-stack developer crafting elegant solutions to complex problems.
</p>
```

**Navigation Initials:**
```html
<a href="#home" class="text-2xl font-bold text-ocean-600 hover:text-ocean-700 transition-colors">
    YN <!-- Change to your initials -->
</a>
```

#### 📧 Contact Information

Update in the Contact section and Footer:

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">
    linkedin.com/in/yourprofile
</a>

<!-- GitHub -->
<a href="https://github.com/yourprofile" target="_blank">
    github.com/yourprofile
</a>
```

#### 💼 Experience Section

Edit the experience items:
```html
<div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow fade-in-element border-l-4 border-ocean-600">
    <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-bold text-slate-900">Your Job Title</h3>
        <span class="text-sm text-ocean-600 font-medium">2022 - Present</span>
    </div>
    <p class="text-ocean-600 font-semibold mb-3">Company Name</p>
    <p class="text-slate-600 leading-relaxed">
        Your job description here...
    </p>
</div>
```

#### 🏆 Certifications

Update certification cards:
```html
<div class="bg-gradient-to-br from-ocean-50 to-ocean-100 p-8 rounded-xl text-center hover:shadow-lg transition-all transform hover:scale-105 fade-in-element">
    <div class="text-5xl mb-4 text-ocean-600">
        <i class="fas fa-certificate"></i>
    </div>
    <h3 class="text-lg font-bold text-slate-900 mb-2">Your Certification Name</h3>
    <p class="text-slate-600 text-sm mb-3">Issuing Organization</p>
    <p class="text-xs text-slate-500">Issued Date</p>
</div>
```

#### 🚀 Projects Section

Edit project cards:
```html
<div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all transform hover:scale-105 fade-in-element group">
    <div class="aspect-video bg-gradient-to-br from-ocean-300 to-ocean-600 flex items-center justify-center overflow-hidden relative">
        <!-- Replace with project image -->
        <i class="fas fa-code text-white text-6xl opacity-30"></i>
    </div>
    <div class="p-8">
        <h3 class="text-2xl font-bold text-slate-900 mb-2">Project Name</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">
            Project description...
        </p>
        <div class="flex flex-wrap gap-2 mb-6">
            <span class="text-xs bg-ocean-50 text-ocean-700 px-3 py-1 rounded-full font-medium">Tech</span>
        </div>
        <div class="flex gap-4">
            <a href="https://github.com/yourprofile/project" class="text-ocean-600 hover:text-ocean-700 font-semibold flex items-center gap-2 transition-colors">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://project-demo.com" class="text-ocean-600 hover:text-ocean-700 font-semibold flex items-center gap-2 transition-colors">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

#### 🎨 Skills

Edit the skills tags in the About section:
```html
<div class="flex flex-wrap gap-3">
    <span class="bg-ocean-50 text-ocean-700 px-4 py-2 rounded-full text-sm font-medium">HTML5</span>
    <span class="bg-ocean-50 text-ocean-700 px-4 py-2 rounded-full text-sm font-medium">CSS3</span>
    <!-- Add your skills here -->
</div>
```

#### 📝 Contact Form Setup

The contact form uses Formspree for free email delivery. Set it up:

1. Go to [Formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Replace `YOUR_FORM_ID` in `main.js`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
    },
    body: formData
});
```

Alternatively, update the fallback mailto link with your email:
```javascript
window.location.href = `mailto:your.email@example.com?subject=Portfolio Contact&body=...`;
```

#### 🖼️ Add Profile Picture

1. Place your profile image in `assets/images/profile.jpg`
2. Replace the icon placeholder:

```html
<!-- Before -->
<div class="aspect-square bg-gradient-to-br from-ocean-200 to-ocean-400 rounded-2xl flex items-center justify-center">
    <i class="fas fa-user text-white text-9xl opacity-20"></i>
</div>

<!-- After -->
<img src="assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover rounded-2xl">
```

#### 🎨 Color Customization

Change the ocean blue color in `index.html`:

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'ocean': {
                        50: '#f0f9ff',    // Light
                        100: '#e0f2fe',   // Lighter
                        500: '#0ea5e9',   // Primary
                        600: '#0284c7',   // Darker
                        700: '#0369a1',   // Even darker
                        900: '#082f49',   // Darkest
                    }
                }
            }
        }
    }
</script>
```

Change `#0ea5e9` (blue) to your preferred color. Use [Tailwind Color Generator](https://www.tints.dev/) for color palettes.

#### 🔤 Font Customization

Currently using Inter and Poppins. To change:

1. Replace the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=NewFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update Tailwind config:
```html
fontFamily: {
    'sans': ['NewFont', 'sans-serif'],
}
```

#### 📱 Meta Tags & SEO

Update these meta tags in `<head>`:

```html
<meta name="description" content="Your professional summary">
<meta name="keywords" content="Your keywords here">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your summary">
<meta property="og:image" content="assets/images/og-image.png">
<meta property="og:url" content="https://yourusername.github.io">
<title>Your Name - Your Title</title>
```

## 📦 GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Create a new repository named `yourusername.github.io`
3. Make sure to replace `yourusername` with your actual GitHub username

### Step 2: Initialize Git & Push Code

```bash
# Navigate to your portfolio folder
cd portfolio

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Add remote origin (replace yourusername)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select "Deploy from a branch"
4. Select `main` branch and `/root` folder
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Verify Deployment

Visit `https://yourusername.github.io` in your browser. Your portfolio is now live!

### Optional: Custom Domain

If you have a custom domain:

1. In **Settings** → **Pages**, add your custom domain
2. In your domain registrar, add these DNS records:
   - Type: `A` → Points to `185.199.108.153`
   - Type: `A` → Points to `185.199.109.153`
   - Type: `A` → Points to `185.199.110.153`
   - Type: `A` → Points to `185.199.111.153`
3. Wait for DNS propagation (can take up to 24 hours)

## 🔧 Advanced Customization

### Add Dark Mode Toggle

Edit `main.js`:

```javascript
// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
```

### Add Smooth Scroll & Parallax

Uncomment the parallax effect in `main.js`:

```javascript
window.addEventListener('scroll', () => {
    const hero = document.getElementById('home');
    const scrolled = window.scrollY;
    if (hero) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});
```

### Add Blog Section

Create `blog.html` with similar structure to `index.html` and add blog posts.

### Add Service Worker (PWA)

Create `sw.js`:

```javascript
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('portfolio-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/css/style.css',
                '/assets/js/main.js'
            ]);
        })
    );
});
```

## 📊 File Structure

```
portfolio/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Custom CSS styles
│   ├── js/
│   │   └── main.js           # JavaScript interactivity
│   └── images/
│       ├── profile.jpg       # Your profile picture
│       └── og-image.png      # Open Graph image
└── README.md                 # This file
```

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Fully responsive

## ♿ Accessibility Features

- ✅ Semantic HTML5 markup
- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support
- ✅ Focus states for all interactive elements
- ✅ Color contrast compliance (WCAG AA)
- ✅ Skip-to-main-content link
- ✅ Respects `prefers-reduced-motion`

## ⚡ Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Use WebP Format**: Convert images to WebP for better compression
3. **Lazy Load Images**: Add `loading="lazy"` attribute
4. **Minify CSS/JS**: Use online minifiers before production
5. **Enable Caching**: Use service workers for offline support

## 🐛 Troubleshooting

**Contact form not working?**
- Make sure you've set up Formspree form ID
- Check browser console for errors
- Verify email field has valid email

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths in HTML
- Ensure CSS file is in correct location

**Mobile menu not working?**
- Check if JavaScript file is loaded
- Verify no console errors
- Test in different browser

**GitHub Pages not updating?**
- Wait a few minutes after push
- Force refresh browser (Ctrl+F5)
- Check repository settings

## 📝 SEO Checklist

- [ ] Update meta title and description
- [ ] Add Open Graph tags
- [ ] Add profile picture
- [ ] Update all contact information
- [ ] Add sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Add robots.txt file
- [ ] Enable HTTPS (automatic with GitHub Pages)

## 🚀 Next Steps

1. ✅ Customize content and information
2. ✅ Add your profile picture
3. ✅ Update project links and descriptions
4. ✅ Set up contact form
5. ✅ Deploy to GitHub Pages
6. ✅ Share your portfolio!

## 💡 Optional Enhancements

- [ ] Add dark mode toggle
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add newsletter signup
- [ ] Add analytics (Google Analytics)
- [ ] Add social media feeds
- [ ] Add case studies
- [ ] Add download resume button

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [GitHub Pages Docs](https://pages.github.com)
- [Formspree Docs](https://formspree.io)
- [Font Awesome Icons](https://fontawesome.com)
- [Google Fonts](https://fonts.google.com)

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 👋 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review the code comments
3. Check browser console for errors
4. Refer to linked documentation

---

Built with ❤️ for aspiring developers. Make it yours and showcase your amazing work! 🌟
