// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial Slider
const testimonials = [
    {
        text: "James helped us find our dream home in Nashville. His knowledge of the area and attention to detail made the process so smooth!",
        author: "Sarah & Mike Johnson"
    },
    {
        text: "Selling our home with James was a great experience. He got us above asking price and handled everything professionally.",
        author: "David Thompson"
    },
    {
        text: "As first-time homebuyers, we couldn't have asked for a better agent. James explained everything clearly and fought for our interests.",
        author: "Emily Rodriguez"
    }
];

const testimonialSlider = document.querySelector('.testimonial-slider');
let currentTestimonial = 0;

function createTestimonialElement(testimonial) {
    const div = document.createElement('div');
    div.classList.add('testimonial-item');
    div.innerHTML = `
        <p class="testimonial-text">${testimonial.text}</p>
        <p class="testimonial-author">- ${testimonial.author}</p>
    `;
    return div;
}

function showTestimonial() {
    testimonialSlider.innerHTML = '';
    testimonialSlider.appendChild(createTestimonialElement(testimonials[currentTestimonial]));
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Initialize testimonial slider
showTestimonial();
setInterval(showTestimonial, 5000);

// Navbar Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});
