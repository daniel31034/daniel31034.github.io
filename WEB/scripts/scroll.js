const slides = document.querySelectorAll('.frame_active');
const introSection = document.querySelector('.Intro');

const initialDelay = 0.2;

function updateOpacity() {
    const totalScrollHeight = introSection.offsetHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    
    let scrollProgress = (currentScroll / totalScrollHeight - initialDelay) / (1 - initialDelay);
    scrollProgress = Math.max(0, Math.min(scrollProgress, 1));

    const slideIndex = Math.min(Math.floor(scrollProgress * 3), 2);
    const slideProgress = (scrollProgress * 3) % 1;

    slides.forEach((slide, index) => {
        if (scrollProgress === 0) {
            slide.style.opacity = index === 0 ? 1 : 0;
        } else if (index === slideIndex) {
            slide.style.opacity = index === 2 ? 1 : 1 - slideProgress;
        } else if (index === slideIndex + 1) {
            slide.style.opacity = slideProgress;
        } else {
            slide.style.opacity = 0;
        }
    });
}

window.addEventListener('scroll', updateOpacity);
updateOpacity();