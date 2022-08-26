let hamburgerEl = document.querySelector(".hamburger-container");
const navLinks = document.getElementById("nav-links");
console.log("🚀 ~ file: hamburger.js ~ line 3 ~ navLinks", navLinks);

/** click sur icone 
hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active");
});
*/

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active");

  /** Activation du Menu css*/
  navLinks.classList.toggle("mobile-menu");
});

/**click sur icone */

console.log(menuHamburger, navLinks);

/**1- onclick */
menuHamburger.addEventListener("click", () => {
  //manque animation hamburger
  /* classList */
  navLinks.classList.toggle("mobile-menu");
});
