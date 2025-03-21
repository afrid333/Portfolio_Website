document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skills on hover
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.2)';
        skill.style.transition = 'transform 0.3s ease';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('[name="name"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields!');
    } else {
        alert('Message Sent Successfully!');
        this.reset();
    }
});
