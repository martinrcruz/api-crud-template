//Rutas para producto
const express = require('express');
const router = express.Router();


//Importamos el controlador
const productoController = require('../controllers/productoController')
//Y le damos una ruta, que importamos desde productoController
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);




//Para usarlo desde otros archivos lo exportamos
module.exports = router;