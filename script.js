"strict";
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("The element is intersecting");
      entry.target.style.animation = entry.target.dataset.animate;
    } else {
      entry.target.style.animation = "none";
    }
  });
};

let observer = new IntersectionObserver(callback);

const animationItems = document.querySelectorAll(".animate");
animationItems.forEach((item) => {
  observer.observe(item);
});
