const controlador ={
    producto: (req, res) => {
        res.render('product');
    },

    agregarProducto: (req, res)=>{
        res.render('product-add');
    },
}