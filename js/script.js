var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});
var swiper2 = new Swiper(".secondSwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const menuBtn = document.querySelector(".menu-btn");
const menuUl = document.querySelector("ul.menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".fa-x");
const links = document.querySelectorAll(".menu .link");
const topBtn = document.querySelector(".scroll-top");

menuBtn.onclick = () => {
  menuUl.classList.toggle("active");
  overlay.classList.toggle("active");
};
closeBtn.onclick = () => {
  menuUl.classList.toggle("active");
  overlay.classList.toggle("active");
};
links.forEach((link) => {
  link.onclick = () => {
    menuUl.classList.remove("active");
    overlay.classList.remove("active");
  };
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});
