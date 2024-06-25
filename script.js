// Function to initialize event listeners
function setupEventListeners() {
  const buttonEl = document.querySelector('#image-changer');
  buttonEl.addEventListener('click', changeImage);
}

// Function to get the current image element and log its details
function logCurrentImage(imageEl) {
  console.log(imageEl);
  console.log('Old image: ' + imageEl.src);
}

// Function to construct the new image source path
function constructImagePath(xCoord, yCoord) {
  return `images/out256_${xCoord}_${yCoord}.jpg`;
}

// Main function to change the image based on selected coordinates
function changeImage() {
  const imageEl = document.querySelector('#coord-image');
  logCurrentImage(imageEl);

  const xSelectEl = document.querySelector('#x-coord');
  const ySelectEl = document.querySelector('#y-coord');
  const xCoord = xSelectEl.value;
  const yCoord = ySelectEl.value;

  const newImageSrc = constructImagePath(xCoord, yCoord);
  imageEl.src = newImageSrc;
  
  console.log('New image: ' + imageEl.src);
}

// Initialize all necessary event listeners on page load
document.addEventListener('DOMContentLoaded', setupEventListeners);
