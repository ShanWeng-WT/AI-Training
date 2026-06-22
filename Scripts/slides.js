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

    function showSlide(index) {
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

    // Bind Previous and Next buttons
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
    }

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
