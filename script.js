document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = 1;
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        el.style.opacity = 0;
        observer.observe(el);
    });

    // Parallax effect for glow orbs
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const orb1 = document.getElementById('orb1');
        const orb2 = document.getElementById('orb2');

        orb1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        orb2.style.transform = `translate(${-x * 50}px, ${-y * 50}px)`;
    });

    // Hover effect for hero image
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        heroImg.addEventListener('mousemove', (e) => {
            const rect = heroImg.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            heroImg.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.05)`;
        });

        heroImg.addEventListener('mouseleave', () => {
            heroImg.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
        });
    }
});
