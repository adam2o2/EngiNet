//this is meant for the words moving to the right
document.addEventListener("DOMContentLoaded", function() {
    const recommendTexts = document.querySelectorAll('.recommend-text, .recommend-text-1, .recommend-text-2, .recommend-text-head, .recommend-text-3, .recommend-text-4, .recommend-text-5, .recommend-text-6');

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
// this is meant for the words moving to the right

//This is meant to cycle through the images in the rectangle-contain classes using a back and next button
document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll('.container, .container-1, .container-2, .container-3, .container-4, .container-5, .container-6');

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
// document.addEventListener("DOMContentLoaded", function() {
//     const demonSlayerContainers = document.querySelectorAll('.character-container');

//     let currentIndex = 0;

//     function rotateImages() {
//         demonSlayerContainers.forEach(container => {
//             container.style.display = 'none';
//         });

//         demonSlayerContainers[currentIndex].style.display = 'block';

//         currentIndex = (currentIndex + 1) % demonSlayerContainers.length;

//         setTimeout(rotateImages, 4000);
//     }

//     rotateImages();
// });
// cycles through the anime description up top

// creates the anime trailer click to the desire location
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container, .container-1, .container-2, .container-3, .container-4, .container-5, .container-6');
    containers.forEach((container, index) => {
        const sections = container.querySelectorAll('.box-group');
        sections.forEach(section => {
            section.addEventListener('click', function() {
                showAnimeDetails(
                    index === 0 ? 'anime-details' :
                    index === 1 ? 'anime-details-1' :
                    index === 2 ? 'anime-details-2' :
                    index === 3 ? 'anime-details-3' :
                    index === 4 ? 'anime-details-4' :
                    index === 5 ? 'anime-details-5' :
                    'anime-details-6'
                  );
                  
            });
        });
    });
});

function showAnimeDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    detailsElement.style.display = 'block';

    const iframe = detailsElement.querySelector('iframe');
    const src = iframe.src;
    if (!src.includes('autoplay=1')) {
        iframe.src = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;
    }

    const targetElement = detailsElement.querySelector('.anime-trailer, .anime-trailer-1, .anime-trailer-2, .anime-trailer-3, .anime-trailer-4, .anime-trailer-5, .anime-trailer-6');
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goBack(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    const iframe = detailsElement.querySelector('iframe');
    
    iframe.src = iframe.src.replace('&autoplay=1', '').replace('?autoplay=1', '');
    
    detailsElement.style.display = 'none';
}
// creates the anime trailer click to the desire location


//scroll up arrow
// Show the scroll-to-top button when user scrolls down
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//scroll up arrow

// Opens the about button to display details
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("aboutModal");
    var btn = document.getElementById("aboutButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
// Opens the about button to display details

// Developer button goes straight to the developers section
document.addEventListener("DOMContentLoaded", function() {

    var developerButton = document.getElementById("developerButton");
    
    var container6 = document.querySelector(".container-6");
    
    var scrollPosition = container6.getBoundingClientRect().top + window.scrollY - 500; 
    
    developerButton.addEventListener("click", function() {

        container6.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    });
});
// Developer button goes straight to the developers section

// Selects one the of anime randomly
const images = [
    'Mushoku-poster.png',
    'OnePiece-poster.png',
    'Konosuba-poster.png',
    'MHA-poster.png',
    'DemonSlayer-poster.png',
    'Kaiju-poster.png',
    'FairyTail-poster.png',
    // Add more image paths here
];

// Mapping images to their corresponding Crunchyroll URLs
const crunchyrollLinks = {
    'Mushoku-poster.png': 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation',
    'OnePiece-poster.png': 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece',
    'Konosuba-poster.png': 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world',
    'MHA-poster.png': 'https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia',
    'DemonSlayer-poster.png': 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba',
    'Kaiju-poster.png': 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8',
    'FairyTail-poster.png': 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail',
    // Add more image-URL mappings here
};

function selectRandomAnime() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    randomImage.src = selectedImage;
    // Set the Crunchyroll link based on the selected image
    crunchyrollButton.href = crunchyrollLinks[selectedImage];
}

rollButton.addEventListener('click', () => {
    selectRandomAnime();
    overlay.style.display = 'flex';
});

rerollButton.addEventListener('click', () => {
    selectRandomAnime();
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});

crunchyrollButton.addEventListener('click', () => {
    window.location.href = crunchyrollButton.href;
});

// Selects one the of anime randomly
