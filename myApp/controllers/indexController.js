const indexController = { //la variable va const o conviene let?

    //RUTA DE INDEX 
    /*index: function(req, res, next) {
    return res.render('index', { title: 'Express' });} */

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

module.exports = indexController // idem aca hay un problema con la exportacion no?