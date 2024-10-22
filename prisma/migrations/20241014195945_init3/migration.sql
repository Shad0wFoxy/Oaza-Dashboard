-- CreateTable
CREATE TABLE "Stats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);
