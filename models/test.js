const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    testName: {
      type: String,
    },
    testUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    testScore: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Test", testSchema);
