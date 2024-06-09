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