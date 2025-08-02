// Bootstrap 5 Enhanced JavaScript for INTEGNITY Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Bootstrap components
    initializeBootstrapComponents();
    
    // Enhanced navigation functionality
    initializeNavigation();
    
    // Mobile menu enhancements
    initializeMobileMenu();
    
    // CTA button interactions
    initializeCTAButton();
    
    // Accessibility enhancements
    initializeAccessibility();
    
    // Performance optimizations
    initializePerformanceOptimizations();
    
    console.log('INTEGNITY Bootstrap 5 website initialized successfully');
});

// Initialize Bootstrap Components
function initializeBootstrapComponents() {
    // Initialize all tooltips if any
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize all popovers if any
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Enhanced Navigation Functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
            
            console.log('Navigation clicked:', this.textContent.trim());
        });
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-1px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// Mobile Menu Enhancements
function initializeMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Enhanced mobile menu toggle
        navbarToggler.addEventListener('click', function() {
            // Add custom animation class
            setTimeout(() => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.style.animation = 'slideDown 0.3s ease-out';
                } else {
                    navbarCollapse.style.animation = 'slideUp 0.3s ease-out';
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
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 991) {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    }
}

// CTA Button Interactions
function initializeCTAButton() {
    const ctaButton = document.querySelector('.btn-cta');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            console.log('Start a project clicked');
            
            // Add your project start logic here
            // Example: window.location.href = '/contact';
            // Example: showContactModal();
        });
        
        // Enhanced hover effects
        ctaButton.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        });
    }
}

// Accessibility Enhancements
function initializeAccessibility() {
    // Keyboard navigation support
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
                focusedElement.classList.contains('navbar-brand')) {
                focusedElement.click();
            }
        }
        
        // Tab navigation enhancements
        if (e.key === 'Tab') {
            // Add visible focus indicators
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ARIA enhancements
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.setAttribute('role', 'menuitem');
        link.setAttribute('tabindex', '0');
    });
    
    // Screen reader announcements
    const ctaButton = document.querySelector('.btn-cta');
    if (ctaButton) {
        ctaButton.setAttribute('aria-label', 'Start a new project with INTEGNITY');
    }
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            handleResize();
        }, 250);
    });
    
    // Intersection Observer for animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe hero badges
        const heroBadges = document.querySelectorAll('.hero-badge');
        heroBadges.forEach(badge => {
            observer.observe(badge);
        });
    }
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Touch gesture support for mobile
    initializeTouchGestures();
}

// Handle window resize
function handleResize() {
    const windowWidth = window.innerWidth;
    console.log('Window resized to:', windowWidth);
    
    // Adjust hero title size based on viewport
    const heroTitle = document.querySelector('.hero-title-bg::before');
    if (windowWidth < 576) {
        document.documentElement.style.setProperty('--hero-title-size', 'clamp(1.5rem, 5vw, 3rem)');
    } else if (windowWidth < 768) {
        document.documentElement.style.setProperty('--hero-title-size', 'clamp(2rem, 6vw, 4rem)');
    } else {
        document.documentElement.style.setProperty('--hero-title-size', 'clamp(3rem, 8vw, 8rem)');
    }
}

// Preload critical resources
function preloadCriticalResources() {
    // Preload Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap';
    fontLink.as = 'style';
    fontLink.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
    };
    document.head.appendChild(fontLink);
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
                console.log('Swipe right detected');
                // Handle swipe right
            } else {
                console.log('Swipe left detected');
                // Handle swipe left
            }
        }
    }, { passive: true });
}

// Hero badges interaction
document.addEventListener('DOMContentLoaded', function() {
    const heroBadges = document.querySelectorAll('.hero-badge');
    
    heroBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            console.log('Hero badge clicked:', this.textContent.trim());
        });
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideUp {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
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
`;
document.head.appendChild(style);

