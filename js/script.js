const maps = document.getElementById("maps");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const town1 = document.getElementById("town1");
const town2 = document.getElementById("town2");
const town3 = document.getElementById("town3");

const allButtons = document.querySelector(".button");
const button2 = document.querySelector(".button");
const footerLinkEl1 = document.getElementById("nofollow1");
const footerLinkEl2 = document.getElementById("nofollow2");

console.log(maps, location1, location2, location3);

// Click su address | desactive prevent | affiche la carte
//Plus simple faire une boucle
//TODO Refactorer le code pour ajouter le meme listener a plusieur elements diff.
location1.addEventListener("click", (ev) => {
  ev.preventDefault();
  maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769783.3017549515!2d27.964346562343092!3d-26.329562941505152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9517cba6dd8fbf%3A0x510fb0f8056d38c3!2s99%20Skew%20Rd%2C%20Anderbolt%2C%20Boksburg%2C%201459%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2sfr!4v1661289692868!5m2!1sfr!2sfr" width="1440" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});

town1.addEventListener("click", (ev) => {
  ev.preventDefault();
  maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769783.3017549515!2d27.964346562343092!3d-26.329562941505152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9517cba6dd8fbf%3A0x510fb0f8056d38c3!2s99%20Skew%20Rd%2C%20Anderbolt%2C%20Boksburg%2C%201459%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2sfr!4v1661289692868!5m2!1sfr!2sfr" width="1440" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});

location2.addEventListener("click", (ev) => {
  ev.preventDefault();
  maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55422.227502891285!2d31.00330129805809!3d-29.75191915151772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7068447ec0001%3A0x21912ef755fad544!2sMultimedia%20Technical%20Services!5e0!3m2!1sfr!2sfr!4v1661289565079!5m2!1sfr!2sfr" width="1440" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});

town2.addEventListener("click", (ev) => {
  ev.preventDefault();
  maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55422.227502891285!2d31.00330129805809!3d-29.75191915151772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7068447ec0001%3A0x21912ef755fad544!2sMultimedia%20Technical%20Services!5e0!3m2!1sfr!2sfr!4v1661289565079!5m2!1sfr!2sfr" width="1440" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});

location3.addEventListener("click", (ev) => {
  ev.preventDefault();
  maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251738.50631630272!2d18.60505198452243!3d-34.00296414904738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc516f59f60035%3A0x27935b3a64514879!2s111%20Kruis%20Rd%2C%20Brackenfell%2C%20Cape%20Town%2C%207925%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2sfr!4v1661289629296!5m2!1sfr!2sfr" width="1440" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});

town3.addEventListener("click", (ev) => {
  ev.preventDefault();
  maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251738.50631630272!2d18.60505198452243!3d-34.00296414904738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc516f59f60035%3A0x27935b3a64514879!2s111%20Kruis%20Rd%2C%20Brackenfell%2C%20Cape%20Town%2C%207925%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2sfr!4v1661289629296!5m2!1sfr!2sfr" width="1440" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});

allButtons.addEventListener("click", (ev) => {
  ev.preventDefault();
});
button2.addEventListener("click", (ev) => {
  ev.preventDefault();
});
footerLinkEl1.addEventListener("click", (ev) => {
  ev.preventDefault();
});
footerLinkEl2.addEventListener("click", (ev) => {
  ev.preventDefault();
});
