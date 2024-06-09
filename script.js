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
