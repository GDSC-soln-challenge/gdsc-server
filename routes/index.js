const express = require("express");
const router = express.Router();
const auth = require("./auth.routes");
const poverty = require("./poverty.routes");
const createError = require("http-errors");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");


router.use("/auth", auth);
//poverty Module
router.use("/poverty", poverty);
router.use(
  catchAsyncErrors(async (req, res, next) => {
    next(createError.NotFound("This route does not exist"));
  })
);

router.use((err, req, res, next) => {
  // console.log(err);
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message,
  });
});

module.exports = router;
