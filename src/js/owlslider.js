$(document).ready(function () {
  $(".habilities_carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    dots: true, // Habilita os dots
    responsive: {
      0: {
        items: 2,
        dots: true, // Dots em telas menores
      },
      600: {
        items: 4,
        dots: true, // Dots em telas médias
      },
      1000: {
        items: 6,
        dots: true, // Dots em telas grandes
      },
    },
  });
});

$('.portfolio_carousel').owlCarousel({
  loop:true,
  items: 1,
  nav: true,
  navText: [
    '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>',  // Ícone para o botão "prev"
    '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>'  // Ícone para o botão "next"
  ]
})
