const images = document.querySelectorAll(".midImg");

const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.2,
  }
);
images.forEach((img) => {
  imageObserver.observe(img);
});
