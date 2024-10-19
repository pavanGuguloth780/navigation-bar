window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

const menuIcon = document.getElementById('menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
