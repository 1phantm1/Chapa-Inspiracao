document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("ul.menu button")

    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault()
            const target_id = this.getAttribute("href").substring(1)
            const targetSection = document.querySelector(target_id)

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            })

            document.querySelector("div#overlay").style.display = "none"
            document.querySelector("ul#menu_list".classList.remove("open"))
        })
    })
})