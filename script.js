// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const scrolledName = document.getElementById('scrolled-name');

    if (window.scrollY > 200) {
        header.classList.add('active');
        scrolledName.style.opacity = '1';
    } else {
        header.classList.remove('active');
        scrolledName.style.opacity = '0';
    }
});

// Floating Contact Button Click
document.getElementById('float-contact').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});