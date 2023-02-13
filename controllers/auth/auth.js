const auth = require("../../services/auth");
const createError = require("http-errors");
const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");

const register = catchAsyncErrors(async (req, res, next) => {
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

const login = catchAsyncErrors(async (req, res, next) => {
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

const getAllUsers = catchAsyncErrors(async (req, res, next) => {
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

module.exports = {
  register,
  login,
  getAllUsers,
};
