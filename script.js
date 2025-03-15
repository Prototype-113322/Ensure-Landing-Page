"use strict";

// SELECTING ELEMENTS
let hamburgerOpeningIcon = document.querySelector(".hamburger-opening-btn");
let hamburgerClosingIcon = document.querySelector(".hamburger-closing-btn");
let navBarContainer = document.querySelector(".navbar");
let hamburgerNavContainer = document.querySelector(".hamburger-container");
let overlayBackground = document.querySelector(".overlay");

//   SMOOTH SCROLL ANIMATION
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  },
  {
    root: null, // Observes the viewport
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

// Select all elements with the class "hidden"
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// HAMBURGER FUNCTIONALITY

function openingHamburgerFunctionality() {
  hamburgerOpeningIcon.classList.toggle("hidden-original", true);
  hamburgerClosingIcon.classList.toggle("hidden-original", false);
  hamburgerNavContainer.classList.toggle("hidden-original", false);
  overlayBackground.classList.toggle("overlay-hidden", false);
}
function closingHamburgerFunctionality() {
  hamburgerClosingIcon.classList.toggle("hidden-original", true);
  hamburgerOpeningIcon.classList.toggle("hidden-original", false);
  hamburgerNavContainer.classList.toggle("hidden-original", true);
  overlayBackground.classList.toggle("overlay-hidden", true);
}

function hamburgerFunctionality() {
  hamburgerOpeningIcon.addEventListener("click", function () {
    openingHamburgerFunctionality();
  });
  hamburgerClosingIcon.addEventListener("click", function () {
    closingHamburgerFunctionality();
  });
}

function closingOverlay() {
  overlayBackground.addEventListener("click", closingHamburgerFunctionality);
}

function escapeKeyClosingOverlay() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closingHamburgerFunctionality();
    }
  });
}

escapeKeyClosingOverlay();
closingOverlay();
hamburgerFunctionality();
