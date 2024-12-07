

// number counting
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener('DOMContentLoaded', function() {
    animateValue("treesPlanted", 0, 5000, 10000);
    animateValue("farmersSupportedPlus", 0, 50, 10000);
    animateValue("hectaresRestored", 0, 10, 10000);
});


// Carousel animation
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    slides[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.remove('hidden');
}

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);
