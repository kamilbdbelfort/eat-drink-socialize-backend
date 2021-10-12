// routers/userRouters.js

const { Router } = require("express");
const router = new Router();

const authMiddleWare = require("../auth/middleware");

const User = require("../models").user;

// GET all users
router.get("/", authMiddleWare, async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (e) {
    next(e.message);
  }
});

// GET user by id
router.get("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  if (!userId) {
    res.status(404).send("User ID not found");
  }

  try {
    const user = await User.findByPk(userId);
    res.status(200).send(user.name);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
