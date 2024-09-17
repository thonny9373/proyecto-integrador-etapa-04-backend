import mongoose from "mongoose";

// ! Creamos esquema (La descripción de como va a ser nuestro documento)

const ProductosEsquema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
})

export default ProductosEsquema