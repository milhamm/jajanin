-- DropIndex
DROP INDEX `Store_store_name_address_idx` ON `Store`;

-- CreateIndex
CREATE INDEX `Store_store_name_idx` ON `Store`(`store_name`);

-- CreateIndex
CREATE INDEX `Store_store_name_address_idx` ON `Store`(`store_name`, `address`);
