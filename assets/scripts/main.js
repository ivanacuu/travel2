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

/*menu*/
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  
})

/*search bar*/
const magnify = document.querySelector(".magnifier");
const block = document.querySelector(".search");
const logo = document.querySelector(".header-icon")

magnify.addEventListener("click", () => {
  magnify.classList.toggle("active");
  block.classList.toggle("active");
  logo.classList.toggle("active");
})