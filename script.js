let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (!slides.length) {
        return;
    }

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide) => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

if (slides.length) {
    setInterval(() => {
        moveSlide(1);
    }, 5000);
}
