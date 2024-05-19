document.addEventListener("DOMContentLoaded", function() {
  const burguerIcon = document.querySelector("i#burguer-icon");
  const closeIcon = document.querySelector("i#close");
  const menu = document.querySelector("ul#menu_list");
  const overlay = document.querySelector("div#overlay");
  const body = document.querySelector("body#body")
  let isOpen = false;

  burguerIcon.addEventListener("click", function burguerI() {
      overlay.classList.add("open");
      menu.classList.add("open");
      closeIcon.style.display = "block";
      overlay.style.display = "block";
      body.style.overflow = "hidden"

      isOpen = true;
  });

  closeIcon.addEventListener("click", function() {
      overlay.classList.remove("open");
      menu.classList.remove("open");
      closeIcon.style.display = "none";
      overlay.style.display = "none";
      body.style.overflow = "auto"
      isOpen = false;
  });

  overlay.addEventListener("click", function() {
      if (isOpen) {
          overlay.classList.remove("open");
          menu.classList.remove("open");
          closeIcon.style.display = "none";
          overlay.style.display = "none";
          body.style.overflow = "auto"
          isOpen = false;
      }
  });
});
