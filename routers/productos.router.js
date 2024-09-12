import express from 'express'
const routerProductos = express.Router()

/* ------------------------------------------------------- */
/* CRUD -> CREATE | READ | UPDATE | DELETE                 */
/* ------------------------------------------------------- */
// ! GET ALL (READ) -> Request de todos los productos

routerProductos.get('/', (req, res) => {
    res.send('Ok -> GET ALL (READ)')
})

// ! GET ONE (READ) -> Request de un producto -> tiene que recibir el id del producto en los parametros
routerProductos.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> GET ONE (READ)')
})

// ! POST (CREATE) -> Request de creacion de un producto
// http://localhost:8080/api/v1/productos | el producto nuevo
routerProductos.post('/', (req, res) => { 
    const producto = req.body
    console.log(producto)
    res.status(201).send('Ok -> POST (CREATE)')
}) 
// ! PUT (UPDATE) -> Request de actualización de un producto
// http://localhost:8080/api/v1/productos/{id} | el producto editado
routerProductos.put('/:id', (req, res) => { 
    const id = req.params.id
    console.log(id)
    const productoEditado = req.body
    console.log(productoEditado)
    res.send('Ok -> PUT (UPDATE)')
}) 

// ! DELETE (DELETE) -> Request de borrado de un producto
routerProductos.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> DELETE (DELETE)')
})

export default routerProductos