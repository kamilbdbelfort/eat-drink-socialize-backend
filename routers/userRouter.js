// routers/userRouters.js

const { Router } = require("express");
const router = new Router();

const authMiddleWare = require("../auth/middleware");

const User = require("../models").user;
const User_place = require("../models/").user_place;
const Review = require("../models/").review;
const Place = require("../models/").place;

// GET all users
router.get("/", authMiddleWare, async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (e) {
    next(e.message);
  }
});

// GET user by id and all his related info
router.get("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  if (!userId) {
    res.status(404).send("User ID not found");
  }

  try {
    const user = await User.findByPk(userId, {
      include: [
        { model: Review },
        { model: Place, through: { attributes: ["like", "saved"] } },
      ],
    });
    res.status(200).send(user);
  } catch (e) {
    next(e.message);
  }
});

// POST a new saved or like user_venue
router.post("/user_place", async (req, res, next) => {
  const { userId, placeId, like, saved } = req.body;

  if (!userId || !placeId) {
    return res
      .status(400)
      .send({ message: "Please provide user & place ID's" });
  }
  if (!like && !saved) {
    return res
      .status(400)
      .send({ message: "Please provide a like or save the place" });
  }
  try {
    const newUserPlace = await User_place.create({
      userId,
      placeId,
      like,
      saved,
    });
    res.status(201).send("New place is added to a user's list!");
  } catch (e) {
    next(e.message);
  }
});

// DELETE a place from a user's list
router.delete("/user_place/:id", async (req, res, next) => {
  const userPlaceId = parseInt(req.params.id);
  try {
    const userPlace = await User_place.findByPk(userPlaceId);
    console.log("review", userPlace);

    if (!userPlace) {
      res
        .status(400)
        .send(`No review with id of ${userPlaceId} has been found`);
    } else {
      userPlace.destroy();
      res.status(200).send("Review has been deleted.");
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
