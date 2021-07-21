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

/*accordion*/
const accordionContainer = document.querySelector(".all-places");

accordionContainer.addEventListener("click", (e) => {
  const accordions = Array.from(accordionContainer.children);
  const clicked = e.target.closest(".accordion-places");
  console.log(clicked);
  if (!clicked) return;
  accordions.forEach(function (acc) {
    acc.classList.remove("accordion-description-open");
  });
  clicked.classList.add("accordion-description-open");
});

/*video-popup*/
const videoPopup = document.querySelector(".video-popup");
const videoPlayer = document.querySelector(".video");

const openPopup = () =>{
  videoPopup.classList.add("active");
}

const closePopup = () =>{
  videoPopup.classList.remove("active");
  videoPlayer.pause();
  return false; 
}