-- CreateTable
CREATE TABLE "salles" (
    "id" SERIAL NOT NULL,
    "codesal" TEXT NOT NULL,
    "designation" TEXT NOT NULL,

    CONSTRAINT "salles_pkey" PRIMARY KEY ("id")
);
