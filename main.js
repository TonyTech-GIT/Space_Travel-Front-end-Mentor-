// const activePage = window.location.pathname;
// console.log(activePage);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

function openBtn() {
  const openButton = document.getElementById("open-btn");
  const closeButton = document.getElementById("close-btn");
  const navbarLinks = document.getElementById("navbar-links");

  openButton.style.display = "none";
  navbarLinks.style.display = "flex";
  closeButton.style.display = "block";
}

function closeBtn() {
  const openButton = document.getElementById("open-btn");
  const closeButton = document.getElementById("close-btn");
  const navbarLinks = document.getElementById("navbar-links");

  // closeButton.classList.add('remove')
  openButton.style.display = "block";
  closeButton.style.display = "none";
  navbarLinks.style.display = "none";
}
