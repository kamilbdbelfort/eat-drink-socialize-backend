// routers/auth.js

const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");

const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const User_place = require("../models/").user_place;
const Review = require("../models/").review;
const Place = require("../models/").place;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      if (!email) {
        return res.status(400).send({ message: "Please provide an email" });
      } else if (!password) {
        return res.status(400).send({ message: "Please provide a password" });
      } else {
        return res
          .status(400)
          .send({ message: "Please provide both email and password" });
      }
    }

    const user = await User.findOne({
      where: { email },
      include: [
        { model: Review },
        { model: Place, through: { attributes: ["like", "saved"] } },
      ],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name, birthday, city, country, image, instagram } =
    req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      birthday,
      city,
      country,
      image,
      instagram,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: newUser.id });

    // const space = await Space.create({
    //   title: `${newUser.name}'s space`,
    //   userId: newUser.id,
    // });

    res.status(201).json({
      token,
      ...newUser.dataValues,
      // space: {
      //   ...space.dataValues,
      //   stories: [],
      // },
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findOne({
    where: { userId: req.user.id },
    include: [
      { model: Review },
      { model: Place, through: { attributes: ["like", "saved"] } },
    ],
  });
  console.log("user info", user);
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues, space });
});

module.exports = router;
