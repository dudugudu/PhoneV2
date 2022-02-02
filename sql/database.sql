CREATE TABLE `chat_group` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`contain_message` INT(10) NOT NULL DEFAULT '0',
	`last_message` LONGTEXT NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`last_number` VARCHAR(15) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`participants` LONGTEXT NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`profile_group` LONGTEXT NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;