-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isBlocked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isEmailverified" BOOLEAN NOT NULL DEFAULT false;