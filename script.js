//this is ment for the words moving to the right
document.addEventListener("DOMContentLoaded", function() {
    const recommendTexts = document.querySelectorAll('.recommend-text, .recommend-text-1, .recommend-text-2, .recommend-text-3, .recommend-text-4');

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

//This is meant to cycle through the images in the rectangle-contain classes using a back and next button
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.image-slider');
    const scrollButtonNext = document.getElementById('scroll-button-next');
    const scrollButtonBack = document.getElementById('scroll-button-back');
    
    scrollButtonNext.addEventListener('click', function () {
        const firstChild = slider.firstElementChild;
        const boxWidth = firstChild.offsetWidth + 160; 
        
        slider.style.transition = 'transform 0.6s ease-in-out';
        slider.style.transform = `translateX(-${boxWidth}px)`;

        slider.addEventListener('transitionend', function onTransitionEnd() {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            slider.appendChild(firstChild);
            setTimeout(() => {
                slider.style.transition = 'transform 0.6s ease-in-out';
            }, 50); 
            slider.removeEventListener('transitionend', onTransitionEnd);
        });
    });

    scrollButtonBack.addEventListener('click', function () {
        const lastChild = slider.lastElementChild;
        const boxWidth = lastChild.offsetWidth + 160; 
        
        slider.style.transition = 'none';
        slider.insertBefore(lastChild, slider.firstChild);
        slider.style.transform = `translateX(-${boxWidth}px)`;
        
        setTimeout(() => {
            slider.style.transition = 'transform 0.6s ease-in-out';
            slider.style.transform = 'translateX(0)';
        }, 50);
    });
});

//This is meant to cycle through the images in the rectangle-contain classes using a back and next button

//This is meant to cycle through the images in the rectangle-contain classes


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all demon-slayer-container elements
    const demonSlayerContainers = document.querySelectorAll('.demon-slayer-container');

    // Initialize index for current image
    let currentIndex = 0;

    // Function to show the current image and schedule the next rotation
    function rotateImages() {
        // Hide all demon-slayer-container elements
        demonSlayerContainers.forEach(container => {
            container.style.display = 'none';
        });

        // Show the demon-slayer-container at the current index
        demonSlayerContainers[currentIndex].style.display = 'block';

        // Increment index for next rotation
        currentIndex = (currentIndex + 1) % demonSlayerContainers.length;

        // Schedule next rotation after 5 seconds
        setTimeout(rotateImages, 4000);
    }

    // Start the rotation
    rotateImages();
});

