const express = require("express");
const router = express.Router();
const hunger = require("../controllers/zeroHunger/zeroHunger");
router.post("/donation", hunger.addHungerDonation);
router.get("/organizations", hunger.getHungerOrganizations);
router.get("/getdonations", hunger.getDonations);
router.get("/getdonations/:id", hunger.getDonationById);
module.exports = router;
