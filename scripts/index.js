    const acordeonPreguntas = document.querySelectorAll('.body__acordeon-pregunta');
    const acordeonRespuestas = document.querySelectorAll('.body__acordeon-respuesta');

    const cerrarTodasLasRespuestas = () => {
        acordeonPreguntas.forEach((pregunta) => pregunta.style.display = 'flex');
        acordeonRespuestas.forEach((respuesta) => respuesta.style.display = 'none');
    }

    acordeonPreguntas.forEach((pregunta) => {
        const abrirAcordeon = pregunta.querySelector('.fa-caret-down');
        abrirAcordeon.addEventListener('click', () => {
            cerrarTodasLasRespuestas();
            pregunta.style.display = 'none';
            pregunta.nextElementSibling.style.display = 'flex';
        });
    });

    acordeonRespuestas.forEach((respuesta) => {
        const cerrarAcordeon = respuesta.querySelector('.fa-caret-up');
        cerrarAcordeon.addEventListener('click', () => {
            respuesta.style.display = 'none';
            respuesta.previousElementSibling.style.display = 'flex';
        });
    });

// Menú Hamburguesa
const menu = document.querySelector('.header__nav-menu-cont');
const menuCerrado = document.querySelectorAll('.header__nav-mobile-hidden');
const menuAbierto = document.querySelector('.oculto');
const headerNav = document.querySelector('.header__nav');
const equis = document.querySelector('.oculto__menu-cerrado');

menu.addEventListener('click', () => {
  menuCerrado.forEach(clase => {
    clase.style.display = 'none';
  });
  menuAbierto.style.display = 'flex'; 
  headerNav.style.height = '100dvh';
});

equis.addEventListener('click', () => {
  menuCerrado.forEach(clase => {
    clase.style.display = 'flex';
  });
  menuAbierto.style.display = 'none';
  headerNav.style.height = '10vh';
});



document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.containerRecipe__prev');
  const nextButton = document.querySelector('.containerRecipe__next');
  const containerRecipe = document.querySelector('.containerRecipe__container');

  let currentCardIndex = 0;

  function showCards() {
      containerRecipe.style.display = 'flex';
  }

  function hideCards() {
      containerRecipe.style.display = 'none';
  }

  function updateCurrentCard() {
      const cards = containerRecipe.querySelectorAll('.containerRecipe__card');
      cards[currentCardIndex].style.display = 'block';
      cards.forEach((card, index) => {
          if (index !== currentCardIndex) {
              card.style.display = 'none';
          }
      });
  }

  function toggleVisibility() {
      if (containerRecipe.style.display === 'none') {
          showCards();
          updateCurrentCard();
      } else {
          hideCards();
      }
  }

  prevButton.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
      toggleVisibility();
  });

  nextButton.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex + 1) % cards.length;
      toggleVisibility();
  });
});

