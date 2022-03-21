const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        let producto;

        //Creamos el producto pasandole el body de nuestro request
        producto = new Producto(req.body);
        await producto.save();

        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}


exports.obtenerProductos = async (req, res) => {
    try {
        //Usamos el metodo predefinido de la clase Producto (.find()) para obtener los resultados.
        const productos = await Producto.find();
        res.json(productos);



    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema");
    }
}

exports.actualizarProducto = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'El producto no existe!' })
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema");
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        //Usamos el metodo predefinido de la clase Producto (.find()) para obtener los resultados.
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'El producto no existe!' })
        }
        res.json(producto);



    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema");
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        //Usamos el metodo predefinido de la clase Producto (.find()) para obtener los resultados.
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'El producto no existe!' })
        }
        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({ msg: 'Producto eliminado con exito' })



    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema");
    }
}