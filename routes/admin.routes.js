const router = require("express").Router();
const admin = require("../../services/admin");

router.get("/users", admin.getAllUsers);
router.get("/users/:id", admin.getUserById);
router.get("/users/email/:email", admin.getUserByEmail);
router.post("/users", admin.addUser);
router.put("/users/:id", admin.updateUser);
router.delete("/users/:id", admin.deleteUser);
router.get("/donations", admin.getAllDonations);
router.get("/donations/:id", admin.getDonationById);
router.post("/donations", admin.addDonation);
router.put("/donations/:id", admin.updateDonation);
router.delete("/donations/:id", admin.deleteDonation);
router.get("/heatmap", admin.getlocationHeatmap);
