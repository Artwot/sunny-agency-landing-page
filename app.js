const hamburguer_menu = document.querySelector(".hamburguer-menu");
const mobile_menu = document.querySelector(".mobile-menu");

console.log(mobile_menu);

function handleToggle() {
  mobile_menu.classList.toggle("active")
}

hamburguer_menu.addEventListener("click", handleToggle)