document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const toggleButton = document.querySelector('.toggle-dark-mode');
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });

    // Check if user has a preferred theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Automatically enable dark mode if user prefers it
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
    }

    // Handling internal navigation with fade effects
    const links = document.querySelectorAll('.nav-link');
    const contentAreas = document.querySelectorAll('.content-area');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior
            const targetId = this.getAttribute('href'); // Assumes link's href is the ID of the content area

            // Fade out all content areas
            contentAreas.forEach(area => {
                if (!area.classList.contains('hidden')) {
                    area.classList.add('hidden');
                }
            });

            // Fade in the target content area
            setTimeout(() => {
                document.querySelector(targetId).classList.remove('hidden');
            }, 500); // Wait for the fade out to complete
        });
    });

    // Handling success/error messages from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const messageDiv = document.getElementById("message");

    if (urlParams.has('subscribed')) {
        const status = urlParams.get('subscribed');
        if (status === 'success') {
            messageDiv.textContent = "Thank you for subscribing!";
            messageDiv.classList.add('success');
        } else if (status === 'error') {
            messageDiv.textContent = "There was an error with your subscription. Please try again.";
            messageDiv.classList.add('error');
        }
        messageDiv.style.display = 'block';
    }
});
