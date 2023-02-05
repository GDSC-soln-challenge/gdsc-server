const router = require("express").Router();
const user = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");
// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// @desc    Register a user
// @route   POST /api/auth/register
router.post("/register", user.register);

// @desc    Login a user
// @route   POST /api/auth/login

router.post("/login", user.login);

// @desc    Get user all

// @route   GET /api/auth/all

router.get("/all", auth("ADMIN"), user.getAllUsers);

module.exports = router;
