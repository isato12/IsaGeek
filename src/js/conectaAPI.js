
//comentarios generados por ia
/**
 * Obtiene una lista de productos desde la API.
 * @returns {Promise<Array>} Una lista de objetos de producto.
 */

async function listaProductos() {
    try {
        const response = await fetch("http://localhost:3001/productos", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });

        const productos = await response.json();
        console.log(productos)
        return productos;
    } catch (error) {
        console.error("Error al obtener la lista de videos:", error);
        return []; // Devuelve una lista vacía en caso de error.
    }
    
}

/**
 * Crea un nuevo producto en la API.
 * @param {string} producto - El producto.
 * @param {number} precio - el precio.
 * @param {string} imagen - La URL de la imagen asociada al producto.
 * @returns {Promise<Object>} El objeto del video creado.
 */
async function crearProducto(imagen, producto, precio) {
    try {
        const response = await fetch("http://localhost:3001/productos", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                
                // id: id,
                imagen: imagen,
                producto: producto,
                precio: `${precio}`
            }),
        });

        const productoCreado = await response.json();
        return productoCreado;
    } catch (error) {
        console.error("Error al crear el video:", error);
        return null; // Devuelve null en caso de error.
    }
}


export const conectaAPI = {
    listaProductos,
    crearProducto,
    // buscarProductos,
};


// /**
//  * Busca videos en la API por palabra clave.
//  * @param {string} palabraClave - La palabra clave para la búsqueda.
//  * @returns {Promise<Array>} Una lista de videos que coinciden con la palabra clave.
//  */
// async function buscarProductos(palabraClave) {
//     try {
//         const response = await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
//         const productosEncontrados = await response.json();
//         return productosEncontrados;
//     } catch (error) {
//         console.error("Error al buscar productos:", error);
//         return []; // Devuelve una lista vacía en caso de error.
//     }
// }
