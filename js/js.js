function goBack() {
  window.history.back();
}
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");

function openModal(imageSrc) {
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  modal.style.display = "none";
}

const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    const img = slide.querySelector("div[class^='img_']");
    const imgStyle = window.getComputedStyle(img);
    const imgBg = imgStyle.getPropertyValue("background-image");
    const imageUrl = imgBg.replace(/^url\(['"](.+)['"]\)/, "$1");
    openModal(imageUrl);
  });
});






