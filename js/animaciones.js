// Gestión de las animaciones de las secciones con IntersectionObserver,
// para que se ejecuten cada vez que sus elementos estén visibles en pantalla
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
