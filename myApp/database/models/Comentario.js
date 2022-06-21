
module.exports = function (sequelize, dataTypes){

let alias = 'Comentario'; 

let cols = { //ol que tiene todas las columnas de la tabla 
        id: {
            autoIncrement: true, 
            primaryKey : true, 
            type: dataTypes.INTEGER, 
             },

        textoDeComentario: {
                type: dataTypes.STRING
            }, 
        idUsuario: {
                 type: dataTypes.INTEGER,
            },
        idProducto: {
                type: dataTypes.INTEGER,
          },

        createdAt: {
                type: dataTypes.DATE
            }, 

        updatedAt: {
                type: dataTypes.DATE
            }
        }; 

let config = {
    tableName: 'comentarios', //asi es como se llama en sql, esta bien?
    timestamps: true, 
    underscored: false, 
     }; 

     const Comentario = sequelize.define(alias, cols, config); 

    Comentario.associate = function (models){ 
        Comentario.belongsTo(models.Usuario, {
            as:"usuarioComentarios", //la relacion de usuario y comentario 
            foreignKey:"idUsuario"
        });
    
        Comentario.belongsTo(models.Producto, {
            as:"productoComentarios", //la relacion de producto y comentarios 
            foreignKey:"idProducto"
        });
    }

    
    return Comentario; 
}