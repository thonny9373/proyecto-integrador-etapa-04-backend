import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        precio: {
            type: Number,
            required: true,
            min: 0
        },
        stock: {
            type: Number,
            required: true,
            min: 0
        },
        marca: {
            type: String,
            trim: true
        },
        categoria: {
            type: String,
            trim: true
        },
        detalles: {
            type: String,
            trim: true
        },
        foto: {
            type: String,
            trim: true
        },
        envio: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default ProductosEsquema;