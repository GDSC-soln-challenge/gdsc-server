const router = require("express").Router();
const poverty = require("../controllers/poverty/poverty");
const auth = require("../middlewares/auth");
router.post("/donation", poverty.addPovertyDonation);
router.get("/allDonations", auth("ADMIN"), poverty.getAllDonations);

module.exports = router;
