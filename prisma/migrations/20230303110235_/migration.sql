-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_recieverId_fkey";

-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "type" SET DEFAULT 'OTHER';
ALTER TABLE "Donation" ALTER COLUMN "recieverId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "Reciever"("id") ON DELETE SET NULL ON UPDATE CASCADE;
