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
document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll('.container, .container-1, .container-2');

    containers.forEach(container => {
        const slider = container.querySelector('.image-slider');
        const scrollButtonNext = container.querySelector('#scroll-button-next');
        const scrollButtonBack = container.querySelector('#scroll-button-back');
        
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
});
//This is meant to cycle through the images in the rectangle-contain classes using a back and next button

//This is meant to cycle through the images in the rectangle-contain classes


// cycles through the anime description up top
document.addEventListener("DOMContentLoaded", function() {
    const demonSlayerContainers = document.querySelectorAll('.demon-slayer-container');

    let currentIndex = 0;

    function rotateImages() {
        demonSlayerContainers.forEach(container => {
            container.style.display = 'none';
        });

        demonSlayerContainers[currentIndex].style.display = 'block';

        currentIndex = (currentIndex + 1) % demonSlayerContainers.length;

        setTimeout(rotateImages, 4000);
    }

    rotateImages();
});
// cycles through the anime description up top

// creates the click for each box
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('group-1').addEventListener('click', function() {
      showAnimeDetails();
    });
    document.getElementById('group-2').addEventListener('click', function() {
      showAnimeDetails();
    });
    document.getElementById('group-3').addEventListener('click', function() {
      showAnimeDetails();
    });
    document.getElementById('group-4').addEventListener('click', function() {
      showAnimeDetails();
    });
    document.getElementById('group-5').addEventListener('click', function() {
      showAnimeDetails();
    });
    document.getElementById('group-6').addEventListener('click', function() {
      showAnimeDetails();
    });
    
  });
  
  function showAnimeDetails() {
    document.getElementById('anime-details').style.display = 'block';
    window.scrollTo(0, document.getElementById('anime-details').offsetTop);
  }
  
  function goBack() {
    document.getElementById('anime-details').style.display = 'none';
}
// creates the click for each box