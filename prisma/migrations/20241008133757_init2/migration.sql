-- CreateTable
CREATE TABLE "Payments" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);
