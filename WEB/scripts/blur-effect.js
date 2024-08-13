document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.Intro');
    const backgroundImage = document.getElementById('background-image');
    const maxScroll = intro.offsetHeight - window.innerHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const scrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);

        const blurAmount = (scrollPercentage / 100) * 10; // Max blur of 10px
        backgroundImage.style.filter = `blur(${blurAmount}px)`;
    });
});