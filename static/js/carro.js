const carro =document.getElementById("carrito_de_compra")
const carro_modal=document.getElementById("carro_fondo")
const carro_cerrar=document.getElementById("carro_cerrar")
const tbody=document.getElementById('tbody')
const btn_pagar=document.getElementById('btn_pagar')
let totalapagar=document.getElementById("total_a_pagar")
let msjWasap= " "
let suma=0
let restar=0

carro.addEventListener("click",()=>{
    carro_modal.style.visibility='visible'
    
})

carro_cerrar.addEventListener("click",()=>{
    carro_modal.style.visibility='hidden'
})


function añadirAlaTabla(producto){
    let nombre=producto[0]
    let talla = producto[1]
    let cantidad = producto[2]
    let precio = producto[3]
    let total= cantidad*precio
   
    suma=suma+total
    console.log(suma)
    totalapagar.textContent=suma
    const fila = document.createElement("tr");
    const tdnombre = document.createElement("td");
    tdnombre.textContent = nombre;
    const tdtalla = document.createElement("td");
    tdtalla.textContent = talla;
    const tdcantidad = document.createElement("td");
    tdcantidad.textContent = cantidad;
    const tdprecio = document.createElement("td");
    tdprecio.textContent = precio;
    const tdtotal = document.createElement("td");
    tdtotal.textContent = total;
    const tdx = document.createElement("td");
    tdx.innerHTML=' <td><span class="btn_eliminar" onclick="eliminarElemento(this)"><i class="bi bi-x-lg"></i></span></td>'
   
    fila.appendChild(tdnombre);
    fila.appendChild(tdtalla);
    fila.appendChild(tdprecio);
    fila.appendChild(tdcantidad);
    fila.appendChild(tdtotal);
    fila.appendChild(tdx)
    tbody.appendChild(fila)


    console.log(nombre,talla,cantidad,precio,total)
    
    
   
    



    
}



function eliminarElemento(e){
    
    console.log(e.parentElement.parentElement)
    e.parentElement.parentElement.remove()
    Toastify({
        text: "Elemento Eliminado",
        duration: 3000,
        className: "info",
        gravity: "top", // `top` or `bottom`
        position: "right",
        style: {
          background: "red",
          
        }
      }).showToast();
    restar=e.parentElement.previousElementSibling.textContent
    
    suma=suma-restar
    totalapagar.textContent=suma
    
}






function pagar(){
    const filas = document.querySelectorAll("table tr");
let mensaje = "```"; // Inicio del bloque de código para WhatsApp
let totalGeneral = 0; // Acumulador del total a pagar

mensaje += "\nProducto   Talla   Precio   Cant   Total\n";
mensaje += "---------------------------------------------\n";

for (let i = 1; i < filas.length; i++) {
    const celdas = filas[i].querySelectorAll("td");

    if (celdas.length >= 5) {
        const producto = celdas[0].textContent.trim().padEnd(13);
        const talla = celdas[1].textContent.trim().padEnd(9);
        const precio = celdas[2].textContent.trim().padEnd(9);
        const cantidad = celdas[3].textContent.trim().padEnd(6);
        const total = celdas[4].textContent.trim().padEnd(1);

        mensaje += `${producto}${talla}${precio}${cantidad}${total}\n`;

        // Sumamos el total de esta fila
        totalGeneral += parseFloat(celdas[4].textContent.trim());
    }
}

mensaje += "---------------------------------------------\n";
mensaje += `Total a pagar: ${totalGeneral} $\n`;
mensaje += "```"; // Fin del bloque de código

const url = `https://wa.me/584243296202?text=${encodeURIComponent(mensaje)}`;
window.open(url, "_blank");

}