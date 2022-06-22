module.exports = function (sequelize, dataTypes){

    let alias = 'Seguir'; 
    
     let cols = { //ol que tiene todas las columnas de la tabla 
            id: {
                autoIncrement: true, 
                primaryKey : true, 
                type: dataTypes.INTEGER, 
                 },
    
            idUsuarioSeguidor: {
                type: dataTypes.INTEGER,
                }, 
    
            idUsuarioSeguido:{
                type: dataTypes.INTEGER
            }, 
            };
    
    let config = {
            tableName: 'seguidores', 
            timestamps: false, //Si la tabla tiene los campos CreatedAt y updatedAt
            underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
         }

    const Seguir = sequelize.define(alias, cols, config); 

         return Seguir; 
    }

    