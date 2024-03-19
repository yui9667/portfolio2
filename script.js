"strict";
const skillSection = document.querySelector(".skill-main");
const options = {
  threshold: 0.5,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      AnimationSkills();
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(skillSection);
const AnimationSkills = () => {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const animationName = bar.dataset.animation;
    bar.style.animation = animationName + " 3s";
  });
};
