// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        
        // Animate burger
        const spans = burger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
        } else {
            spans[0].style.transform = 'rotate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0)';
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            const spans = burger.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0)';
        });
    });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero Animations
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .to('.title-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.3
    })
    .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.5')
    .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.4');

// About Section Animations
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.feature-item', {
    scrollTrigger: {
        trigger: '.about-features',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// Menu Cards Simple Animation
gsap.fromTo('.menu-card', 
    {
        opacity: 0,
        y: 30
    },
    {
        scrollTrigger: {
            trigger: '.menu-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        immediateRender: false
    }
);

// Video Section Parallax
gsap.to('.feature-video', {
    scrollTrigger: {
        trigger: '.video-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: -100,
    ease: 'none'
});

gsap.from('.video-text', {
    scrollTrigger: {
        trigger: '.video-section',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
});

// Locations Animation
gsap.from('.location-stat', {
    scrollTrigger: {
        trigger: '.locations',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Button hover animations
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// Parallax effect on hero (removed to prevent content going off-screen)

// Image reveal animation on scroll
gsap.utils.toArray('.about-image img').forEach(img => {
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 1.3,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
    });
});

// Footer fade in
gsap.from('.footer-section', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
});


// Button click animations
document.querySelector('.btn-primary')?.addEventListener('click', (e) => {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: {
            y: '#menu',
            offsetY: 80
        },
        ease: 'power3.inOut'
    });
});

document.querySelector('.btn-secondary')?.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: {
            y: '#locations',
            offsetY: 80
        },
        ease: 'power3.inOut'
    });
});

// Add ScrollTrigger for smooth scroll animations
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
        gsap.to('.hero-video', {
            scale: 1 + (self.progress * 0.2),
            duration: 0.1
        });
    }
});

// Section title animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

console.log('🧇 Wafflet website loaded successfully!');

