const images = document.querySelectorAll(".hide");

const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) imageObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);
images.forEach((img) => {
  imageObserver.observe(img);
});
