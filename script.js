// Arrays para almacenar productos de compra y venta
let productosCompra = [];
let productosVenta = [];

// Función para obtener información de un producto
function obtenerInformacionProducto(tipo) {
  let nombre = prompt(`Ingresa el nombre del producto para ${tipo}:`);
  let precio = parseFloat(prompt(`Ingresa el precio del producto para ${tipo}:`));

  let producto = {
    nombre: nombre,
    precio: precio,
  };

  if (tipo === "compra") {
    productosCompra.push(producto);
  } else {
    productosVenta.push(producto);
  }

  console.log(`Producto agregado para ${tipo}:`, producto);
}

// Función para mostrar la información de los productos
function mostrarInformacionProductos() {
  console.log("Productos de compra:");
  productosCompra.forEach((producto, index) => {
    console.log(`Producto ${index + 1}:`, producto);
  });

  console.log("Productos de venta:");
  productosVenta.forEach((producto, index) => {
    console.log(`Producto ${index + 1}:`, producto);
  });
}

// Función para eliminar un producto
function eliminarProducto() {
  let tipo = prompt("¿Eliminar de compra o venta? (compra/venta)");
  let nombre = prompt("Ingresa el nombre del producto a eliminar:");

  let arrayProductos = tipo.toLowerCase() === "compra" ? productosCompra : productosVenta;

  let indice = arrayProductos.findIndex((producto) => producto.nombre.toLowerCase() === nombre.toLowerCase());

  if (indice !== -1) {
    arrayProductos.splice(indice, 1);
    console.log(`Producto "${nombre}" eliminado de ${tipo}.`);
  } else {
    console.log(`No se encontró el producto "${nombre}" en ${tipo}.`);
  }
}

// Bucle principal para interactuar con el usuario
let continuar = true;
while (continuar) {
  let opcion = prompt("¿Agregar, eliminar o mostrar productos? (agregar/eliminar/mostrar)");

  if (opcion.toLowerCase() === "agregar") {
    let tipo = prompt("¿Compra o venta? (compra/venta)");
    obtenerInformacionProducto(tipo.toLowerCase());
  } else if (opcion.toLowerCase() === "eliminar") {
    eliminarProducto();
  } else if (opcion.toLowerCase() === "mostrar") {
    mostrarInformacionProductos();
  } else {
    console.log("Opción no válida.");
  }

  continuar = confirm("¿Deseas realizar otra operación?");
}