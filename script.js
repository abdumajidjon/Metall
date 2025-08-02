// INTEGNITY - Bootstrap 5 + GSAP Enhanced JavaScript

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Global variables
let isLoaded = false;
let isMobile = window.innerWidth <= 768;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    console.log('🚀 INTEGNITY - Initializing...');
    
    // Initialize components in order
    initializeLoading();
    initializeBootstrapComponents();
    initializeNavigation();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeAnimations();
    initializeInteractions();
    initializePerformanceOptimizations();
    
    console.log('✅ INTEGNITY - Initialization complete');
}

// Loading Screen with GSAP
function initializeLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progressBar');
    
    if (!loadingScreen || !progressBar) return;
    
    // Animate progress bar
    gsap.to(progressBar, {
        width: '100%',
        duration: 2,
        ease: 'power2.out',
        onComplete: function() {
            // Hide loading screen
            gsap.to(loadingScreen, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
                onComplete: function() {
                    loadingScreen.classList.add('hidden');
                    isLoaded = true;
                    startMainAnimations();
                }
            });
        }
    });
}

// Start main animations after loading
function startMainAnimations() {
    animateHeroEntrance();
    animateNavigationEntrance();
    animateBadgesEntrance();
    animateTitleEntrance();
}

// Hero entrance animation
function animateHeroEntrance() {
    const statue = document.getElementById('statue');
    const gradientOverlay = document.querySelector('.gradient-overlay');
    
    if (statue) {
        gsap.fromTo(statue, 
            { 
                scale: 1.1, 
                opacity: 0 
            },
            { 
                scale: 1, 
                opacity: 0.8, 
                duration: 2, 
                ease: 'power2.out' 
            }
        );
    }
    
    if (gradientOverlay) {
        gsap.fromTo(gradientOverlay,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power2.out' }
        );
    }
}

// Navigation entrance animation
function animateNavigationEntrance() {
    const navbar = document.getElementById('navbar');
    const brand = document.getElementById('brand');
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButton = document.getElementById('ctaButton');
    
    if (navbar) {
        gsap.fromTo(navbar,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
        );
    }
    
    if (brand) {
        gsap.fromTo(brand,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.7 }
        );
    }
    
    navLinks.forEach((link, index) => {
        gsap.fromTo(link,
            { y: -30, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                ease: 'power2.out', 
                delay: 0.8 + (index * 0.1) 
            }
        );
    });
    
    if (ctaButton) {
        gsap.fromTo(ctaButton,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.2 }
        );
    }
}

// Badges entrance animation
function animateBadgesEntrance() {
    const badges = document.querySelectorAll('.hero-badge');
    
    badges.forEach((badge, index) => {
        gsap.fromTo(badge,
            { 
                y: 50, 
                opacity: 0, 
                scale: 0.8 
            },
            { 
                y: 0, 
                opacity: 1, 
                scale: 1, 
                duration: 0.8, 
                ease: 'back.out(1.7)', 
                delay: 1.5 + (index * 0.2) 
            }
        );
    });
}

// Title entrance animation with letter-by-letter effect
function animateTitleEntrance() {
    const titleLetters = document.querySelectorAll('.title-letter');
    
    titleLetters.forEach((letter, index) => {
        gsap.to(letter, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: 2 + (index * 0.1)
        });
    });
    
    // Add floating animation to title
    gsap.to('.hero-title', {
        y: -10,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 3
    });
}

// Initialize Bootstrap Components
function initializeBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Enhanced Navigation with GSAP
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Navigation hover effects
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Animate click
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
            
            console.log('Navigation clicked:', this.textContent.trim());
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu with GSAP animations
function initializeMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navbarToggler || !navbarCollapse) return;
    
    navbarToggler.addEventListener('click', function() {
        setTimeout(() => {
            if (navbarCollapse.classList.contains('show')) {
                // Animate menu items in
                gsap.fromTo(navLinks,
                    { y: 20, opacity: 0 },
                    { 
                        y: 0, 
                        opacity: 1, 
                        duration: 0.3, 
                        stagger: 0.1, 
                        ease: 'power2.out' 
                    }
                );
            }
        }, 10);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbarCollapse.contains(event.target) || 
                               navbarToggler.contains(event.target);
        
        if (!isClickInsideNav && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        isMobile = window.innerWidth <= 768;
        
        if (window.innerWidth > 991) {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
}

// Scroll effects with GSAP ScrollTrigger
function initializeScrollEffects() {
    // Parallax effect for statue
    const statue = document.getElementById('statue');
    if (statue) {
        gsap.to(statue, {
            y: -100,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
    
    // Fade out scroll indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollIndicator) {
        gsap.to(scrollIndicator, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: '50% top',
                scrub: 1
            }
        });
    }
    
    // Title parallax effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        gsap.to(heroTitle, {
            y: 50,
            opacity: 0.5,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
}

// Interactive animations
function initializeAnimations() {
    // CTA Button animations
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                y: -2,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(this.querySelector('.cta-arrow'), {
                x: 3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(this.querySelector('.cta-arrow'), {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Click animation
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
            
            console.log('🚀 Start a project clicked');
            // Add your project start logic here
        });
    }
    
    // Hero badges animations
    const heroBadges = document.querySelectorAll('.hero-badge');
    heroBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        badge.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        badge.addEventListener('click', function() {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
            
            console.log('Badge clicked:', this.textContent.trim());
        });
    });
}

// Enhanced interactions
function initializeInteractions() {
    // Brand logo interaction
    const brand = document.getElementById('brand');
    if (brand) {
        brand.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        brand.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
        
        // Enter key on focusable elements
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('nav-link') || 
                focusedElement.classList.contains('btn-cta') ||
                focusedElement.classList.contains('navbar-brand') ||
                focusedElement.classList.contains('hero-badge')) {
                focusedElement.click();
            }
        }
        
        // Tab navigation enhancements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Touch gestures for mobile
    initializeTouchGestures();
}

// Touch gesture support
function initializeTouchGestures() {
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Swipe detection
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                console.log('👉 Swipe right detected');
                // Handle swipe right
            } else {
                console.log('👈 Swipe left detected');
                // Handle swipe left
            }
        }
    }, { passive: true });
}

// Performance optimizations
function initializePerformanceOptimizations() {
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            handleResize();
        }, 250);
    });
    
    // Intersection Observer for performance
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger specific animations based on element
                    if (entry.target.classList.contains('hero-badge')) {
                        gsap.fromTo(entry.target,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
                        );
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements
        const elementsToObserve = document.querySelectorAll('.hero-badge, .scroll-indicator');
        elementsToObserve.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Mouse movement parallax (subtle effect)
    if (!isMobile) {
        initializeMouseParallax();
    }
}

// Handle window resize
function handleResize() {
    const windowWidth = window.innerWidth;
    isMobile = windowWidth <= 768;
    
    console.log('📱 Window resized to:', windowWidth);
    
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
    
    // Adjust animations based on screen size
    if (isMobile) {
        // Disable some animations on mobile for performance
        gsap.set('.hero-title', { clearProps: 'y' });
    }
}

// Preload critical resources
function preloadCriticalResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap';
    fontLink.as = 'style';
    fontLink.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
    };
    document.head.appendChild(fontLink);
    
    // Preload statue image
    const img = new Image();
    img.src = 'statue.jpg';
    img.onload = function() {
        console.log('🖼️ Statue image preloaded');
    };
}

// Mouse movement parallax effect
function initializeMouseParallax() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    });
    
    // Apply subtle parallax to statue
    gsap.ticker.add(function() {
        const statue = document.getElementById('statue');
        if (statue) {
            gsap.to(statue, {
                x: mouseX * 20,
                y: mouseY * 10,
                duration: 1,
                ease: 'power2.out'
            });
        }
        
        // Apply parallax to title letters
        const titleLetters = document.querySelectorAll('.title-letter');
        titleLetters.forEach((letter, index) => {
            gsap.to(letter, {
                x: mouseX * (5 + index * 2),
                y: mouseY * (3 + index),
                duration: 1,
                ease: 'power2.out'
            });
        });
    });
}

// Utility functions
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

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid rgba(255, 255, 255, 0.8) !important;
        outline-offset: 2px !important;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.5);
    }
`;
document.head.appendChild(style);

// Error handling
window.addEventListener('error', function(e) {
    console.error('❌ JavaScript Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('⚡ Page Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms');
        }, 0);
    });
}

console.log('🎯 INTEGNITY - Script loaded successfully');
