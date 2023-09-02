import {comprarProducto} from "./carrito.js";

const divProductos = document.getElementById("productos");

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded", () => {

        generarProductos(productosDisponibles);
});


export const generarProductos = (productos) => {

    divProductos.innerHTML = " ";

    productos.forEach( producto => {

        const {id,nombre,precio,imagen} = producto;
        let card = document.createElement("div");
        card.className = "producto";
        card.innerHTML = `
                            <div class="card" style="width: 18rem;">
                                <img src="${imagen}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nombre}</h5>
                                    <p class="card-text">$${precio}</p>
                                    <a id=btn${id} class="btn color-boton">agregar al carrito</a>
                                </div>
                            </div>
                        `;
        divProductos.appendChild(card);

       const btnComprar = document.getElementById(`btn${id}`);
       btnComprar.addEventListener("click", () => comprarProducto(id));
        
    });

}