const router = require("express").Router();
const user = require("../controllers/auth/auth");
const auth = require("../middlewares/auth");

// @desc    Register a user
// @route   POST /api/auth/register
router.post("/register", user.register);

// @desc    Register profile of a user
// @route   POST /api/auth/register/profile
router.post("/register/profile", user.registerProfile);

// @desc    Login a user
// @route   POST /api/auth/login
router.post("/login", user.login);

// @desc    Get user profile
// @route   GET /api/auth/profile
router.get("/profile/:id", user.getUserProfile);

// @desc    Get user all
// @route   GET /api/auth/all
router.get("/all", auth("ADMIN"), user.getAllUsers);

module.exports = router;
