const prismaClient = require("../database/dbclient");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
});
