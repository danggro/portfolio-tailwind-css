// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const topUp = document.querySelector("#to-top");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    topUp.classList.add("flex");
    topUp.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    topUp.classList.remove("flex");
    topUp.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("hidden");
});

//Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != nav && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    nav.classList.add("hidden");
  }
});

// Dark Mode toggle
const checkbox = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindah posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  checkbox.checked = true;
} else {
  checkbox.checked = false;
}
