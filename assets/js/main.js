// ===== MOBILE MENU TOGGLE =====

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-element').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
    observer.observe(element);
});

// ===== SCROLL TO TOP BUTTON =====

const scrollToTopBtn = document.getElementById('scroll-to-top');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
    }
});

// Smooth scroll to top
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== NAVIGATION ACTIVE STATE ON SCROLL =====

const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-ocean-600', 'border-b-2', 'border-ocean-600');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-ocean-600');
        }
    });
});

// ===== CONTACT FORM HANDLING =====

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Option 1: Use FormSubmit service (free, no backend required)
    // This sends the form to your email automatically
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    
    try {
        // Using FormSubmit.co endpoint (free alternative to Formspree)
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData
        });
        
        if (response.ok) {
            // Success message
            alert('Message sent successfully! I\'ll get back to you soon.');
            contactForm.reset();
        } else {
            alert('There was an error sending your message. Please try again or email me directly.');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        // Fallback: Open mailto link
        window.location.href = `mailto:your.email@example.com?subject=Portfolio Contact&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('shadow-none');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('shadow-none');
    }
});

// ===== PARALLAX EFFECT (Optional - for future enhancement) =====

// Uncomment if you want a subtle parallax effect on hero section
/*
window.addEventListener('scroll', () => {
    const hero = document.getElementById('home');
    const scrolled = window.scrollY;
    if (hero) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});
*/

// ===== PROJECT LINKS HANDLER =====

// Update project links with your actual GitHub and live demo URLs
const projects = [
    {
        title: 'E-Commerce Platform',
        github: 'https://github.com/yourusername/ecommerce-platform',
        demo: 'https://ecommerce-demo.example.com'
    },
    {
        title: 'Task Management App',
        github: 'https://github.com/yourusername/task-manager',
        demo: 'https://taskmanager-demo.example.com'
    },
    {
        title: 'AI Chatbot Assistant',
        github: 'https://github.com/yourusername/ai-chatbot',
        demo: 'https://chatbot-demo.example.com'
    },
    {
        title: 'Data Analytics Dashboard',
        github: 'https://github.com/yourusername/analytics-dashboard',
        demo: 'https://dashboard-demo.example.com'
    }
];

// Initialize project links (update the href attributes in your HTML with actual URLs)
document.querySelectorAll('.fa-github').forEach((link, index) => {
    const parent = link.closest('a');
    if (parent && projects[index]) {
        parent.href = projects[index].github;
    }
});

document.querySelectorAll('.fa-external-link-alt').forEach((link, index) => {
    const parent = link.closest('a');
    if (parent && projects[index]) {
        parent.href = projects[index].demo;
    }
});

// ===== PAGE LOAD ANIMATION =====

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
});

// ===== KEYBOARD SHORTCUTS (Optional) =====

document.addEventListener('keydown', (e) => {
    // Press '/' to focus search or show keyboard shortcuts info
    if (e.key === '/') {
        e.preventDefault();
        // You can add custom functionality here
    }
    
    // Press 'Home' to scroll to top
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===== ACCESSIBILITY: SKIP TO MAIN CONTENT =====

// Create skip to main link if it doesn't exist
if (!document.querySelector('.skip-to-main')) {
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'skip-to-main';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #0284c7;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===== CONSOLE MESSAGE =====

console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #0284c7; font-weight: bold;');
console.log('%cFeel free to explore the code and reach out if you have any questions!', 'font-size: 14px; color: #0369a1;');

// ===== OPTIONAL: Service Worker for Offline Support =====

// Uncomment if you want to add PWA functionality
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('ServiceWorker registration failed: ', err);
    });
}
*/
