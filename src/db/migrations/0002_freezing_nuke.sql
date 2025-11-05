PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_book` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`published_date` integer NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_book`("id", "title", "author", "published_date", "created_at", "updated_at") SELECT "id", "title", "author", "published_date", "created_at", "updated_at" FROM `book`;--> statement-breakpoint
DROP TABLE `book`;--> statement-breakpoint
ALTER TABLE `__new_book` RENAME TO `book`;--> statement-breakpoint
PRAGMA foreign_keys=ON;