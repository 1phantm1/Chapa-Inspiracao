const burguer_icon = document.querySelector("i#burguer-icon")
const closed = document.querySelector("i#close")
const menu = document.querySelector("ul#menu_list")
const overlay = document.querySelector("div#overlay")
let isopen = false

burguer_icon.addEventListener("click", function burguer() {
  if (!isopen) {
    closed.style.display = "block"
    menu.classList.toggle("open")
    overlay.style.display = "block"
  } else {
    closed.style.display = "none"
  }
  isopen = !isopen
})

closed.addEventListener("click", () => {
  if (isopen) {
    overlay.style.display = "none"
    closed.style.display = "none"
    menu.classList.remove("open")
  } else{
    closed.style.display = "block"
  }
  isopen = !isopen
})