function handleArrowsPosition() {
    const introSection = document.querySelector('.Intro');
    const arrowsContainer = document.querySelector('.arrows-container');
    const introBottom = introSection.offsetTop + introSection.offsetHeight;
    const viewportBottom = window.scrollY + window.innerHeight;
  
    if (viewportBottom >= introBottom) {
      arrowsContainer.classList.add('absolute');
    } else {
      arrowsContainer.classList.remove('absolute');
    }
  }
  
  // Call the function on scroll and resize events
  window.addEventListener('scroll', handleArrowsPosition);
  window.addEventListener('resize', handleArrowsPosition);
  
  // Call the function once on page load
  document.addEventListener('DOMContentLoaded', handleArrowsPosition);