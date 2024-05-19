const pop_up = document.querySelector("div#pop-up")
const pop_up_button = document.querySelector("button#cta")
const overlay = document.querySelector("div#overlay")
const body = document.querySelector("body#body")
const closed = document.querySelector("i#close-pop-up")
let isOpenPopUp = false

pop_up_button.addEventListener("click", function() {
    pop_up.style.display = isOpenPopUp ? "none" : "block"
    overlay.style.display = isOpenPopUp ? "none": "block"
    body.style.overflow = isOpenPopUp ? "auto" : "hidden"
    isOpenPopUp = !isOpenPopUp
})
closed.addEventListener("click", function() {
    overlay.style.display = "none"      
    pop_up.style.display = "none"
    body.style.overflow = "auto"
    isOpenPopUp = false
})