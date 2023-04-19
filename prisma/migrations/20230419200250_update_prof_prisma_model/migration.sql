/*
  Warnings:

  - You are about to drop the column `userId` on the `professeurs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "professeurs" DROP CONSTRAINT "professeurs_userId_fkey";

-- AlterTable
ALTER TABLE "professeurs" DROP COLUMN "userId";
