const hunger = require("../../services/zeroHunger");
const createError = require("http-errors");
const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const addHungerDonation = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await hunger.addHungerDonation(req.body);
    res.status(200).json({
      status: true,
      message: "Donation successful",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});
const getHungerOrganizations = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await hunger.getHungerOrganizations();
    res.status(200).json({
      status: true,
      message: "Organizations retrieved successfully",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});
const getDonations = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await hunger.getDonations();
    res.status(200).json({
      status: true,
      message: "Donations retrieved successfully",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const getDonationById = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await hunger.getDonationById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Donation retrieved successfully",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

module.exports = {
    addHungerDonation,
    getHungerOrganizations,
    getDonations,
    getDonationById
};