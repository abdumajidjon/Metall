// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on navigation items
        const navItems = document.querySelectorAll('.nav-list > div');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navList.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navList.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            mobileMenuToggle?.classList.remove('active');
            navList?.classList.remove('active');
        }
    });
    
    // Smooth scrolling for navigation links (if needed for future sections)
    const navLinks = document.querySelectorAll('.nav-list > div');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add smooth scrolling logic here if you have multiple sections
            console.log('Navigation clicked:', this.textContent.trim());
        });
    });
    
    // CTA Button interaction
    const ctaButton = document.querySelector('.base');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Start a project clicked');
            // Add your project start logic here
        });
    }
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            mobileMenuToggle?.classList.remove('active');
            navList?.classList.remove('active');
        }
        
        // Enter key on focusable elements
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('base') || 
                focusedElement.closest('.nav-list > div')) {
                focusedElement.click();
            }
        }
    });
    
    // Add loading state handling for SVG
    const integnityLogo = document.querySelector('.integnity2');
    if (integnityLogo) {
        integnityLogo.addEventListener('load', function() {
            this.classList.remove('loading');
        });
        
        integnityLogo.addEventListener('error', function() {
            console.warn('INTEGNITY logo failed to load');
            // Fallback to text if SVG fails to load
            this.style.display = 'none';
            const fallbackText = document.createElement('div');
            fallbackText.textContent = 'INTEGNITY';
            fallbackText.style.cssText = `
                color: white;
                font-size: clamp(4rem, 12vw, 12rem);
                font-weight: 900;
                letter-spacing: 8px;
                text-align: center;
                text-transform: uppercase;
            `;
            this.parentNode.appendChild(fallbackText);
        });
    }
    
    // Performance optimization: Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle any resize-specific logic here
            console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        }, 250);
    });
    
    // Add touch gesture support for mobile
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
        
        // Swipe detection (for future use)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                console.log('Swipe right detected');
            } else {
                console.log('Swipe left detected');
            }
        }
    }, { passive: true });
    
    // Initialize page
    console.log('INTEGNITY website initialized successfully');
    
    // Add ready class to body after initialization
    setTimeout(() => {
        document.body.classList.add('ready');
    }, 100);
});

