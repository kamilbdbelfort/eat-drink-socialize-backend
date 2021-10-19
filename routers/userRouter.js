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

// GET user user_place status
router.get("/user_place/:userId/:placeId", async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const placeId = parseInt(req.params.placeId);

  try {
    const user_place = await User_place.findAll({
      where: { userId: userId },
      where: { placeId: placeId },
    });
    res.status(200).send(user_place);
  } catch (e) {
    next(e.message);
  }
});

// PATCH a new like user_place
router.patch("/user_place/:userId/:placeId/like", async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const placeId = parseInt(req.params.placeId);
  try {
    const userPlace = await User_place.findOne({
      where: { userId: userId },
      where: { placeId: placeId },
    });
    if (!userPlace) {
      return res.status(404).json({ message: "Uknown user_place" });
    }

    if (userPlace.like) {
      await userPlace.update({ like: false });
    } else if (!userPlace.like) {
      await userPlace.update({ like: true });
    }

    res.json(userPlace);
  } catch (e) {
    next(e.message);
  }
});

// PATCH a new saved user_place
router.patch("/user_place/:userId/:placeId/saved", async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const placeId = parseInt(req.params.placeId);
  try {
    const userPlace = await User_place.findOne({
      where: { userId: userId },
      where: { placeId: placeId },
    });
    if (!userPlace) {
      return res.status(404).json({ message: "Uknown user_place" });
    }

    if (userPlace.saved) {
      await userPlace.update({ saved: false });
    } else if (!userPlace.saved) {
      await userPlace.update({ saved: true });
    }

    res.json(userPlace);
  } catch (e) {
    next(e.message);
  }
});

// POST add like user_place
router.post("/user_place/newLike", async (req, res, next) => {
  const { userId, placeId, like, saved } = req.body;

  if (!userId || !placeId) {
    return res
      .status(400)
      .send({ message: "Please provide user & place ID's" });
  }
  if (!like) {
    return res.status(400).send({ message: "Please add a like to the place" });
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

// POST add saved user_place
router.post("/user_place/newSaved", async (req, res, next) => {
  const { userId, placeId, like, saved } = req.body;

  if (!userId || !placeId) {
    return res
      .status(400)
      .send({ message: "Please provide user & place ID's" });
  }
  if (!like) {
    return res.status(400).send({ message: "Please add a like to the place" });
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
