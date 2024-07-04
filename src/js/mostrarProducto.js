import { conectaAPI } from "./conectaAPI.js";
// import { eliminaProducto } from "./eliminarProducto.js";

// Selecciona el elemento de la lista donde se mostrarán los productos.
const articulos = document.querySelector("[data-productos]");

/**
 * Construye un elemento de video (tarjeta) con los datos proporcionados.
 * @param {string} producto - El producto.
 * @param {number} precio - el precio.
 * @param {string} imagen - La URL de la imagen asociada al producto.
 * @returns {Promise<Object>} El objeto del video creado.
 * @returns {HTMLLIElement} El elemento de video construido.
 */
export default function construyeCard(imagen, producto, precio) {
  const articulo = document.createElement("article");
  articulo.className = "articulo";

  articulo.innerHTML = `
        
              <div class="caja__img">
                <img src="${imagen}" alt="imagen de ${producto}">
              </div>
              <div class="encabezado">
                <h2>${producto}</h2>
              </div>
              <div class="pie">
                <p>$${precio}</p>
                <button><img src="/src/assets/img/bote-de-basura.png" alt="eliminar" id="eliminar" data-id="id"></button>
              </div>`;

  // const botonEliminar = articulo.querySelector("#eliminar");
  // botonEliminar.dataset.id = id; // Asigna el ID al botón
  // botonEliminar.addEventListener("click", () => eliminaProducto(id));
  return articulo;
}

/**
 * Obtiene la articulos de productos desde la API y construye las tarjetas correspondientes.
 */
async function listaProductos() {
  try {
    const listaAPI = await conectaAPI.listaProductos();
    listaAPI.forEach((element) =>
      articulos.appendChild(construyeCard(element.imagen, element.producto, element.precio,))
    );
  } catch (error) {
    console.error("Error al obtener la lista de productos:", error);
    // Puedes manejar el error aquí según tus necesidades.
  }
}

// Llama a la función para construir la lista de productos.s
listaProductos();
