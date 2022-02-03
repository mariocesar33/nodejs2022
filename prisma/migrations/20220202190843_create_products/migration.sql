-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "productname" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_productname_key" ON "products"("productname");
