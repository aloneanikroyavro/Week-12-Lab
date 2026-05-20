// Array containing 4 distinct image URLs from Lorem Picsum
const hobbyImages = [
  "https://picsum.photos/id/10/600/400",  // Image 1
  "https://picsum.photos/id/43/600/400",  // Image 2
  "https://picsum.photos/id/96/600/400",  // Image 3
  "https://picsum.photos/id/103/600/400" // Image 4
];

// Keep track of the current image index
let currentIndex = 0;

// Grab references to DOM elements
const galleryImg = document.getElementById("gallery-img");
const nextBtn = document.getElementById("next-btn");

// Add click event listener to the "Next Photo" button
nextBtn.addEventListener("click", function() {
  // 1. Move to the next index
  currentIndex++;

  // 2. Reset back to 0 if out-of-bounds to avoid 'undefined' error
  if (currentIndex >= hobbyImages.length) {
    currentIndex = 0;
  }

  // 3. Update the source attribute of our image element
  galleryImg.src = hobbyImages[currentIndex];
  
  // Console log requirement check
  console.log("Current Gallery Index displaying cleanly:", currentIndex);
});
