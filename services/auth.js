const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const ErrorHandler = require("../utils/errorHandler");
const prisma = require("../database/dbclient");

// @desc    Register a user
// @route   POST /api/auth/register

const registerUser = async (data) => {
  const { name, email, password, type } = data;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    throw new ErrorHandler(400, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      type: type,
    },
  });

  delete newUser.password;
  const accessToken = await jwt.signAccessToken({ id: newUser.id });
  return { ...newUser, accessToken };
};

// @desc    Login a user
// @route   POST /api/auth/login
const loginUser = async (data) => {
  const { email, password, type } = data;
  const user = await prisma.user.findUnique({
    where: {
      email,
      type,
    },
  });

  if (!user) {
    throw new ErrorHandler(401, "Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ErrorHandler(401, "Invalid credentials");
  }

  delete user.password;
  const accessToken = await jwt.signAccessToken({ id: user.id });
  return { ...user, accessToken };
};

// @desc    Get user all
// @route   GET /api/auth/all
const getAllUsers = async () => {
  const users = await prisma.user.findMany();

  if (!users) {
    throw new ErrorHandler(404, "No users found");
  }

  return users;
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
};
