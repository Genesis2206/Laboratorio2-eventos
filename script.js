
document.getElementById("evento1").addEventListener("click", () => {
  alert("Hiciste click en el evento 1");
});


document.getElementById("evento2").addEventListener("dblclick", () => {
  alert("Hiciste doble click en el evento 2");
});


document.getElementById("evento3").addEventListener("mouseover", () => {
  document.getElementById("evento3").style.backgroundColor = "blue";
});


document.getElementById("evento4").addEventListener("mouseout", () => {
  document.getElementById("evento4").style.backgroundColor = "red";
});


document.addEventListener("keydown", (e) => {
  document.getElementById("evento5").textContent = `Tecla presionada: ${e.key}`;
});


const input = document.createElement("input");
input.placeholder = "Escribe algo...";
document.getElementById("evento6").appendChild(input);
input.addEventListener("change", () => {
  document.getElementById("evento6").style.backgroundColor = "orange";
});


input.addEventListener("focus", () => {
  document.getElementById("evento7").style.backgroundColor = "purple";
});


window.addEventListener("scroll", () => {
  document.getElementById("evento8").textContent = "¡Se detectó scroll!";
});
