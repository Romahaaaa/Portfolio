// Portfolio JavaScript
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.initTheme();
        this.initBurgerMenu();
        this.initAnimations();
        this.initScrollEffects();
        this.initFormValidation();
        this.initSmoothScrolling();
    }

    initTheme() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.mobileThemeToggle = document.querySelector('.mobile-theme-toggle');
        this.currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
        
        this.applyTheme(this.currentTheme);
        
        this.themeToggle?.addEventListener('click', () => {
            this.toggleTheme();
        });

        this.mobileThemeToggle?.addEventListener('click', () => {
            this.toggleTheme();
            this.closeMobileMenu();
        });
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        const themeIcon = theme === 'dark' ? '☀️' : '🌙';
        const themeText = theme === 'dark' ? 'Switch to Light' : 'Switch to Dark';
        
        if (this.themeToggle) {
            this.themeToggle.textContent = themeIcon;
            this.themeToggle.setAttribute('aria-label', themeText);
        }
        
        if (this.mobileThemeToggle) {
            this.mobileThemeToggle.textContent = `${themeIcon} ${themeText}`;
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.currentTheme = newTheme;
        this.applyTheme(newTheme);
        
        // Add animation class
        document.documentElement.classList.add('theme-changing');
        setTimeout(() => {
            document.documentElement.classList.remove('theme-changing');
        }, 300);
    }

    initBurgerMenu() {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const closeMenu = document.querySelector('.close-menu');
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

        if (burgerMenu && mobileNav) {
            // Open menu
            burgerMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMobileMenu();
            });

            // Close menu
            closeMenu?.addEventListener('click', () => {
                this.closeMobileMenu();
            });

            // Close menu when clicking on links
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (mobileNav.classList.contains('active') && 
                    !mobileNav.contains(e.target) && 
                    !burgerMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });

            // Close menu on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const body = document.body;

        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('no-scroll');

        // Update aria-label for accessibility
        const isOpen = burgerMenu.classList.contains('active');
        burgerMenu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        burgerMenu.setAttribute('aria-expanded', isOpen);
    }

    closeMobileMenu() {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const body = document.body;

        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        body.classList.remove('no-scroll');

        // Update aria-label for accessibility
        burgerMenu.setAttribute('aria-label', 'Open menu');
        burgerMenu.setAttribute('aria-expanded', 'false');
    }

    initAnimations() {
        // Create Intersection Observer for fade-in animations
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                        this.observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements for animation
            document.querySelectorAll('.project-card, .skill-category, .fade-in').forEach(el => {
                this.observer.observe(el);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            document.querySelectorAll('.project-card, .skill-category, .fade-in').forEach(el => {
                el.classList.add('fade-in-visible');
            });
        }
    }

    initScrollEffects() {
        const header = document.querySelector('.header');
        if (header) {
            let lastScrollY = window.scrollY;
            let ticking = false;

            const updateHeader = () => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
                
                lastScrollY = currentScrollY;
                ticking = false;
            };

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateHeader);
                    ticking = true;
                }
            });
        }
    }

    initSmoothScrolling() {
        // Smooth scrolling for anchor links
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
    }

    initFormValidation() {
        const contactForm = document.querySelector('form[action="/contact"]');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
                let isValid = true;

                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        this.showInputError(input, 'This field is required');
                    } else {
                        this.clearInputError(input);
                    }

                    if (input.type === 'email' && input.value.trim()) {
                        if (!this.isValidEmail(input.value)) {
                            isValid = false;
                            this.showInputError(input, 'Please enter a valid email address');
                        }
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                }
            });

            // Real-time validation
            contactForm.querySelectorAll('input, textarea').forEach(input => {
                input.addEventListener('blur', () => {
                    if (input.hasAttribute('required') && !input.value.trim()) {
                        this.showInputError(input, 'This field is required');
                    } else if (input.type === 'email' && input.value.trim() && !this.isValidEmail(input.value)) {
                        this.showInputError(input, 'Please enter a valid email address');
                    } else {
                        this.clearInputError(input);
                    }
                });
            });
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showInputError(input, message) {
        this.clearInputError(input);
        input.style.borderColor = 'var(--error)';
        
        const errorElement = document.createElement('div');
        errorElement.className = 'input-error';
        errorElement.style.color = 'var(--error)';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.5rem';
        errorElement.textContent = message;
        
        input.parentNode.appendChild(errorElement);
    }

    clearInputError(input) {
        input.style.borderColor = '';
        const existingError = input.parentNode.querySelector('.input-error');
        if (existingError) {
            existingError.remove();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
    
    // Add loading class removal
    document.body.classList.add('loaded');
    
    // Console art
    console.log(`
    ╔═══════════════════════════════╗
    ║       PORTFOLIO LOADED        ║
    ║    Developer: Kostiyk Roman   ║
    ║    GitHub: @Romahaaaa         ║
    ╚═══════════════════════════════╝
    `);
});

// Handle page show event for better back/forward navigation
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.add('loaded');
    }
});