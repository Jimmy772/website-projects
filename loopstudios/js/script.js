document.querySelector(".nav-btn").addEventListener("click", toggleMenu);

function toggleMenu() {
  var navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("show-menu");

  var navIcon = document.querySelector(".nav-btn i");

  if (navMenu.classList.contains("show-menu")) {
    // Menu is open, set the close (X) icon
    navIcon.classList.remove("fa-bars");
    navIcon.classList.add("fa-times");
  } else {
    // Menu is closed, set the open (hamburger) icon
    navIcon.classList.remove("fa-times");
    navIcon.classList.add("fa-bars");
  }
}
