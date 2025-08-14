  const hamburger = document.querySelector('.nav-hamburger');
        const navLinks = document.querySelector('.nav-links');
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('open');
        });

        // Detect when a video tab closes and refresh the page
        document.querySelectorAll('.watch-demo').forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    location.reload();
                }, 60000); // Reload after 60s (approx video length)
            });
        });