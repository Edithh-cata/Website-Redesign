document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Open lightbox on click
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.getAttribute("data-src");
            if (imgSrc) {
                lightboxImg.src = imgSrc;
                lightbox.style.display = "flex";  // Show the lightbox
                lightboxImg.onload = () => {
                    // Adjust width and height based on image natural dimensions
                    const imgAspectRatio = lightboxImg.naturalWidth / lightboxImg.naturalHeight;
                    const windowAspectRatio = window.innerWidth / window.innerHeight;
                    if (imgAspectRatio > windowAspectRatio) {
                        // Image is wider, adjust based on width
                        lightboxImg.style.width = "90%";
                        lightboxImg.style.height = "auto";
                    } else {
                        // Image is taller, adjust based on height
                        lightboxImg.style.height = "90%";
                        lightboxImg.style.width = "auto";
                    }
                };
            }
        });
    });

    // Close lightbox on click of close button or outside image
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = ""; // Clear the image src to stop loading it
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            lightboxImg.src = ""; // Clear the image src to stop loading it
        }
    });

    // Handle ESC key to close the lightbox
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
            lightboxImg.src = ""; // Clear the image src to stop loading it
        }
    });
});
