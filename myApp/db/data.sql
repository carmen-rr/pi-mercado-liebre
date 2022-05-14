/*este documento no hace nada, es solo para brian*/

USE catalogo; 

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
comentarios 		VARCHAR(300) 			     , 

); 

CREATE TABLE producto (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
imagen            VARCHAR(300)        NOT NULL,
nombre            VARCHAR(45)         NOT NULL,
descripcion       VARCHAR(200)        NOT NULL,
fechaDeCarga      DATE                NOT NULL,
); 

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
nombreDeUsuario    VARCHAR(30)       NOT NULL,
textoDeComentario  VARCHAR(100)      NOT NULL,
imagenDePerfil     VARCHAR(300)      NOT NULL,
  
); 