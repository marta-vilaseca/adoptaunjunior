// Manejo de cartas
// - Uso del shuffleButton para mezclar y volver a repartir
// - Gestión de las animaciones para el efecto anterior
// - Asegurar que siempre haya solo una carta visible cara arriba

document.addEventListener("DOMContentLoaded", function () {
  const ul = document.querySelector(".card__list");
  const lis = Array.from(ul.children);
  const shuffleButton = document.getElementById("shuffleButton");

  if (!ul || !shuffleButton) {
    console.error("Se ha producido un error");
    return;
  }

  function shuffleAndAnimateCards() {
    // Paso 1: Girar todas las cartas
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("is-flipped");
    });

    // Paso 2: hacer desaparecer las cartas
    lis.forEach((li) => {
      li.classList.add("disappearing");
    });

    // Paso 3: Mezclar y recolocar cartas después de que hayan desaparecido las anteriores
    const shuffledLis = lis.sort(() => Math.random() - 0.5);

    shuffledLis.forEach((li, index) => {
      ul.appendChild(li);

      setTimeout(() => {
        li.classList.remove("disappearing");
        li.classList.add("reappearing");

        setTimeout(() => {
          li.classList.remove("reappearing");
        }, 700); // Asegurarse que el delay coincida con la duración de la animación CSS
      }, index * 200);
    });
  }

  shuffleButton.addEventListener("click", shuffleAndAnimateCards);

  // Que solamente pueda haber una carta visible a la vez
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      document.querySelectorAll(".card").forEach((c) => c.classList.remove("is-flipped"));
      card.classList.toggle("is-flipped");
    });
  });
});
