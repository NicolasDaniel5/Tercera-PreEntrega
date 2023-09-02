import { productosDisponibles } from "./inicio.js";

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito",JSON.stringify([]));

document.addEventListener("DOMContentLoaded", () => {
    crearCarrito();
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"));
const listaCarrito = document.getElementById("items");
const totalCarrito = document.getElementById("totales");
const btnCarrito = document.getElementById("btnCarrito");
const carritoTable = document.getElementById("carrito");

btnCarrito.addEventListener("click", () => {

    if(carritoTable.style.display === "block"){
        carritoTable.style.display = "none";
    }else{
        carritoTable.style.display = "block";
        crearCarrito();
    }

});

export const comprarProducto = (idProducto) => {

    const producto = productosDisponibles.find(producto => producto.id === idProducto);
    const {id,nombre,precio,imagen} = producto;
    const productoCarrito = carrito.find(producto => producto.id === idProducto);

    if(productoCarrito === undefined){
        const nuevoProducto = {
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        };
        carrito.push(nuevoProducto);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }else{
        const indexProducto = carrito.findIndex(producto => producto.id === idProducto);

        carrito[indexProducto].cantidad++;
        carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad;
        sessionStorage.setItem("carrito",JSON.stringify(carrito));
    }

    carrito = JSON.parse(sessionStorage.getItem("carrito"));
    alert(`usted compro el producto ${nombre}`);

}

const crearCarrito = () => {

    listaCarrito.innerHTML = " ";
    carrito.forEach(producto => {
        const {id,nombre,precio,imagen,cantidad} = producto;
        let body = document.createElement("tr");
        body.className = "producto_carrito";
        body.innerHTML = `
        <th><img id="fotoProductoCarrito" src="${imagen}"</th>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio /cantidad}</td>
        <td>${precio}</td>
        <td>
        <button id="-${id}" class="btn btn-danger">-</button>
        <button id="+${id}" class="btn btn-success">+</button>
        </td>
        `

        listaCarrito.append(body);
        const btnSumar = document.getElementById(`+${id}`)
        const btnRestar = document.getElementById(`-${id}`);

        btnSumar.addEventListener("click", () => agregarCantidad(id));
        btnRestar.addEventListener("click", () => restarCantidad(id));
    });

    dibujarFooter();
}


const dibujarFooter = () => {

    if(carrito.length > 0){
        totalCarrito.innerHTML = "";
        let footer = document.createElement("tr");
        footer.innerHTML = `
        <th><b>Totales:</b></th>
        <td></td>
        <td>${generarTotales().cantidadTotal}</td>
        <td></td>
        <td>${generarTotales().costoTotal}</td>
        <td>
        <button id ="btnFinalizarCompra" class = "btn btn-comprar" >Comprar</button>
        </td>
        `
        totalCarrito.append(footer);
    }else {
        totalCarrito.innerHTML = " <h3>No hay productos en el carrito</h3>"
    }
}

const generarTotales = () => {

    const costoTotal = carrito.reduce((total,{precio}) => total + precio, 0);
    const cantidadTotal = carrito.reduce((total,{cantidad}) => total + cantidad,0);

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    };
}

const agregarCantidad = (id) => {
    const indexProducto = carrito.findIndex(producto => producto.id === id);
    const precio = carrito[indexProducto].precio / carrito[indexProducto].cantidad;

    carrito[indexProducto].cantidad++;
    carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad;

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    crearCarrito();
}

const restarCantidad = (id) => {
    const indexProducto = carrito.findIndex(producto => producto.id === id);
    const precio = carrito[indexProducto].precio / carrito[indexProducto].cantidad;

    carrito[indexProducto].cantidad--;
    carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad;

    if(carrito[indexProducto].cantidad == 0){
        carrito.splice(indexProducto,1);
    }
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    crearCarrito();
}