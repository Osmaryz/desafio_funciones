let contenedor = document.querySelector("#key");
contenedor.style.height = "200px";
contenedor.style.width = "200px";
contenedor.style.border = "2px solid black";
contenedor.style.display = "flex";
contenedor.style.justifyContent = "center";
contenedor.style.alignItems = "flex-end";
contenedor.style.padding = "0px";

let input_usuario = document.querySelector("#ingresa_dato");
input_usuario.style.height = "20px";
input_usuario.style.width = "194px";
input_usuario.style.padding = "0px";

contenedor.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    contenedor.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    contenedor.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    contenedor.style.backgroundColor = "lightblue";
  } else if (event.key === "q") {
    let nuevo_div = document.createElement("div");
    nuevo_div.style.height = "200px";
    nuevo_div.style.width = "200px";
    nuevo_div.style.border = "2px solid black";
    nuevo_div.style.backgroundColor = "purple";
    document.body.appendChild(nuevo_div);
  } else if (event.key === "w") {
    let nuevo_div = document.createElement("div");
    nuevo_div.style.height = "200px";
    nuevo_div.style.width = "200px";
    nuevo_div.style.border = "2px solid black";
    nuevo_div.style.backgroundColor = "grey";
    document.body.appendChild(nuevo_div);
  } else if (event.key === "e") {
    let nuevo_div = document.createElement("div");
    nuevo_div.style.height = "200px";
    nuevo_div.style.width = "200px";
    nuevo_div.style.border = "2px solid black";
    nuevo_div.style.backgroundColor = "brown";
    document.body.appendChild(nuevo_div);
  }
});
