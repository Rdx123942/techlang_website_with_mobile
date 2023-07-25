'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const zoomLink = document.getElementById('zoom-link');

zoomLink.addEventListener('click', function() {
  window.open('https://us06web.zoom.us/j/2812886342?pwd=Y3p4dVA4REl5ZUpFTTRFNDZEaFROUT09', '_blank');
});

function openForm(youtubeURL) {
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("formContainer").dataset.youtubeUrl = youtubeURL;
}

function submitForm(event) {
  event.preventDefault();
  // Get the form input values
  const name = document.getElementById("name").value;
  const collegeEmail = document.getElementById("collegeEmail").value;
  const course = document.getElementById("course").value;

  // Here you can perform any form validation if needed
  // For example, you can check if the email is a valid college email address

  // For simplicity, let's assume the form is valid

  // Redirect to the YouTube URL stored in the data attribute.
  const youtubeURL = document.getElementById("formContainer").dataset.youtubeUrl;
  window.location.href = youtubeURL;
}


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);