/*
  Warnings:

  - A unique constraint covering the columns `[store_name]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_number]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Store_slug_phone_number_key` ON `store`;

-- CreateIndex
CREATE UNIQUE INDEX `Store_store_name_key` ON `Store`(`store_name`);

-- CreateIndex
CREATE UNIQUE INDEX `Store_phone_number_key` ON `Store`(`phone_number`);

-- CreateIndex
CREATE UNIQUE INDEX `Store_slug_key` ON `Store`(`slug`);
