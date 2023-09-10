// Desafió 1
let image = document.querySelector(".maset");

image.addEventListener("click", () => {
  if (image.style.border) {
    image.style.border = "";
  } else {
    image.style.border = "2px solid black";
  }
});

// Desafió 2
let button = document.querySelector(".botver");

button.addEventListener("click", () => {
  let N1 = document.querySelector(".int1").value;
  let N2 = document.querySelector(".int2").value;
  let N3 = document.querySelector(".int3").value;

  let total = +N1 + +N2 + +N3;

  if (total > 10) {
    document.querySelector(".condicion1").textContent =
      "Llevas demasiados stickers";
  } else {
    document.querySelector(".condicion1").textContent = "Llevas " + total;
  }
});

// Desafió 3

let selection = document.querySelector(".botdes3");

selection.addEventListener("click", () => {
  let N1 = document.querySelector("#bot1").value;
  let N2 = document.querySelector("#bot2").value;
  let N3 = document.querySelector("#bot3").value;

  let password = N1 + N2 + N3;
  let resultado = document.querySelector(".resultado");

  if (password === "911") {
    resultado.textContent = "Password 1 Correcto";
    resultado.style.color = "green";
  } else if (password === "714") {
    resultado.textContent = "Password 2 Correcto";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Password Incorrecto";
    resultado.style.color = "red";
  }
});
