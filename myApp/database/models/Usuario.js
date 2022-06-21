module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario'; 
    
     let cols = { //ol que tiene todas las columnas de la tabla 
            id: {
                autoIncrement: true, 
                primaryKey : true, 
                type: dataTypes.INTEGER, 
                 },
    
            email:{
                type: dataTypes.STRING
                }, 
    
            usuario: {
                    type: dataTypes.STRING
                }, 
    
            contrasenia:{
                    type: dataTypes.STRING
                }, 
    
            fechaDeNacimiento:{
                    type: dataTypes.DATE
                }, 
    
            dni: {
                    type: dataTypes.INTEGER
                }, 
    
            fotoDePerfil:{
                    type: dataTypes.STRING
                }, 
    
            cantidadDeProducto:{
                    type: dataTypes.INTEGER
                },
                
            seguidores:{
                    type: dataTypes.INTEGER
                },
    
            comentarios:{
                    type: dataTypes.STRING
                },
    
            createdAt: {
                    type: dataTypes.DATE
                }, 
    
            updatedAt: {
                    type: dataTypes.DATE
                }
    
            };
    
    let config = {
            tableName: 'usuario', 
            timestamps: true, //Si la tabla tiene los campos CreatedAt y updatedAt
            underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
         }
    
         const Usuario = sequelize.define(alias, cols, config); 
         
        //UN USUARIO (1) PERTENECE A MUCHOS PRODUCTOS (N)
         Usuario.associate = function (models){ 
             Usuario.hasMany(models.Producto, {
                 as:"productoUsuario", //la relacion de usuario y producto 
                 foreignKey:"idUsuario"
             });

            Usuario.hasMany(models.Comentario, {
                as:"comentariosUsuario", //la relacion de usuario y comentario 
                foreignKey:"idUsuario"
            });

            Usuario.belongsToMany(models.Usuario, {
                as:"usuarioUsuario", 
                through: "seguidores", 
                foreignKey:"idUsuarioSeguidor", 
                otherKey: "idUsuarioSeguidor", 
                timestamps: true,
                underscored: false, 
            });

            }


         return Usuario; 
    }
