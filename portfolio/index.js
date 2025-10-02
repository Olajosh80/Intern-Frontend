document.querySelector('.hire-me').addEventListener('click', () => {
    const popup = document.querySelector('.popup-overlay');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close-popup').addEventListener('click', () => {
    const popup = document.querySelector('.popup-overlay');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.querySelector('.popup-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-overlay')) {
        const popup = document.querySelector('.popup-overlay');
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});