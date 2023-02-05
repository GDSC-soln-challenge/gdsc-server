const auth = require("../services/auth.services");
const createError = require("http-errors");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

class authController {
  static register = catchAsyncErrors(async (req, res, next) => {
    try {
      const data = await auth.registerUser(req.body);
      res.status(200).json({
        status: true,
        message: "Account registration successful",
        data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  });

  static login = catchAsyncErrors(async (req, res, next) => {
    try {
      const data = await auth.loginUser(req.body);
      res.status(200).json({
        status: true,
        message: "Account login successful",
        data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  });

  static getAllUsers = catchAsyncErrors(async (req, res, next) => {
    try {
      const data = await auth.getAllUsers();
      res.status(200).json({
        status: true,
        message: "All users",
        data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  });
}

module.exports = authController;
