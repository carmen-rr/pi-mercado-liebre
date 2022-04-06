const userController = { //idem. la variable va const o conviene let?

    //RUTA DE USER ---> este viene automatico, lo agrego tambien no?
    /*user: function(req, res, next) {
        return res.render('respond with a resource');
      } ,*/

    //RUTA DE PROFILE 
    profile: function(req,res){
        return res.render('profile')
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){
        return res.render('profile-edit')
      }, 

}; 

module.exports = userController  //aca hay un problema con la exportacion no?
