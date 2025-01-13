console.log("JavaScript file is connected!");
document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#carouselExample");
    const playPauseButton = document.querySelector("#playPauseButton");
    const icon = playPauseButton.querySelector("i");

    let isPlaying = true; // Start with autoplay enabled

    // Initialize the carousel
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Automatic slideshow interval
        ride: "carousel", // Enable autoplay
    });

    // Prevent default slide behavior when play/pause button is clicked
    playPauseButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent event bubbling

        if (isPlaying) {
            // Pause the carousel
            carousel.pause();
            icon.classList.remove("bi-pause-fill");
            icon.classList.add("bi-play-fill"); // Show play icon
        } else {
            // Resume the carousel
            carousel.cycle();
            icon.classList.remove("bi-play-fill");
            icon.classList.add("bi-pause-fill"); // Show pause icon
        }

        isPlaying = !isPlaying; // Toggle play/pause state
    });

});
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const footer = document.querySelector(".footer"); // Select the footer element

    if (backToTopButton && footer) {
        // Show/hide button on scroll
        window.addEventListener("scroll", function () {
            const footerTop = footer.getBoundingClientRect().top + window.scrollY; // Footer's position relative to the document
            const buttonHeight = backToTopButton.offsetHeight; // Height of the button
            const windowBottom = window.scrollY + window.innerHeight; // Bottom of the visible viewport

            if (window.scrollY > 200) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }

            // Stop button at the top of the footer
            if (windowBottom >= footerTop) {
                const maxBottom = document.body.offsetHeight - footerTop + 12; // Distance to stop just above the footer
                backToTopButton.style.position = "absolute";
                backToTopButton.style.bottom = `${maxBottom}px`;
            } else {
                backToTopButton.style.position = "fixed";
                backToTopButton.style.bottom = "10px";
            }
        });

        // Scroll to top when button is clicked
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});
