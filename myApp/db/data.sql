/*este documento no hace nada, es solo para brian*/
CREATE SCHEMA forever31_db;

USE forever31_db; 

CREATE TABLE usuario (
    /*nombre columna.     TIPO DE DATO   CONSTRAIN */
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    email 				VARCHAR(60) 		 NOT NULL, 
    usuario 			VARCHAR(30)			 NOT NULL, 
    contrasenia 		VARCHAR(50) 		 NOT NULL, 
    fechaDeNacimiento	DATE 				 NOT NULL, 
    dni 				INT 				 NOT NULL, 
    fotoDePerfil 		VARCHAR(300) 				 , 
    cantidadDeProducto 	INT 						 , 
    seguidores			INT 				 NOT NULL, 
    comentarios 		VARCHAR(300) 			     
    
    ); 

    CREATE TABLE producto (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    imagen            VARCHAR(300)        NOT NULL,
    nombre            VARCHAR(45)         NOT NULL,
    descripcion       VARCHAR(200)        NOT NULL,
    fechaDeCarga      DATE                NOT NULL, 
    
	id_usuario INT UNSIGNED NOT NULL,
    /*FOREIGN KEY   (nombre de columna)  REFERENCES   nombredetabla(id)  */
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
    ); 
    
    CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    textoDeComentario VARCHAR(200) NOT NULL, 
    
    id_usuario INT UNSIGNED NOT NULL,
    id_producto INT UNSIGNED NOT NULL,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_producto) REFERENCES producto(id)

    ); 
    
    CREATE TABLE seguidores (
    id_seguidores INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	id_usuario_seguidor INT UNSIGNED NOT NULL,
	id_usuario_seguido INT UNSIGNED NOT NULL,

    FOREIGN KEY (id_usuario_seguidor) REFERENCES usuario(id),
    FOREIGN KEY (id_usuario_seguido) REFERENCES usuario(id)
    ); 