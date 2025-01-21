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

// Counter and progress bar logic
let count = 0; // Initialize counter
const mobileCountElement = document.getElementById('mobile-count');
const progressBarElement = document.getElementById('progress-bar');

function startProgressBar() {
    let progress = 0; // Initial progress value

    const interval = setInterval(() => {
        progress += 1; // Increment progress by 1%
        progressBarElement.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval); // Stop interval when progress reaches 100%
            count++; // Increment mobile counter
            mobileCountElement.textContent = count; // Update the displayed count
            startProgressBar(); // Restart the progress bar
        }
    }, 120); // Update every 120ms (12 seconds ÷ 100 steps)
}

// Start the progress bar when the page loads
startProgressBar();
