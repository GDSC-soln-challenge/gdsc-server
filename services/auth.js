const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const ErrorHandler = require("../utils/errorHandler");
const prisma = require("../database/dbclient");

// @desc    Register a user
// @route   POST /api/auth/register

const registerUser = async (data) => {
  const { email, password } = data;
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
      email,
      password: hashedPassword,
    },
  });

  delete newUser.password;
  const accessToken = await jwt.signAccessToken({ id: newUser.id });
  return { ...newUser, accessToken };
};

// @desc    Register profile of a user
// @route   POST /api/auth/register/profile

const registerUserProfile = async (data) => {
  const { name, profession, location, phone } = data;
  try {
    const profile = await prisma.profile.create({
      data: {
        name,
        profession,
        location,
        phone,
      },
    });
    // console.log(profile);
    return profile;
  } catch (err) {
    console.log(err);
  }
};

// @desc    Login a user
// @route   POST /api/auth/login
const loginUser = async (data) => {
  const { email, password } = data;
  const user = await prisma.user.findUnique({
    where: {
      email,
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

// @desc    Get user profile
// @route   GET /api/auth/profile/:id
const getUserProfile = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  console.log("user", user);

  if (!user) {
    throw new ErrorHandler(404, "User not found");
  }

  return user;
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
  registerUserProfile,
  getUserProfile,
};
