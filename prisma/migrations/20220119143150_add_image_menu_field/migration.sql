/*
  Warnings:

  - Added the required column `image` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Menu` ADD COLUMN `image` VARCHAR(191) NOT NULL;
