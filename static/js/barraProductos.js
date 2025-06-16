const opciones=document.querySelectorAll(".opcion")
 
  opciones.forEach(opcion => {
  opcion.addEventListener("click", function() {
    opciones.forEach(element => {
      element.style.backgroundColor="rgb(248, 248, 248)"
      element.style.color="black"
    });
    this.style.backgroundColor = "black";
    this.style.color = "white";
  });
});