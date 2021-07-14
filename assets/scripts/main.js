var slideIndex = 1;
var end = false;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n < 1) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.remove("second");
}

const toggler = document.querySelector(".search-toggler");
const header = document.querySelector(".header");

toggler.addEventListener("click", () => {
  header.classList.toggle("search-open");
})
