const router = require("express").Router();
const poverty = require("../controllers/poverty");
router.post("/donation", poverty.addPovertyDonation);
module.exports = router;
