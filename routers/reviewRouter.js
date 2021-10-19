// routers/reviewRouter.js

const { Router } = require("express");
const router = new Router();

const Review = require("../models").review;
const User = require("../models").user;
const Place = require("../models").place;

// GET all reviews
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [User, Place],
    });
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

// POST a new review of a place
router.post("/", async (req, res, next) => {
  const { title, comment, image, rating, userId, placeId } = req.body;
  if (!title || !comment || !rating || !userId || !placeId) {
    if (!title) {
      return res.status(400).send({ message: "Please provide title" });
    }
    if (!comment) {
      return res.status(400).send({ message: "Please provide comment" });
    }
    if (!rating) {
      return res.status(400).send({ message: "Please add rating" });
    }
    if (!userId) {
      return res.status(400).send({ message: "Unknown user id" });
    }
    if (!placeId) {
      return res.status(400).send({ message: "Unknown place id" });
    }
  }

  try {
    const newReview = await Review.create({
      title,
      comment,
      image,
      rating,
      userId,
      placeId,
    });

    res.status(201).send("New review is placed!");
  } catch (e) {
    next(e.message);
  }
});

// GET all reviews of a place
router.get("/place/:id", async (req, res, next) => {
  const placeId = parseInt(req.params.id);
  if (!placeId) {
    return res.status(400).send("Place ID not found!");
  }
  try {
    const reviews = await Review.findAll({
      where: { placeId: placeId },
    });
    res.send(reviews);
  } catch (e) {
    next(e.message);
  }
});

// DELETE a review
router.delete("/:id", async (req, res, next) => {
  const reviewId = parseInt(req.params.id);
  try {
    const review = await Review.findByPk(reviewId);
    console.log("review", review);

    if (!review) {
      res.status(400).send(`No review with id of ${reviewId} has been found`);
    } else {
      review.destroy();
      res.status(200).send("Review has been deleted.");
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
