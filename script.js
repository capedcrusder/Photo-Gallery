const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
const galleryImgs = document.querySelectorAll(".gallery img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index;

// Display Full Image
function openFullImg(imgSrc) {
  fullImg.src = imgSrc;
  index = Array.from(galleryImgs).findIndex(img => img.src === imgSrc);
  fullImgBox.style.display = "flex";
  displayNavBtns();
}

// Close Full Image
function closeFullImg() {
  fullImgBox.style.display = "none";
}

// Display Previous Image
function prevImg() {
  if (index === 0) {
    index = galleryImgs.length - 1;
  } else {
    index--;
  }
  fullImg.src = galleryImgs[index].src;
  displayNavBtns();
}

// Display Next Image
function nextImg() {
  if (index === galleryImgs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  fullImg.src = galleryImgs[index].src;
  displayNavBtns();
}

// Display Navigation Buttons
function displayNavBtns() {
  if (galleryImgs.length > 1) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}

// Event Listeners
galleryImgs.forEach(img =>
  img.addEventListener("click", () => openFullImg(img.src))
);
prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);


// asynchronous image retrival
async function getImages() {
    try {
      const response = await fetch("https://127.0.0.1:5500/Images/img11.jpg");
      const images = await response.json();
      galleryImages.forEach((img, index) => {
        img.src = images[index].src;
        img.alt = images[index].alt;
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  getImages();