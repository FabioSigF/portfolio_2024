AOS.init();

// Scroll on click
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Previne o comportamento padrão do link

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Scroll suave até o elemento alvo
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
