const toggle = document.querySelector('.toggle-switch input[type="checkbox"]');
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});

// Guardar preferencia
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
  localStorage.setItem("theme", this.checked ? "dark" : "light");
});

// Al cargar la página, aplicar preferencia
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}
