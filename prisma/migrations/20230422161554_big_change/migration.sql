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
    "username" TEXT NOT NULL,

    CONSTRAINT "professeurs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salles" (
    "id" SERIAL NOT NULL,
    "codesal" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "salles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "occuper" (
    "id" SERIAL NOT NULL,
    "codeprof" TEXT NOT NULL,
    "codesal" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "occuper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professeur_audit" (
    "id" SERIAL NOT NULL,
    "type_operation" TEXT NOT NULL,
    "utilisateur" TEXT,
    "old_codeprof" TEXT,
    "old_nom" TEXT,
    "old_prenom" TEXT,
    "old_grade" TEXT,
    "new_codeprof" TEXT,
    "new_nom" TEXT,
    "new_prenom" TEXT,
    "new_grade" TEXT,
    "date_maj" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professeur_audit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salle_audit" (
    "id" SERIAL NOT NULL,
    "type_operation" TEXT NOT NULL,
    "utilisateur" TEXT,
    "old_codesal" TEXT,
    "old_designation" TEXT,
    "new_codesal" TEXT,
    "new_designation" TEXT,
    "date_maj" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salle_audit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "occuper_audit" (
    "id" SERIAL NOT NULL,
    "type_operation" TEXT NOT NULL,
    "utilisateur" TEXT,
    "old_prof" TEXT,
    "old_sal" TEXT,
    "old_date" TEXT,
    "new_prof" INTEGER,
    "new_sal" INTEGER,
    "new_date" TEXT,
    "date_maj" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "occuper_audit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "professeurs_codeprof_key" ON "professeurs"("codeprof");

-- CreateIndex
CREATE UNIQUE INDEX "salles_codesal_key" ON "salles"("codesal");

-- AddForeignKey
ALTER TABLE "professeurs" ADD CONSTRAINT "professeurs_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salles" ADD CONSTRAINT "salles_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occuper" ADD CONSTRAINT "occuper_codeprof_fkey" FOREIGN KEY ("codeprof") REFERENCES "professeurs"("codeprof") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occuper" ADD CONSTRAINT "occuper_codesal_fkey" FOREIGN KEY ("codesal") REFERENCES "salles"("codesal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occuper" ADD CONSTRAINT "occuper_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;
