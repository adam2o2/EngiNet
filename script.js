//this is ment for the words moving to the right
document.addEventListener("DOMContentLoaded", function() {
    const recommendTexts = document.querySelectorAll('.recommend-text, .recommend-text-1, .recommend-text-2');

    function checkPosition() {
        const triggerBottom = window.innerHeight / 5 * 4;

        recommendTexts.forEach(text => {
            const textTop = text.getBoundingClientRect().top;

            if (textTop < triggerBottom) {
                text.classList.add('in-view');
            } else {
                text.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});
// this is ment for the words moving to the right

//This is meant to cycle through the images in the rectangle-contain classes
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.image-slider');
    const scrollButton = document.getElementById('scroll-button');
    
    scrollButton.addEventListener('click', function () {
        const firstChild = slider.firstElementChild;
        const boxWidth = firstChild.offsetWidth + 160; // Include margin in width calculation (80px on each side)
        
        slider.style.transition = 'transform 0.6s ease-in-out';
        slider.style.transform = `translateX(-${boxWidth}px)`;

        slider.addEventListener('transitionend', function onTransitionEnd() {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            slider.appendChild(firstChild);
            setTimeout(() => {
                slider.style.transition = 'transform 0.6s ease-in-out'; // Reapply the transition for the next click
            }, 50); // Small delay to ensure smoothness
            slider.removeEventListener('transitionend', onTransitionEnd);
        });
    });
});
//This is meant to cycle through the images in the rectangle-contain classes