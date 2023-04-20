-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professeurs" (
    "id" SERIAL NOT NULL,
    "codeprof" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "professeurs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salles" (
    "id" SERIAL NOT NULL,
    "codesal" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "salles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "occuper" (
    "id" SERIAL NOT NULL,
    "prof" TEXT NOT NULL,
    "sal" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "occuper_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "professeurs_codeprof_key" ON "professeurs"("codeprof");

-- CreateIndex
CREATE UNIQUE INDEX "salles_codesal_key" ON "salles"("codesal");

-- CreateIndex
CREATE UNIQUE INDEX "occuper_prof_key" ON "occuper"("prof");

-- CreateIndex
CREATE UNIQUE INDEX "occuper_sal_key" ON "occuper"("sal");

-- AddForeignKey
ALTER TABLE "professeurs" ADD CONSTRAINT "professeurs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salles" ADD CONSTRAINT "salles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occuper" ADD CONSTRAINT "occuper_prof_fkey" FOREIGN KEY ("prof") REFERENCES "professeurs"("codeprof") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occuper" ADD CONSTRAINT "occuper_sal_fkey" FOREIGN KEY ("sal") REFERENCES "salles"("codesal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occuper" ADD CONSTRAINT "occuper_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
