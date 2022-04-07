const indexController = { 

    //RUTA DE INDEX 
    index: function(req, res) {
    return res.render('index', { title: 'Express' }); //se envian los productos de carpeta db 
      }, 

    //RUTA DE SEARCH 
    search:  function(req,res) {
        return res.render('search-results')
      } ,

    //RUTA DE LOGIN 
    login:  function (req,res){
        return res.render('login')
      }, 

    //RUTA DE REGISTER 
    register:  function (req,res){
        return res.render('register')
      }, 

}; 

module.exports = indexController; 