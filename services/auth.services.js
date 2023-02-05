const prisma = require("../database/dbClient");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const ErrorHandler = require("../utils/errorHandler");

// @desc    Register a user
// @route   POST /api/auth/register

class authService {
  static async registerUser(data) {
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
  }

  // @desc    Login a user
  // @route   POST /api/auth/login
  static async loginUser(data) {
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
  }

  // @desc    Get user all
  // @route   GET /api/auth/all
  static async getAllUsers() {
    const users = await prisma.user.findMany();

    if (!users) {
      throw new ErrorHandler(404, "No users found");
    }

    return users;
  }
}

module.exports = authService;
