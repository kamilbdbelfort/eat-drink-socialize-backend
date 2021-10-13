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

module.exports = router;
