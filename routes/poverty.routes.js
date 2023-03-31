const router = require("express").Router();
const poverty = require("../controllers/poverty/poverty");
router.post("/donation", poverty.addPovertyDonation);
router.get("/getdonations", poverty.getDonations);
router.get("/getdonations/:id", poverty.getDonationById);
module.exports = router;
