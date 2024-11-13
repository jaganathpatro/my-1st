// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = document.querySelector('.toggle-icon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggleIcon.textContent = body.classList.contains('dark') ? '☀' : '🌙';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Skills Progress Animation
const skillBars = document.querySelectorAll('.progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.dataset.width; // Set width using data attribute
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Animate skills when they come into view
const observeSkills = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observeSkills.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsContainer = document.querySelector('.skills');
if (skillsContainer) {
    observeSkills.observe(skillsContainer);
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('.form-submit');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(() => alert('Error sending message'))
    .finally(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });
});

// Glow Elements Animation Fix
const glowElements = document.querySelectorAll('.glow-element');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowElements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.01);
        const rect = element.getBoundingClientRect();
        const targetX = mouseX - rect.width / 2;
        const targetY = mouseY - rect.height / 2;

        const currentX = parseFloat(element.style.left) || rect.left;
        const currentY = parseFloat(element.style.top) || rect.top;

        const newX = currentX + (targetX - currentX) * speed;
        const newY = currentY + (targetY - currentY) * speed;

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    });
    requestAnimationFrame(animateGlow);
}
animateGlow();
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#00f0ff", "#ffa500", "#4f46e5"]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
