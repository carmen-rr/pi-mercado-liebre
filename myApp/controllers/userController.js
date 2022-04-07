const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){
        return res.render('profile')
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){
        return res.render('profile-edit')
      }, 

}; 

module.exports = userController; 
