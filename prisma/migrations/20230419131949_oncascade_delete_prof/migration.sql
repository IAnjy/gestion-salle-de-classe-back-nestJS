-- DropForeignKey
ALTER TABLE "professeurs" DROP CONSTRAINT "professeurs_userId_fkey";

-- AddForeignKey
ALTER TABLE "professeurs" ADD CONSTRAINT "professeurs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
