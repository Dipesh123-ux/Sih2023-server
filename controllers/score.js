const Test = require("../models/test");
const User = require("../models/user");

exports.addScore = async (req, res, next) => {
  try {
    const { testName, testScore, testUser } = req.body;

    const test = await Test.create({ testName, testScore, testUser });

    return res.status(200).json({
      message: "Score successfully added!",
    });
  } catch {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

exports.getScores = async (req, res, next) => {
  try {
    const { testUser, testName } = req.body;

    const allTest = await Test.find({ testName: testName, testUser: testUser }).populate('testUser')
   
    return res.status(200).json({
      score: allTest,
    });
  } catch {
    return res.status(500).json({
        message: 'Internal server Error'
    })
  }
};
