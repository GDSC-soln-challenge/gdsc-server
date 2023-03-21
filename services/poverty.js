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

const getAllDonations = async () => {
  const allDonations = await prisma.donation.findMany({
    include: {
      user: true,
    },
  });
  return allDonations;
}

module.exports = {
  addPovertyDonation,
  getAllDonations,
};
