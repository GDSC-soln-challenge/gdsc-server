const prisma = require("../database/dbclient");
const ErrorHandler = require("../utils/errorHandler");

const addHungerDonation = async (data) => {
  const { userId, type, quantity, description, location, organizations } = data;
  console.log(data);
  const newHungerDonation = await prisma.donation.create({
    data: {
      userId,
      type,
      quantity,
      description,
      location,
      organizations,
    },
  });
  if (!newHungerDonation) {
    throw new ErrorHandler(400, "Error while creating donation!");
  }
  return newHungerDonation;
};
const getHungerOrganizations = async () => {
  //get all organizations that are of type hunger

  const organizations = await prisma.donation.findMany({
    where: {
      type: "FOOD",
    },
    //select only the organization name from profile table
    select: {
      organization: true,
    },
  });
  if (!organizations) {
    throw new ErrorHandler(400, "Error while retrieving organizations!");
  }
  return organizations;
};

const getDonations = async () => {
  //findmany where type is poverty

  const donations = await prisma.donation.findMany({
    where: {
      OR: [
        {
          type: {
            equals: "FOOD",
          },
        },
        { type: { equals: "OTHER" } },
      ],
    },
  });
  return donations;
};
const getDonationById = async (donationId) => {
  console.log("id: ", donationId);
  //convert string to number
  donationId = parseInt(donationId);
  const donation = await prisma.donation.findUnique({
    where: {
      id: donationId,
    },
  });
  return donation;
};
module.exports = {
  addHungerDonation,
  getHungerOrganizations,
  getDonations,
  getDonationById,
};
