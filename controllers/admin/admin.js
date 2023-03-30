const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const createError = require("http-errors");
const admin = require("../../services/admin");

const getAllUsers = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.getAllUsers();
    res.status(200).json({
      status: true,
      message: "All users",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const getUserById = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.getUserById(req.params.id);
    res.status(200).json({
      status: true,
      message: "User by id",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const getUserByEmail = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.getUserByEmail(req.params.email);
    res.status(200).json({
      status: true,
      message: "User by email",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const addUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.addUser(req.body);
    res.status(200).json({
      status: true,
      message: "User added",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const updateUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.updateUser(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "User updated",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const deleteUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.deleteUser(req.params.id);
    res.status(200).json({
      status: true,
      message: "User deleted",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const getDonations = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.getDonations();
    res.status(200).json({
      status: true,
      message: "All donations",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const getDonationById = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.getDonationById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Donation by id",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const addDonation = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.addDonation(req.body);
    res.status(200).json({
      status: true,
      message: "Donation added",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const updateDonation = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.updateDonation(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "Donation updated",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const deleteDonation = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.deleteDonation(req.params.id);
    res.status(200).json({
      status: true,
      message: "Donation deleted",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const getLocationHeatmap = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await admin.getLocationHeatmap();
    res.status(200).json({
      status: true,
      message: "Location heatmap",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
  getDonations,
  getDonationById,
  addDonation,
  updateDonation,
  deleteDonation,
  getLocationHeatmap,
};
