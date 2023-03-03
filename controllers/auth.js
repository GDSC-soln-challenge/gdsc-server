const auth = require("../services/auth");
const createError = require("http-errors");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const register = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await auth.registerUser(req.body);
    res.status(200).json({
      status: true,
      message: "Account registration successful",
      data,
    });
  } catch (e) {
    console.log("Error: ", e);
    next(createError(e.statusCode, e.message));
  }
});

const registerProfile = catchAsyncErrors(async (req, res, next) => {
  try {
    const data = await auth.registerUserProfile(req.body);
    res.status(200).json({
      status: true,
      message: "Profile registration successful",
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

const getUserProfile = catchAsyncErrors(async (req, res, next) => {
  try {
    console.log(req.params.id);
    const data = await auth.getUserProfile(req.params.id);
    res.status(200).json({
      status: true,
      message: "User profile",
      data,
    });
  } catch (e) {
    console.log(e);
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
  registerProfile,
  getUserProfile,
};
