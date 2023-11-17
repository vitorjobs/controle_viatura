-- CreateTable
CREATE TABLE "Viatura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "ano" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Viatura_placa_key" ON "Viatura"("placa");
