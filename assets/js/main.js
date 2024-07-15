// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;

// Header
const links = document.querySelectorAll(".navbar__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    link.classList.add("navbar__link--active");
  });
});

// Feedback slider
document.addEventListener("DOMContentLoaded", function () {
  const feedbackItems = document.querySelectorAll(".feedback-item");
  const feedbackCtaItems = document.querySelectorAll(".feedback-cta__item");

  feedbackCtaItems.forEach((ctaItem, index) => {
    ctaItem.addEventListener("click", () => {
      feedbackCtaItems.forEach((item) =>
        item.classList.remove("feedback-cta__item--active")
      );
      ctaItem.classList.add("feedback-cta__item--active");

      feedbackItems.forEach((item) => (item.style.display = "none"));
      const startIndex = index * 2;
      feedbackItems[startIndex].style.display = "block";
      if (feedbackItems[startIndex + 1]) {
        feedbackItems[startIndex + 1].style.display = "block";
      }
    });
  });

  // Hiển thị phần tử đầu tiên khi tải trang
  feedbackCtaItems[0].classList.add("feedback-cta__item--active");
  feedbackItems[0].style.display = "block";
  if (feedbackItems[1]) {
    feedbackItems[1].style.display = "block";
  }
});
