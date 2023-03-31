const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const poverty = require("../../services/poverty");
const createError = require("http-errors");
const addPovertyDonation = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await poverty.addPovertyDonation(req.body);
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
//get all poverty donations
const getDonations = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await poverty.getDonations();
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
    const data = await poverty.getDonationById(req.params.id);
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
  addPovertyDonation,
  getDonations,
  getDonationById
};
