module.exports = function (sequelize, dataType){

    let alias = 'Seguidor'; 
    
     let cols = { //ol que tiene todas las columnas de la tabla 
            id: {
                autoIncrement: true, 
                primaryKey : true, 
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
            tableName: 'seguidores', 
            timestamps: true, 
            underscored: true, 
         }
    
         const Seguidor = sequelize.define(alias, cols, config); 

         Seguidor.associate = function (models){ 
            Seguidor.belongsToMany(models.Usuario, {
                as:"usuario_seguidores", 

                through: "seguidores", 

                foreignKey:"id_usuario_seguidor", 

                otherKey: "id_usuario_seguido", 

                timestamps: false
            });
        }}