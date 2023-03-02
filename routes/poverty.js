const router = require("express").Router();
const poverty=require("../controllers/poverty");
router.post("/povertyDonation", poverty.addPovertyDonation);
module.exports= router;