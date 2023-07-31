const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

router.post("/saveFoodChoice/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const { name, variety, description, day } = req.body;
    const foodChoice = new Food({
      name,
      variety,
      selectedBy: userId,
      description,
      day,
    });

    await foodChoice.save();

    res
      .status(201)
      .json({ message: "Food choice saved successfully", data: foodChoice });
  } catch (error) {
    console.error("Error saving food choice:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
