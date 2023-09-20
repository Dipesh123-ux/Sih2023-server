const express = require("express");
const router = express.Router();
const {
   addScore,
   getScores
} = require("../controllers/score");

router.post('/addscore',addScore);
router.post('/getScore',getScores);

module.exports = router;