const router = require("express").Router();
const poverty = require("../controllers/poverty/poverty");
router.post("/donation", poverty.addPovertyDonation);
module.exports = router;
