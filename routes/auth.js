const express = require("express");
const router = express.Router();
const {
    registerPatient,
    loginPatient,
} = require("../controllers/auth");

router.post('/registerpatient',registerPatient);
router.post('/loginpatient',loginPatient);

module.exports = router;