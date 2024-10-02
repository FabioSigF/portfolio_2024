const btnHamburgerMenuMobile = document.getElementById("btn_menu_mobile");
const menuHeader = document.getElementById("menuHeader");
const menuMobile = document.getElementById("menuMobile");

//MÉTODOS PARA MANIPULAR MENU MOBILE
const activeMenuMobile = () => {
  btnHamburgerMenuMobile.classList.add("active");
  menuMobile.classList.add("active");
  menuHeader.classList.add("active");
};

const removeMenuMobile = () => {
  btnHamburgerMenuMobile.classList.remove("active");
  menuMobile.classList.remove("active");
  menuHeader.classList.remove("active");
  
};

//FUNÇÕES

//MENU HAMBURGER
const toggleMenu = () => {
  btnHamburgerMenuMobile.addEventListener("click", () => {
    if (btnHamburgerMenuMobile.classList.contains("active")) {
      removeMenuMobile();
    } else {
      activeMenuMobile();
    }
  });
};

//MEU MOBILE (Close on click link)
const toggleLinkMenuMobile = () => {
  const menuLinks = document.getElementsByClassName("menuMobile_link");

  Array.from(menuLinks).forEach((link) => {
    link.addEventListener("click", () => {
      removeMenuMobile();
    });
  });
};

toggleMenu();
toggleLinkMenuMobile();
