const router = require("express").Router();
const user = require("../controllers/auth/auth");
const auth = require("../middlewares/auth");
const poverty = require("../controllers/poverty/poverty");
// @desc    Register a user
// @route   POST /api/auth/register
router.post("/register", user.register);

// @desc    Register profile of a user
// @route   POST /api/auth/register/profile
router.post("/register/profile", user.registerProfile);

// @desc    Login a user
// @route   POST /api/auth/login
router.post("/login", user.login);

// @desc    Logout a user
// @route   POST /api/auth/logout
// router.post("/logout", user.logout);

// @desc    Get user profile
// @route   GET /api/auth/profile
router.get("/profile/:id", user.getUserProfile);

// @desc    Get user all
// @route   GET /api/auth/all
router.get("/all", auth("ADMIN"), user.getAllUsers);
router.get("/getdonations", auth("ADMIN"), user.getDonation);
router.get("/getdonations/:id", auth("ADMIN"), user.getDonationById);
module.exports = router;
