nav = document.querySelector(".navbar-section");
toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function () {
  
  nav.classList.toggle("collapse-toggle");
});