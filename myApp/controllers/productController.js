const productController ={
    //RUTA PRODUCT
    producto: (req, res) => {
        res.render('product');
    },

    //RUTA PRODUCT-ADD
    agregarProducto: (req, res)=>{
        res.render('product-add'); //acá lo estoy conectando con las vistas
    },
}

module.exports = productController