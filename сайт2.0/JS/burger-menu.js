var bntOpen = document.querySelector(".switch-menu__item")
var burgerMenu = document.querySelector(".burger-menu")

bntOpen.addEventListener("click", openBurgerMenu) 
function openBurgerMenu () {
  burgerMenu.classList.toggle("burger-menu--active")
}
