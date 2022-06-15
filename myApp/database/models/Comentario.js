
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
         id_usuario: {
                 type: dataTypes.INTEGER,
            },
        id_producto: {
                type: dataTypes.INTEGER,
          },

        created_at: {
                type: dataTypes.DATE
            }, 

        updated_at: {
                type: dataTypes.DATE
            }
        }; 

let config = {
    tableName: 'comentarios', //asi es como se llama en sql, esta bien?
    timestamps: true, 
    underscored: true, 
     }; 

     const Comentario = sequelize.define(alias, cols, config); 

    Comentario.associate = function (models){ 
        Comentario.belongsTo(models.Usuario, {
            as:"usuario_comentarios", //la relacion de usuario y comentario 
            foreignKey:"id_usuario"
        });}

    Comentario.associate = function (models){ 
        Comentario.belongsTo(models.Producto, {
            as:"producto_comentarios", //la relacion de producto y comentarios 
            foreignKey:"id_producto"
        });}

    return Comentario; 
}