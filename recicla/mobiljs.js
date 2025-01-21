document.addEventListener('DOMContentLoaded', () => {
    // Barra de progreso
    const progressBar = document.getElementById('progress-bar');
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 500); // Empieza después de 500ms y tarda 5s en completarse
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth scrolling for any other links with the class "smooth-scroll"
document.querySelectorAll('a.smooth-scroll').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
