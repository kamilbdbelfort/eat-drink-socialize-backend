// routers/reviewRouter.js

const { Router } = require("express");
const router = new Router();

const Review = require("../models").review;

// GET all reviews
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).send(reviews);
  } catch (e) {
    next(e.message);
  }
});

// GET all reviews from a user
router.get("/user/:userId", async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  if (!userId) return res.status(404).json({ message: "Uknown user ID" });
  try {
    const userReviews = await Review.findAll({
      where: { userId: userId },
    });
    res.status(200).send(userReviews);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
