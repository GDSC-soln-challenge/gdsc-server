const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const poverty = require("../services/poverty");
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
      console.log("Error: ",e);
      next(createError(e.statusCode, e.message));
    }
  });
  

module.exports = {
  addPovertyDonation,
};
