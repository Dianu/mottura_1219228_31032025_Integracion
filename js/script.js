// Validación y obtención de datos para formulario de contacto
const form = document.getElementById("form-contacto");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Todos los campos son obligatorios",
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: `Gracias por tu contacto, ${nombre}!`,
        text: "En breve te estaré respondiendo.",
    });

    form.reset();
});
