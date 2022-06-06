
module.exports = function (sequelize, dataType){

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