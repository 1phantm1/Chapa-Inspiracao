const home = document.querySelector("button#inicio_btn")
const projects = document.querySelector("button#projetos")
const proposts = document.querySelector("button#propostas")
const news = document.querySelector("button#noticias")
const members = document.querySelector("button#membros")
const meet_propost = document.querySelector("button#membro")
home.addEventListener("click", () => {
    window.location.href = "index.html"
})
proposts.addEventListener("click", () => {
    window.location.href = "inspiração\pages\propostas.html"
})