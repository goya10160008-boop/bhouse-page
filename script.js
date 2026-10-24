// A&B Boarding House: the only two things JavaScript does here.
// (The "js" class is set inline in index.html <head>, so the menu can collapse without a flash.)

// 1. Phone menu: the Menu button shows or hides the links.
var menuBtn = document.getElementById("menu-btn");
var nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  var isOpen = nav.classList.toggle("open");   // add or remove the "open" class
  menuBtn.setAttribute("aria-expanded", isOpen); // tells screen readers if it is open
});

// Close the menu after tapping a link
nav.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Close the menu with the Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.focus();
  }
});

// 2. Footer year: fills in the current year automatically.
document.getElementById("year").textContent = new Date().getFullYear();
