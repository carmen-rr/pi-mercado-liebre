
module.exports = function (sequelize, dataTypes) {

    let alias = "Producto";

    let cols = { //ol que tiene todas las columnas de la tabla 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        imagen: {
            type: dataTypes.STRING
        },

        nombre: {
            type: dataTypes.STRING
        },

        descripcion: {
            type: dataTypes.STRING
        },

        idUsuario: {
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
        tableName: 'producto',
        timestamps: true,
        underscored: false,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuarioProducto", //la relacion de usuario y producto 
            foreignKey: "idUsuario"
        });

        Producto.hasMany(models.Comentario, {
            as: "comentarioProducto", //la relacion de producto y comentarios 
            foreignKey: "idProducto"
        });
    }



    return Producto;
}



