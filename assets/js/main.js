// ===== MOBILE MENU TOGGLE =====

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');

// Open mobile menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
});

// Close mobile menu
menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll('.mobile-link');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
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

// Note: Contact form removed - using direct contact methods instead
// If you want to add a form, create the HTML form element with id="contact-form"

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
        title: 'Job Listing Web Scraper',
        github: 'https://github.com/ihsanhadhrami/web_scraping_python',
        demo: 'https://github.com/ihsanhadhrami/web_scraping_python'
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
console.log('%cBuilding IT Support foundations & Python automation skills.', 'font-size: 14px; color: #0369a1;');

// ===== OPTIONAL: Service Worker for Offline Support =====

// Uncomment if you want to add PWA functionality
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('ServiceWorker registration failed: ', err);
    });
}
*/

// ===== APPLE-STYLE SCROLL ANIMATIONS =====

function initAppleScrollAnimations() {
    const appleSections = document.querySelectorAll('.apple-section');
    
    if (!appleSections.length) return;
    
    // Intersection Observer for triggering animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                entry.target.classList.remove('exiting');
            } else {
                // Check if scrolling up or down
                const rect = entry.boundingClientRect;
                if (rect.top > 0) {
                    // Section is below viewport - reset for re-entry
                    entry.target.classList.remove('in-view');
                } else {
                    // Section is above viewport - add exiting class
                    entry.target.classList.add('exiting');
                }
            }
        });
    }, {
        threshold: [0.15, 0.5],
        rootMargin: '-10% 0px -10% 0px'
    });
    
    // Scroll-based scale effect
    let ticking = false;
    
    function updateScrollScale() {
        appleSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distance = Math.abs(sectionCenter - viewportCenter);
            const maxDistance = windowHeight;
            
            // Calculate scale based on distance from center (1 at center, 0.85 at edges)
            const scale = Math.max(0.85, 1 - (distance / maxDistance) * 0.15);
            
            // Only apply scale when section is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                const content = section.querySelector('.apple-content');
                if (content && section.classList.contains('in-view')) {
                    content.style.setProperty('--dynamic-scale', scale);
                }
            }
        });
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollScale);
            ticking = true;
        }
    }, { passive: true });
    
    // Observe all apple sections
    appleSections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Initial check
    updateScrollScale();
}

// Initialize Apple scroll animations
initAppleScrollAnimations();

// ===== SCROLL PROGRESS INDICATOR =====

const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }
});

// ===== ANIMATED PARTICLES BACKGROUND =====

const particlesBg = document.getElementById('particles-bg');

function createParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(135deg, #ff6b4a, #0ea5e9);
        border-radius: 50%;
        left: ${startX}px;
        bottom: -10px;
        opacity: 0.6;
        animation: floatUp ${duration}s linear ${delay}s infinite;
        pointer-events: none;
    `;
    
    particlesBg.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.6;
        }
        50% {
            transform: translateY(-50vh) translateX(${Math.random() * 100 - 50}px) rotate(180deg);
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== HORIZONTAL SCROLL DRAG FUNCTIONALITY =====

function enableDragScroll(containerSelector) {
    const containers = document.querySelectorAll(containerSelector);
    
    containers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
        
        // Touch support for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;
        
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - container.offsetLeft;
            touchScrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - touchStartX) * 2;
            container.scrollLeft = touchScrollLeft - walk;
        });
    });
}

// Enable drag scrolling for all horizontal scroll sections
enableDragScroll('.cert-scroll-track');
enableDragScroll('.project-scroll-track');
enableDragScroll('.tools-scroll-track');

