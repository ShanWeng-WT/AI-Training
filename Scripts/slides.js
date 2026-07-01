if (window.parent !== window) {
    window.parent.postMessage({
        source: 'pdd3-course-handout',
        type: 'course-title',
        title: document.title,
        href: window.location.href
    }, '*');
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const slides = [];

    // Find all sections that correspond to nav links and add the 'slide' class to them
    navLinks.forEach(link => {
        const id = link.getAttribute('href');
        if (id && id.startsWith('#')) {
            // Escape special characters in ID if necessary, but standard IDs from template should be fine
            const slideEl = document.querySelector(id);
            if (slideEl) {
                slideEl.classList.add('slide');
                slides.push(slideEl);
            }
        }
    });

    let currentIndex = 0;
    let currentSteps = [];
    let currentStepIndex = -1;

    function showSlide(index, showAllSteps = false) {
        if (slides.length === 0) return;
        
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;
        currentIndex = index;

        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Show current slide
        slides[currentIndex].classList.add('active');

        // Setup progressive steps for current slide
        currentSteps = Array.from(slides[currentIndex].querySelectorAll('.step'));
        
        if (showAllSteps) {
            currentStepIndex = currentSteps.length - 1;
            currentSteps.forEach(step => step.classList.add('active'));
        } else {
            currentStepIndex = -1;
            currentSteps.forEach(step => step.classList.remove('active'));
        }

        // Update active state on nav links
        navLinks.forEach((link, i) => {
            if (i === currentIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Initialize first slide
    if (slides.length > 0) {
        showSlide(0);
    }

    function nextAction() {
        if (currentSteps.length > 0 && currentStepIndex < currentSteps.length - 1) {
            currentStepIndex++;
            const activeStep = currentSteps[currentStepIndex];
            activeStep.classList.add('active');
            
            // Auto scroll step into view for progressive disclosure
            setTimeout(() => {
                activeStep.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 100);
        } else {
            if (currentIndex < slides.length - 1) {
                showSlide(currentIndex + 1, false);
            }
        }
    }

    function prevAction() {
        if (currentSteps.length > 0 && currentStepIndex >= 0) {
            currentSteps[currentStepIndex].classList.remove('active');
            currentStepIndex--;
        } else {
            if (currentIndex > 0) {
                showSlide(currentIndex - 1, true);
            }
        }
    }

    // Bind Previous and Next buttons
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevAction();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextAction();
        });
    }

    // Global click for next action (presentation style)
    document.addEventListener('click', (e) => {
        // Ignore clicks on sidebar, nav links, buttons
        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.sidebar')) {
            return;
        }

        // Ignore clicks if the user has selected text
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0) {
            return;
        }

        // Left click advances
        if (e.button === 0) {
            nextAction();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            nextAction();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            prevAction();
        }
    });

    // Hover detection for bottom controls
    document.addEventListener('mousemove', (e) => {
        const controls = document.querySelector('.slide-controls');
        if (controls) {
            if (window.innerHeight - e.clientY < 100) {
                controls.style.opacity = '1';
                controls.style.pointerEvents = 'auto';
            } else {
                controls.style.opacity = '0';
                controls.style.pointerEvents = 'none';
            }
        }
    });

    // Bind clicks on sidebar navigation links
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump
            showSlide(index);
        });
    });

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const hljsTheme = document.getElementById('hljs-theme');

    const setHighlightTheme = (isLight) => {
        if (hljsTheme) {
            hljsTheme.href = isLight 
                ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css'
                : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
        }
    };

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
        setHighlightTheme(true);
    } else {
        setHighlightTheme(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('light-mode');
            const isLight = document.documentElement.classList.contains('light-mode');
            
            if (isLight) {
                if (sunIcon) sunIcon.style.display = 'none';
                if (moonIcon) moonIcon.style.display = 'block';
                localStorage.setItem('theme', 'light');
            } else {
                if (sunIcon) sunIcon.style.display = 'block';
                if (moonIcon) moonIcon.style.display = 'none';
                localStorage.setItem('theme', 'dark');
            }
            setHighlightTheme(isLight);
        });
    }
});
