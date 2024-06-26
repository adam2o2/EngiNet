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
    const containers = document.querySelectorAll('.container, .container-1, .container-2, .container-3, .container-4, .container-5'); 
    
    containers.forEach(container => {
        const boxes = container.querySelectorAll('.box-group');
        
        boxes.forEach(box => {
            box.addEventListener('click', function() {
                const youtubeLink = box.getAttribute('data-youtube');
                let detailsId;

                if (container.classList.contains('container')) {
                    detailsId = 'anime-details';
                } else if (container.classList.contains('container-1')) {
                    detailsId = 'anime-details-1';
                } else if (container.classList.contains('container-2')) {
                    detailsId = 'anime-details-2';
                } else if (container.classList.contains('container-3')) {
                    detailsId = 'anime-details-3';
                } else if (container.classList.contains('container-4')) { 
                    detailsId = 'anime-details-4';
                } else if (container.classList.contains('container-5')) { 
                    detailsId = 'anime-details-5';
                } else {
                    detailsId = 'default-details-id';
                }

                showAnimeDetails(detailsId, youtubeLink);
            });
        });
    });
});

function showAnimeDetails(detailsId, youtubeLink) {
    const detailsElement = document.getElementById(detailsId);
    detailsElement.style.display = 'block';

    const iframe = detailsElement.querySelector('iframe');
    iframe.src = youtubeLink.includes('?') ? `${youtubeLink}&autoplay=1` : `${youtubeLink}?autoplay=1`;

    let targetElement;
    if (detailsId === 'anime-details') {
        targetElement = detailsElement.querySelector('.anime-trailer');
    } else if (detailsId === 'anime-details-1') {
        targetElement = detailsElement.querySelector('.anime-trailer-1');
    } else if (detailsId === 'anime-details-2') {
        targetElement = detailsElement.querySelector('.anime-trailer-2');
    } else if (detailsId === 'anime-details-3') {
        targetElement = detailsElement.querySelector('.anime-trailer-3');
    } else if (detailsId === 'anime-details-4') { 
        targetElement = detailsElement.querySelector('.anime-trailer-4');
    } else if (detailsId === 'anime-details-5') { 
        targetElement = detailsElement.querySelector('.anime-trailer-5');
    } else {
        return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goBack(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    const iframe = detailsElement.querySelector('iframe');
    iframe.src = '';
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

// Mapping images to their corresponding YouTube URLs
const youtubeLinks = {
    'Mushoku-poster.png': 'https://www.youtube.com/embed/wwKZYTsxIhk',
    'OnePiece-poster.png': 'https://www.youtube.com/embed/VP8QfLfuE7g',
    'Konosuba-poster.png': 'https://www.youtube.com/embed/p37syJvrlro',
    'MHA-poster.png': 'https://www.youtube.com/embed/UvEGL9KDGNQ',
    'DemonSlayer-poster.png': 'https://www.youtube.com/embed/7w5Vfjozzb8',
    'Kaiju-poster.png': 'https://www.youtube.com/embed/JwF7bhvnCxI',
    'FairyTail-poster.png': 'https://www.youtube.com/embed/SjYlGEvG2Go',
    // Add more image-URL mappings here
};

function selectRandomAnime() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const randomImage = document.getElementById('randomImage');
    const crunchyrollButton = document.getElementById('crunchyrollButton');

    randomImage.src = selectedImage;
    randomImage.dataset.youtubeLink = youtubeLinks[selectedImage];  // Store YouTube link in data attribute
    crunchyrollButton.href = crunchyrollLinks[selectedImage];
}

document.getElementById('rollButton').addEventListener('click', () => {
    selectRandomAnime();
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('rerollButton').addEventListener('click', () => {
    selectRandomAnime();
});

document.getElementById('overlay').addEventListener('click', (event) => {
    if (event.target === document.getElementById('overlay')) {
        document.getElementById('overlay').style.display = 'none';
    }
});

document.getElementById('crunchyrollButton').addEventListener('click', () => {
    window.location.href = document.getElementById('crunchyrollButton').href;
});

document.getElementById('randomImage').addEventListener('click', () => {
    const youtubeLink = document.getElementById('randomImage').dataset.youtubeLink;
    if (youtubeLink) {
        const youtubeIframe = document.getElementById('youtubeIframe');
        youtubeIframe.src = youtubeLink;
        document.getElementById('videoOverlay').style.display = 'flex';
    }
});

document.getElementById('videoOverlay').addEventListener('click', (event) => {
    if (event.target === document.getElementById('videoOverlay')) {
        document.getElementById('videoOverlay').style.display = 'none';
        document.getElementById('youtubeIframe').src = '';  // Stop the video
    }
});
// Selects one the of anime randomly

// front
document.addEventListener('DOMContentLoaded', () => {
    const watchNowButton = document.getElementById('watch-now-button');
    const nextButton = document.getElementById('next-button');
    const detailsContainer = document.getElementById('details-container');
    const rectangleHome = document.querySelector('.rectangle-home');

    const animeDetails = [
        {
            title: 'FairyTail',
            subtitle: 'After 777 years...',
            imageUrl: 'FairyTail-thumbnail.png',
            linkUrl: 'https://www.crunchyroll.com/'
        },
        {
            title: 'Demon Slayer',
            subtitle: 'A new adventure begins...',
            imageUrl: 'DemonSlayer-poster.png',
            linkUrl: 'https://www.crunchyroll.com/'
        },
        {
            title: 'One Piece',
            subtitle: 'One pirate One Dream...',
            imageUrl: 'OnePiece-poster.png',
            linkUrl: 'https://www.crunchyroll.com/'
        },
        {
            title: 'Jojo bizarre adventure',
            subtitle: 'Is that a jojo refrence...',
            imageUrl: 'Jojo-poster.png',
            linkUrl: 'https://www.crunchyroll.com/'
        },
        {
            title: 'Attack on Titan',
            subtitle: 'Kill all titans...',
            imageUrl: 'Attack-poster.png',
            linkUrl: 'https://www.crunchyroll.com/'
        },
        {
            title: 'Naruto',
            subtitle: 'Thats the ninja way...',
            imageUrl: 'Naruto-poster.png',
            linkUrl: 'https://www.crunchyroll.com/'
        },
        {
            title: 'My Hero Academia',
            subtitle: 'Go beyond PLUS ULTRA...',
            imageUrl: 'MHA-poster.png',
            linkUrl: 'https://www.crunchyroll.com/'
        },
        {
            title: 'Kaiju No.8',
            subtitle: 'A beast a man...',
            imageUrl: 'Kaiju-poster.png',
            linkUrl: 'https://www.crunchyroll.com/'
        }
    ];

    let currentIndex = 0;

    function updateContent(index) {
        const currentDetails = animeDetails[index];

        // Update or create title element
        let titleElement = document.getElementById('title');
        if (!titleElement) {
            titleElement = document.createElement('h1');
            titleElement.id = 'title';
            detailsContainer.insertBefore(titleElement, detailsContainer.firstChild);
        }
        titleElement.textContent = currentDetails.title;

        // Update or create subtitle element
        let subtitleElement = document.getElementById('subtitle');
        if (!subtitleElement) {
            subtitleElement = document.createElement('p');
            subtitleElement.id = 'subtitle';
            detailsContainer.insertBefore(subtitleElement, watchNowButton);
        }
        subtitleElement.textContent = currentDetails.subtitle;

        watchNowButton.href = currentDetails.linkUrl;
        rectangleHome.style.backgroundImage = `url(${currentDetails.imageUrl})`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % animeDetails.length;
        updateContent(currentIndex);
    });

    // Initialize with the first anime details
    updateContent(currentIndex);
});

// front