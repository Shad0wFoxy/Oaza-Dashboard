-- CreateTable
CREATE TABLE "Participants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participants_pkey" PRIMARY KEY ("id")
);
