// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Parallax effect for hero elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const statue = document.querySelector('.statue-figure');
    const lightEffects = document.querySelector('.light-effects');
    
    if (statue) {
        statue.style.transform = `translateY(calc(-50% + ${rate * 0.3}px)) scale(${1 + scrolled * 0.0001})`;
    }
    
    if (lightEffects) {
        lightEffects.style.transform = `translateY(${rate * 0.2}px)`;
    }
});

// Interactive mouse movement effect
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateStatue() {
    const statue = document.querySelector('.statue-figure');
    if (statue) {
        const rect = statue.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        targetX = (mouseX - centerX) * 0.02;
        targetY = (mouseY - centerY) * 0.02;
        
        // Smooth animation
        const currentTransform = statue.style.transform || '';
        const baseTransform = currentTransform.includes('translateY') ? 
            currentTransform : 'translateY(-50%)';
        
        statue.style.transform = `${baseTransform} translate(${targetX}px, ${targetY}px)`;
    }
    
    requestAnimationFrame(animateStatue);
}

// Start statue animation
animateStatue();

// Badge hover effects
document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'translateY(-3px) scale(1.02)';
        badge.style.background = 'rgba(255, 255, 255, 0.18)';
    });
    
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'translateY(0) scale(1)';
        badge.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.badge, .hero-title, .content-section');
    animateElements.forEach(el => observer.observe(el));
});

// Enhanced lighting effects based on mouse position
document.addEventListener('mousemove', (e) => {
    const lightEffects = document.querySelector('.light-effects');
    if (lightEffects) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        lightEffects.style.background = `
            radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at ${100-x}% ${100-y}%, rgba(255,255,255,0.08) 0%, transparent 40%)
        `;
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Enter key on badges
    if (e.key === 'Enter' && e.target.classList.contains('badge')) {
        e.target.click();
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Swipe detection
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            console.log('Swipe right detected');
        } else {
            console.log('Swipe left detected');
        }
    }
}, { passive: true });

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    const scrollPosition = window.scrollY;
    
    // Update navbar
    if (scrollPosition > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effects
    const scrolled = scrollPosition;
    const rate = scrolled * -0.5;
    
    const statue = document.querySelector('.statue-figure');
    if (statue && window.innerWidth > 768) {
        statue.style.transform = `translateY(calc(-50% + ${rate * 0.3}px))`;
    }
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

// Resize handler for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Reset transforms on resize
    const statue = document.querySelector('.statue-figure');
    if (statue) {
        if (window.innerWidth <= 768) {
            statue.style.transform = '';
        } else {
            statue.style.transform = 'translateY(-50%)';
        }
    }
}, 250));

// Loading screen effect
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    setTimeout(() => {
        document.querySelectorAll('.badge').forEach((badge, index) => {
            setTimeout(() => {
                badge.style.opacity = '1';
                badge.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// CTA button interaction
const ctaButton = document.querySelector('.nav-cta');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ctaButton.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Scroll to contact or show modal
        console.log('Start a project clicked');
    });
}

// Add ripple effect CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('INTEGNITY website loaded successfully!');
    
    // Set initial states
    document.querySelectorAll('.badge').forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = 'all 0.6s ease';
    });
    
    // Add ready class after short delay
    setTimeout(() => {
        document.body.classList.add('ready');
    }, 100);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Accessibility improvements
document.addEventListener('focus', (e) => {
    if (e.target.matches('.nav-link, .nav-cta, .badge')) {
        e.target.style.outline = '2px solid rgba(255, 255, 255, 0.8)';
        e.target.style.outlineOffset = '2px';
    }
}, true);

document.addEventListener('blur', (e) => {
    if (e.target.matches('.nav-link, .nav-cta, .badge')) {
        e.target.style.outline = '';
        e.target.style.outlineOffset = '';
    }
}, true);

