const prisma = require("../database/dbclient");
const ErrorHandler = require("../utils/errorHandler");

const addPovertyDonation = async (data) => {
  const { userId, type, quantity, description, location } = data;
  console.log(data);
  const newPovertyDonation = await prisma.donation.create({
    data: {
      userId,
      type,
      quantity,
      description,
      location,
    },
  });
  // if (!newPovertyDonation) {
  //     throw new ErrorHandler(400, "Invalid data");
  // }
  // res.status(201).json({
  //     success: true,
  //     newPovertyDonation,
  // });

  return newPovertyDonation;
};

const getDonations = async () => {
  //findmany where type is poverty

  const donations = await prisma.donation.findMany({
    where:{
    OR: [
      {
        type: {
          equals: 'ONE_TIME_MONEY',
        },
      },
      { type: { equals: 'MONTHLY_MONEY' } },
    ],
  }
  });
  return donations;
};
const getDonationById = async (donationId) => {
  console.log("id: ",donationId);
  //convert string to number
  donationId = parseInt(donationId);
  const donation = await prisma.donation.findUnique({
      where: {
          id: donationId,
      },
  });
  return donation;
}
module.exports = {
  addPovertyDonation,
  getDonations,
  getDonationById

};
