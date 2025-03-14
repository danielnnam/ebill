document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });

            // Optional: Add a temporary highlight effect
            targetSection.style.transition = "background-color 0.5s ease-in-out";
            targetSection.style.backgroundColor = "#f0f8ff"; // Light highlight color

            setTimeout(() => {
                targetSection.style.backgroundColor = "transparent";
            }, 1000); // Reset after 1 second
        }
    });
});
