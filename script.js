'use strict';

/**
 * Element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * Navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
  elemToggleFunc(navToggleBtn); // For icon toggling logic if needed
});

/**
 * Close navbar on link click
 */

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navToggleBtn.classList.remove("active");
  });
}

/**
 * Header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * Scroll Reveal Animation
 */

const revealElements = document.querySelectorAll(".section, .service-card, .testimonial-card, .stats-item");

const revealCallback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target); // Only animate once
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  root: null,
  threshold: 0.15
});

revealElements.forEach(elem => {
  elem.classList.add("reveal-hidden"); // Initial state
  revealObserver.observe(elem);
});
