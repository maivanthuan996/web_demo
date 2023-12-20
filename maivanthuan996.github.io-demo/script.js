// ===================== Dark theme ==================
var themeButton = document.getElementById("theme-button");
var darkTheme = "dark-theme";
var iconTheme = "bxs-sun";
var selectedTheme = localStorage.getItem("selected-theme");
var selectecIcon = localStorage.getItem("selected-icon");

var getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
var getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bxs-sun";
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ===================SHOW MENU ==============================
var navMenu = document.querySelector(".nav__menu");
var navToggle = document.querySelector(".nav__toggle");
var navClose = document.querySelector(".nav__close");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
});
