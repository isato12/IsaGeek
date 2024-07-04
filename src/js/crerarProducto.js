import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

/**
 * Crea un nuevo video al enviar el formulario.
 * @param {Event} evento - El evento de envío del formulario.
 */

async function crearProducto(evento) {
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const producto = document.querySelector("[data-producto]").value;
    const precio = Number(document.querySelector("[data-precio]").value);
    // const id = document.querySelector("[data-id]");
    

    await conectaAPI.crearProducto(imagen,producto, precio);
    console.log("producto creado correctamente");
    // window.location.href = "../pages/envio-concluido.html";



}

formulario.addEventListener("submit", (evento) => crearProducto(evento));

