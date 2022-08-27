const hamburgerEl = document.querySelector(".hamburger-container"),
  navLinks = document.getElementById("nav-links"),
  hideForhamburger = document.getElementById("hide-for-hamburger");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active");
  navLinks.classList.toggle("mobile-menu");
  hideForhamburger.classList.toggle("hide");
  //
});
