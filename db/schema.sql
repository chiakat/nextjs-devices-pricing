-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` MEDIUMTEXT NULL DEFAULT NULL,
  `email` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'team'
--
-- ---

DROP TABLE IF EXISTS `team`;

CREATE TABLE `team` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users (owner)` INTEGER NULL DEFAULT NULL COMMENT 'owner',
  `name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'project'
--
-- ---

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `id_team` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'device'
--
-- ---

DROP TABLE IF EXISTS `device`;

CREATE TABLE `device` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `location` VARCHAR NULL DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL COMMENT 'Owner',
  `id_project` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users_team'
--
-- ---

DROP TABLE IF EXISTS `users_team`;

CREATE TABLE `users_team` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_team` INTEGER NULL DEFAULT NULL,
  `id_users (member)` INTEGER NULL DEFAULT NULL COMMENT 'member',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'model'
--
-- ---

DROP TABLE IF EXISTS `model`;

CREATE TABLE `model` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_project` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'app'
--
-- ---

DROP TABLE IF EXISTS `app`;

CREATE TABLE `app` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_project` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'collaborator'
--
-- ---

DROP TABLE IF EXISTS `collaborator`;

CREATE TABLE `collaborator` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL COMMENT 'must be member of the team',
  `id_project` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `team` ADD FOREIGN KEY (id_users (owner)) REFERENCES `users` (`id`);
ALTER TABLE `project` ADD FOREIGN KEY (id_team) REFERENCES `team` (`id`);
ALTER TABLE `device` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `device` ADD FOREIGN KEY (id_project) REFERENCES `project` (`id`);
ALTER TABLE `users_team` ADD FOREIGN KEY (id_team) REFERENCES `team` (`id`);
ALTER TABLE `users_team` ADD FOREIGN KEY (id_users (member)) REFERENCES `users` (`id`);
ALTER TABLE `model` ADD FOREIGN KEY (id_project) REFERENCES `project` (`id`);
ALTER TABLE `app` ADD FOREIGN KEY (id_project) REFERENCES `project` (`id`);
ALTER TABLE `collaborator` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `collaborator` ADD FOREIGN KEY (id_project) REFERENCES `project` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `team` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `project` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `device` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_team` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `model` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `app` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `collaborator` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`name`,`email`) VALUES
-- ('','','');
-- INSERT INTO `team` (`id`,`id_users (owner)`,`name`) VALUES
-- ('','','');
-- INSERT INTO `project` (`id`,`name`,`id_team`) VALUES
-- ('','','');
-- INSERT INTO `device` (`id`,`name`,`location`,`id_users`,`id_project`) VALUES
-- ('','','','','');
-- INSERT INTO `users_team` (`id`,`id_team`,`id_users (member)`) VALUES
-- ('','','');
-- INSERT INTO `model` (`id`,`id_project`,`name`) VALUES
-- ('','','');
-- INSERT INTO `app` (`id`,`id_project`,`name`) VALUES
-- ('','','');
-- INSERT INTO `collaborator` (`id`,`id_users`,`id_project`) VALUES
-- ('','','');