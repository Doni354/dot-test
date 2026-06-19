CREATE TABLE `dispen`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `alasan` varchar(255) NULL,
  `id_user` int NOT NULL,
  `status` varchar(255) NULL,
  `created_at` datetime NULL,
  `created_by` varchar(255) NULL,
  `updated_at` datetime NULL,
  `updated_by` varchar(255) NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `kelas` varchar(255) NULL,
  `created_at` datetime NULL,
  `created_by` varchar(255) NULL,
  `updated_at` datetime NULL,
  `updated_by` varchar(255) NULL,
  `role` varchar(255) NULL,
  `email` varchar(255) NULL,
  `pass` varchar(255) NULL,
  PRIMARY KEY (`id` DESC)
);

ALTER TABLE `dispen` ADD CONSTRAINT `fk_dispen_user_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

