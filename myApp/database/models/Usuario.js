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
    
            created_at: {
                    type: dataTypes.DATE
                }, 
    
            updated_at: {
                    type: dataTypes.DATE
                }
    
            };
    
    let config = {
            tableName: 'usuario', 
            timestamps: true, //Si la tabla tiene los campos created_at y updated_at
            underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
         }
    
         const Usuario = sequelize.define(alias, cols, config); 
         
        //UN USUARIO (1) PERTENECE A MUCHOS PRODUCTOS (N)
         Usuario.associate = function (models){ 
             Usuario.hasMany(models.Producto, {
                 as:"producto_usuario", //la relacion de usuario y producto 
                 foreignKey:"id_usuario"
             });}

         Usuario.associate = function (models){ 
            Usuario.hasMany(models.Comentario, {
                as:"comentarios_usuario", //la relacion de usuario y comentario 
                foreignKey:"id_usuario"
                });}

        Usuario.associate = function (models){ 
            Usuario.belongsToMany(models.Usuario, {
                as:"usuario_usuario", 

                through: "seguidores", 

                foreignKey:"id_usuario_seguidor", 

                otherKey: "id_usuario_seguido", 

                timestamps: true,
                underscored: true, 
            });
        }

         return Usuario; 
    }
