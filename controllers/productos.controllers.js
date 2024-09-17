import modelos from '../models/productos.models.js'

const getAll = async (req, res) => {

    try {
        const productos = await modelos.obtenerTodos()
        res.json({ productos })
    } catch (error) {
        console.log('[getAll]', error)
    }

}

const getOne = async(req, res) => {
    const id = req.params.id

    try {
        const producto = await modelos.obtenerUnProducto(id) 
        res.json(producto)
    } catch (error) {
        console.log('[getOne]', error)
    }

}

const create = async (req, res) => { 
    const producto = req.body
    //console.log(producto)

    try {
        const productoCreado = await modelos.crearProducto(producto)
        res.status(201).json( {
            producto: productoCreado
        })
    } catch (error) {
        console.log('[create]', error)
    }

}

const update = async (req, res) => { 
    const id = req.params.id
    const productoEditado = req.body

    try {
        const produtoActualizado = await modelos.updateProducto(id, productoEditado)
        res.send('Ok -> PUT (UPDATE)')
    } catch (error) {
        console.log('[update]', error)
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    
    try {
        const productoBorrado = await modelos.deleteProducto(id)
        console.log(productoBorrado)
        res.json({producto: productoBorrado})
    } catch (error) {
        console.log('[error]', error)
    }

}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}