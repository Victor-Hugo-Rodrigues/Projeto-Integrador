document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const menuItems = document.querySelector(".menu-items");
  
    toggle.addEventListener("change", function () {
      if (toggle.checked) {
        menuItems.style.opacity = "1";
        menuItems.style.visibility = "visible";
      } else {
        menuItems.style.opacity = "0";
        menuItems.style.visibility = "hidden";
      }
    });
  });