
// Typing animation for terminal prompt
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-text');
    const fullText = '$ whoami';
    let index = 0;

    function typeText() {
        if (index <= fullText.length) {
            typingElement.textContent = fullText.slice(0, index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .skill-card, .project-card').forEach(element => {
    observer.observe(element);
});
