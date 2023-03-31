const prisma = require("../database/dbclient");
const ErrorHandler = require("../utils/errorHandler");

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

const addUser = async (data) => {
  const { name, email, password, role } = data;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
      role,
    },
  });
  return newUser;
};

const updateUser = async (id, data) => {
  const { name, email, password, role } = data;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
      password,
      role,
    },
  });
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return deletedUser;
};

const getAllDonations = async () => {
  const donations = await prisma.donation.findMany();
  return donations;
};

const getDonationById = async (id) => {
  const donation = await prisma.donation.findUnique({
    where: {
      id: id,
    },
  });
  return donation;
};

const addDonation = async (data) => {
  const { userId, type, quantity, description, location } = data;
  const newDonation = await prisma.donation.create({
    data: {
      userId,
      type,
      quantity,
      description,
      location,
    },
  });
  return newDonation;
};

const updateDonation = async (id, data) => {
  const { userId, type, quantity, description, location } = data;
  const updatedDonation = await prisma.donation.update({
    where: {
      id: id,
    },
    data: {
      userId,
      type,
      quantity,
      description,
      location,
    },
  });
  return updatedDonation;
};

const deleteDonation = async (id) => {
  const deletedDonation = await prisma.donation.delete({
    where: {
      id: id,
    },
  });
  return deletedDonation;
};

const getlocationHeatmap = async () => {
  const heatmap = await prisma.donation.findMany({
    select: {
      location: true,
    },
  });
  return heatmap;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
  getAllDonations,
  getDonationById,
  addDonation,
  updateDonation,
  deleteDonation,
  getlocationHeatmap,
};
