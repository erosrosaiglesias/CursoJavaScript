
function Comprar(){

class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(nombreProducto, precioProducto) {
        this.productos.push({id:this.generarId(), nombre:nombreProducto, precio:precioProducto})
    }

    totalProductos() {
        return this.productos.length
    }

    sumaTotal() {
        return this.productos.reduce((total, item) => total += item.precio, 0)
    }

    generarId() {
        let max = 0
        this.productos.forEach(item => {
            if (item.id > max) {
                max = item.id
            }
        })

        return max + 1
    }

    listarProductos() {
        let contenido = "Productos agregados:\n\n"

        this.productos.forEach(item => {
            contenido += `${item.id} - ${item.nombre} $${item.precio}\n` 
        })

        return contenido
    }
}

let nombre = ""
let precio = 0
const carrito = new Carrito()

while (nombre.toLocaleUpperCase() != "PRODUCTOS") {
    nombre = prompt("Ingrese el Nombre del Producto:\n(ESCRIBA PRODUCTOS PAR VER LOS INGRESADOS)")
    
    if (nombre.toLocaleUpperCase() == "PRODUCTOS") {
        break;
    }
    
    precio = parseFloat(prompt("Ingrese el Precio del Producto:"))
    carrito.agregarProducto(nombre, precio)
}

if (carrito.totalProductos() > 0) {
    alert(`${carrito.listarProductos()}\nTotal a Pagar: $${carrito.sumaTotal()}`)
} else {
    alert("No se encontraron Productos agregados en el Carrito!")
}

}

        let btnComprar = document.getElementById("btnComprar");
        btnComprar.addEventListener("click", Comprar)