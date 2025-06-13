const themeToggle = document.getElementById("theme-toggle");
const iconMoon = document.getElementById("icon-moon");
const iconSun = document.getElementById("icon-sun");
const body = document.body;

// Función para actualizar los íconos
function updateIcons(isDark) {
  iconMoon.style.display = isDark ? "none" : "block";
  iconSun.style.display = isDark ? "block" : "none";
}

// Leer preferencia guardada
const darkMode = localStorage.getItem("darkMode") === "enabled";

if (darkMode) {
  body.classList.add("dark-mode");
  updateIcons(true);
} else {
  updateIcons(false);
}

// Evento de toggle
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");
  updateIcons(isDark);
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});
