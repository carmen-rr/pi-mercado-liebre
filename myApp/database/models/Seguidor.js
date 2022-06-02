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
            timestamps: true, //Si la tabla tiene los campos created_at y updated_at
            underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
         }
    
         const Seguidor = sequelize.define(alias, cols, config); 

         Seguidor.associate = function (models){ 
            Seguidor.belongsToMany(models.Usuario, {
                as:"seguidores", 

                through: "seguidores", 

                foreignKey:"id_usuario_seguidor", 

                otherKey: "id_usuario_seguido", 

                timestamps: false
            });
        }}