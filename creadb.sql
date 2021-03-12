/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     11/03/2021 6:51:31 p. m.                     */
/*==============================================================*/


drop table if exists ACTIVIDAD;

drop table if exists CALIFICACION;

drop table if exists CURSO;

drop table if exists ESTUDIANTE;

drop table if exists ESTUDIANTE_CURSO;

drop table if exists PROFESOR;

/*==============================================================*/
/* Table: ACTIVIDAD                                             */
/*==============================================================*/
create table ACTIVIDAD
(
   ID_ACTIVIDAD         int not null,
   ID_CURSO             int not null,
   DESCRIPCION          varchar(100) not null,
   FECHA                date not null,
   primary key (ID_ACTIVIDAD)
);

/*==============================================================*/
/* Table: CALIFICACION                                          */
/*==============================================================*/
create table CALIFICACION
(
   ID_ESTUDIANTE        varchar(20) not null,
   ID_CURSO             int not null,
   VALOR                float not null
);

/*==============================================================*/
/* Table: CURSO                                                 */
/*==============================================================*/
create table CURSO
(
   ID_CURSO             int not null,
   ID_PROFESOR          varchar(20) not null,
   NOMBRE_CURSO         varchar(50) not null,
   DURACION             int not null,
   DETALLES             varchar(100) not null,
   primary key (ID_CURSO)
);

/*==============================================================*/
/* Table: ESTUDIANTE                                            */
/*==============================================================*/
create table ESTUDIANTE
(
   ID_ESTUDIANTE        varchar(20) not null,
   NOMBRES_ESTUDIANTE   varchar(50) not null,
   APELLIDOS_ESTUDIANTE varchar(50) not null,
   CORREO_ESTUDIANTE    varchar(50) not null,
   CONTRASENIA_ESTUDIANTE varchar(50) not null,
   primary key (ID_ESTUDIANTE)
);

/*==============================================================*/
/* Table: ESTUDIANTE_CURSO                                      */
/*==============================================================*/
create table ESTUDIANTE_CURSO
(
   ID_CURSO             int not null,
   ID_ESTUDIANTE        varchar(20) not null
);

/*==============================================================*/
/* Table: PROFESOR                                              */
/*==============================================================*/
create table PROFESOR
(
   ID_PROFESOR          varchar(20) not null,
   NOMBRES_PROFESOR     varchar(50) not null,
   APELLIDOS_PROFESOR   varchar(50) not null,
   CORREO_PROFESOR      varchar(50) not null,
   CONTRASENIA_PROFESOR varchar(50) not null,
   primary key (ID_PROFESOR)
);

alter table ACTIVIDAD add constraint FK_RELATIONSHIP_3 foreign key (ID_CURSO)
      references CURSO (ID_CURSO) on delete restrict on update restrict;

alter table CALIFICACION add constraint FK_RELATIONSHIP_5 foreign key (ID_ESTUDIANTE)
      references ESTUDIANTE (ID_ESTUDIANTE) on delete restrict on update restrict;

alter table CALIFICACION add constraint FK_RELATIONSHIP_6 foreign key (ID_CURSO)
      references CURSO (ID_CURSO) on delete restrict on update restrict;

alter table CURSO add constraint FK_RELATIONSHIP_1 foreign key (ID_PROFESOR)
      references PROFESOR (ID_PROFESOR) on delete restrict on update restrict;

alter table ESTUDIANTE_CURSO add constraint FK_RELATIONSHIP_7 foreign key (ID_ESTUDIANTE)
      references ESTUDIANTE (ID_ESTUDIANTE) on delete restrict on update restrict;

alter table ESTUDIANTE_CURSO add constraint FK_RELATIONSHIP_8 foreign key (ID_CURSO)
      references CURSO (ID_CURSO) on delete restrict on update restrict;

