/*este documento no hace nada, es solo para brian*/

CREATE SCHEMA forever31_db;

USE forever31_db; 

CREATE TABLE usuario (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    email 				VARCHAR(60) 		 NOT NULL, 
    usuario 			VARCHAR(30)			 NOT NULL, 
    contrasenia 		VARCHAR(50) 		 NOT NULL, 
    fechaDeNacimiento	DATE 				 NOT NULL, 
    dni 				INT 				 NOT NULL, 
    fotoDePerfil 		VARCHAR(300) 				 , 
    cantidadDeProducto 	INT 						 , 
    seguidores			INT 				 NOT NULL, 
    comentarios 		INT, 			     
    created_at          DATE                NULL,
    updated_at          DATE                NULL
    ); 
   INSERT INTO `forever31_db`.`usuario`(email, usuario, contrasenia, fechaDeNacimiento, dni, fotoDePerfil , cantidadDeProducto, 
   seguidores, comentarios) VALUES 
   ( 'pedritosanchez@hotmail.com', 'pedritos', '123456', '1970-06-21', 21521445, 'usuario1.jpeg', 21, 45, 9);
    INSERT INTO `forever31_db`.`usuario` ( `email`, `usuario`, `contrasenia`, `fechaDeNacimiento`, `dni`, `fotoDePerfil` , `cantidadDeProducto`,
    `seguidores`, `comentarios`, `created_at`, `updated_at`) VALUES 
    ( 'carlosbaute', 'cbaute', 'colgandodetusmanos', '1970-06-21', '23457904', 'usuario2.jpeg', '3', '687', '45',null,null);


    CREATE TABLE producto (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    imagen            VARCHAR(300)        NOT NULL,
    nombre            VARCHAR(45)         NOT NULL,
    descripcion       VARCHAR(200)        NOT NULL,
    created_at        DATE                NULL,
    updated_at        DATE                NULL, 
    
	id_usuario INT UNSIGNED NOT NULL,
    /*FOREIGN KEY   (nombre de columna)  REFERENCES   nombredetabla(id)  */
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
    ); 
    
  INSERT INTO `forever31_db`.`producto` (`imagen`, `nombre`, `descripcion`, `id_usuario`, `created_at`, `updated_at`) VALUES 
  ( 'tiburon1.jpeg', 'Tiburón', 'Disfraz de Tiburón para adultos', 1,'2022-04-04', null);
  INSERT INTO `forever31_db`.`producto`  (`imagen`, `nombre` , `descripcion` , `id_usuario`,`created_at`, `updated_at` ) VALUES ( 'dino1.jpeg', 'Dinosaurio ',  'Disfraz de dinosaurio para adultos' ,1, '2022-03-05', null);
  INSERT INTO `forever31_db`.`producto` (`imagen`, `nombre`, `descripcion`, `id_usuario`, `created_at`, `updated_at`) VALUES ( 'panchito1.jpeg', 'Pancho', 'Disfraz de pancho (Hot Dog) para perros',2, '2022-09-16', null);
  INSERT INTO `forever31_db`.`producto`  (`imagen`, `nombre`, `descripcion`, `id_usuario`,`created_at`, `updated_at` ) VALUES ( 'sportacus1.jpeg', 'Sportacus ',  'Disfraz de Sportacus (Lazy Town) para adultos', 1, '2022-05-02', null);
  INSERT INTO `forever31_db`.`producto` (`imagen`, `nombre`, `descripcion`, `id_usuario`, `created_at`, `updated_at`) VALUES ( 'caballo1.jpeg', 'Caballo', 'Disfraz de Caballo para adultos',1,  '2022-09-03', null);
  INSERT INTO `forever31_db`.`producto`  (`imagen`, `nombre`, `descripcion`, `id_usuario`,`created_at`, `updated_at` ) VALUES ( 'banana1.jpeg', 'Banana ',  'Disfraz de Banana para adultos',1, '2020-08-17', null);
  INSERT INTO `forever31_db`.`producto` (`imagen`, `nombre`, `descripcion`,  `id_usuario`, `created_at`, `updated_at`) VALUES ( 'yoda1.jpeg', 'Baby Yoda', 'Disfraz de Baby Yoda para niños bonitos y gprditos',1,  '2022-11-08', null);
  INSERT INTO `forever31_db`.`producto`  (`imagen`, `nombre`, `descripcion` , `id_usuario`,`created_at`, `updated_at` ) VALUES ( 'bob1.jpeg', 'Bob Esponja ',  'Disfraz de Bob Esponja para adultos', 1, '2022-01-02', null);
  INSERT INTO `forever31_db`.`producto` (`imagen`, `nombre`, `descripcion`, `id_usuario`, `created_at`, `updated_at`) VALUES ( 'alien1.jpeg', 'Alien', 'Disfraz de Alien para adultos',1,  '2022-04-08', null);
  INSERT INTO `forever31_db`.`producto`  (`imagen`, `nombre` , `descripcion` , `id_usuario`,`created_at`, `updated_at` ) VALUES ( 'buzz1.jpeg', 'Buzz Light Year ',  'Disfraz de Buzz Light Year (Toy Story) para adultos',1,  '2022-12-21', null);

    CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    textoDeComentario VARCHAR(200) NOT NULL, 
    
    id_usuario INT UNSIGNED NOT NULL,
    id_producto INT UNSIGNED NOT NULL,
    created_at        DATE                NULL,
    updated_at        DATE                NULL, 
    

    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_producto) REFERENCES producto(id)

    ); 

    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES
    ('¡Me encanto este disfraz! ¡Solo lo encontre aquí! Es un increíble negocio de disfraces, yo diría único', 2, '1',
    '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`, `created_at`, `updated_at`)  VALUES('Lo recomiendo muchísimo, además me encanta su sitio web, fácil de usar, atractivo y con amplia variedad! ', '1', '2', '2021-09-14',null);
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('La calidad de los disfraces es muy buena. Del estudio de mercado que hice, probablemente sea el mejor lugar de los que vi.', '2', '1', '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('Lo recomiendo mucho, cuando necesito un disfraz siempre acudo a Forever 31', '2', '1', '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('¡Muy buen disfraz, mucha variedad y excelente calidad!', '2', '1', '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('Que buen disfraz! Una compra de 10 ;)', '2', '1', '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('La compra llego en impecable estado! Sumamente recomendado', '2', '1', '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('Nuevamente, vuelvo a elegir Forever 31', '2', '1', '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('¡Me encanto, recomiendo!', '2', '1', '2022-05-18',null); 
    INSERT INTO `forever31_db`.`comentarios` ( `textoDeComentario`, `id_usuario`, `id_producto`,`created_at`, `updated_at`)  VALUES ('Que buen disfraz! Una compra de 10 ', '2', '1', '2022-05-18',null); 

    
    CREATE TABLE seguidores (
    id_seguidores INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	id_usuario_seguidor INT UNSIGNED NOT NULL,
	id_usuario_seguido INT UNSIGNED NOT NULL,

    

    FOREIGN KEY (id_usuario_seguidor) REFERENCES usuario(id),
    FOREIGN KEY (id_usuario_seguido) REFERENCES usuario(id)
    ); 

    INSERT INTO `forever31_db`.`seguidores` (`id_seguidores`, `id_usuario_seguidor`, `id_usuario_seguido`) VALUES ('1', '1', '2');
    INSERT INTO `forever31_db`.`seguidores` (`id_seguidores`, `id_usuario_seguidor`, `id_usuario_seguido`) VALUES ('2', '2', '1');
