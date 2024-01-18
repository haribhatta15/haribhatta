(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  scrollToTopBtn.addEventListener("click", function () {
    smoothScrollTop();
  });

  function smoothScrollTop() {
    var currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
      window.requestAnimationFrame(smoothScrollTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }
});

// script.js

const projectContainer = document.querySelector(".project-slider");
const slides = document.querySelectorAll(".project-slide");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let currentIndex = 0;

arrowLeft.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlide();
});

arrowRight.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, slides.length - 1);
  updateSlide();
});

function updateSlide() {
  const translateValue = -currentIndex * 100;
  projectContainer.style.transform = `translateX(${translateValue}%)`;
}
