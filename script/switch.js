const selector = document.getElementById("selectorColor");
const mensaje = document.getElementById("mensaje");

selector.addEventListener("change", () => {
  const colorElegido = selector.value; // <-- capturamos el value

  switch (colorElegido) {
    case "rojo":
      document.body.style.backgroundColor = "red";
      mensaje.textContent = "Color: rojo";
      break;

    case "azul":
      document.body.style.backgroundColor = "blue";
      mensaje.textContent = "Color: azul";
      break;

    case "verde":
      document.body.style.backgroundColor = "green";
      mensaje.textContent = "Color: verde";
      break;

    default:
      document.body.style.backgroundColor = "white";
      mensaje.textContent = "No hay";
      console.log("no tengo este color");
      break;
  }
});
