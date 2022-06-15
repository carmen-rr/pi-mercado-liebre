
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

        id_usuario: {
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
        tableName: 'producto',
        timestamps: true,
        underscored: true,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario_producto", //la relacion de usuario y producto 
            foreignKey: "id_usuario"
        });
    }

    Producto.associate = function (models) {
        Producto.hasMany(models.Comentario, {
            as: "comentario_producto", //la relacion de producto y comentarios 
            foreignKey: "id_producto"
        });
    }

    return Producto;
}



