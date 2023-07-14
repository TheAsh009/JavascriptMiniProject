const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

console.log(toggle, nav);
toggle.addEventListener("click", () => nav.classList.toggle("active"));
