<script> alert("¡Hola! Esta es una alerta."); </script>
// Seleccionar la imagen por su ID
const imagen = document.getElementById("imagen-efecto");
// Añadir efecto al pasar el cursor (reduce opacidad)
imagen.addEventListener("mouseover", () => {
imagen.style.opacity = "0.5";
});
// Quitar efecto al retirar el cursor (restablece opacidad)
imagen.addEventListener("mouseout", () => {
imagen.style.opacity = "1";
});