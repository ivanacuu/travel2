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
/*search block*/
const toggler = document.querySelector(".search-toggler");
const header = document.querySelector(".header");

toggler.addEventListener("click", () => {
  header.classList.toggle("search-open");
})

/*menu*/
const menu = document.querySelector(".burger-button");
const mobile = document.querySelector(".mobile-menu");

menu.addEventListener("click", () =>{
  mobile.classList.toggle("mobile-menu-open");
  menu.classList.toggle("burger-button-open");
})