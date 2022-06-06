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

    INSERT INTO `forever31_db`.`usuario` (`id`, `email`, `usuario`, `contrasenia`, `fechaDeNacimiento`, `dni`, `cantidadDeProducto`, `seguidores`, `comentarios`) VALUES ('1', 'pedritosanchez@hotmail.com', 'pedritos', '123456', '1970-06-21', '21521445', '21', '45', '9');
    INSERT INTO `forever31_db`.`usuario` (`id`, `email`, `usuario`, `contrasenia`, `fechaDeNacimiento`, `dni`, `cantidadDeProducto`, `seguidores`, `comentarios`) VALUES ('2', 'carlosbaute', 'cbaute', 'colgandodetusmanos', '1973', '23457904', '3', '687', '45');


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
    
  INSERT INTO `forever31_db`.`producto` (`id`, `nombre`, `descripcion`, `fechaDeCarga`) VALUES ( '1', 'tiburoncito', 'disfraz de tiburon', '2021-13-19');
  INSERT INTO `forever31_db`.`producto`  (`id`, `nombre` , `descripcion` , `fechaDeCarga`) VALUES ( '2', 'dinosaurio ',  'disfraz de dinosaurio', '2020-14-17');


    CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    textoDeComentario VARCHAR(200) NOT NULL, 
    
    id_usuario INT UNSIGNED NOT NULL,
    id_producto INT UNSIGNED NOT NULL,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_producto) REFERENCES producto(id)

    ); 

    INSERT INTO `forever31_db`.`comentarios` (`id`, `textoDeComentario`, `id_usuario`, `id_producto`)  VALUES ('1', 'muy muy bueno', '2', '1'); 
    INSERT INTO `forever31_db`.`comentarios` (`id`, `textoDeComentario`, `id_usuario`, `id_producto`)  VALUES ('2', 'excelente calidad, me siento una persona completamente nueva', '1', '2');

    
    CREATE TABLE seguidores (
    id_seguidores INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	id_usuario_seguidor INT UNSIGNED NOT NULL,
	id_usuario_seguido INT UNSIGNED NOT NULL,

    FOREIGN KEY (id_usuario_seguidor) REFERENCES usuario(id),
    FOREIGN KEY (id_usuario_seguido) REFERENCES usuario(id)
    ); 

    INSERT INTO `forever31_db`.`seguidores` (`id_seguidores`, `id_usuario_seguidor`, `id_usuario_seguido`) VALUES ('1', '1', '2');
    INSERT INTO `forever31_db`.`seguidores` (`id_seguidores`, `id_usuario_seguidor`, `id_usuario_seguido`) VALUES ('2', '2', '1');
