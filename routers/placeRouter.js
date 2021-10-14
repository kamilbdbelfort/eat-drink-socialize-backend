// routers/placeRouters.js

const { Router } = require("express");
const router = new Router();

const Place = require("../models").place;
const Tag = require("../models").tag;

// GET all places
router.get("/", async (req, res, next) => {
  try {
    const places = await Place.findAll();
    res.status(200).send(places);
  } catch (e) {
    next(e.message);
  }
});

// GET a specific place
router.get("/:id", async (req, res, next) => {
  const placeId = parseInt(req.params.id);
  if (!placeId) return res.status(404).json({ message: "Uknown place ID" });
  try {
    const place = await Place.findByPk(placeId, {
      include: [{ model: Review }, { model: Tag, through: { attributes: [] } }],
    });
    res.status(200).send(place);
  } catch (e) {
    next(e.message);
  }
});

// POST a new place
router.post("/", async (req, res, next) => {
  const { name, street, number, city, postcode, country, image } = req.body;
  if (!name || !street || !number || !city || !postcode || !country || !image) {
    if (!name) {
      return res.status(400).send({ message: "Please provide title" });
    }
    if (!street) {
      return res.status(400).send({ message: "Please provide comment" });
    }
    if (!number) {
      return res.status(400).send({ message: "Please add rating" });
    }
    if (!city) {
      return res.status(400).send({ message: "Unknown user id" });
    }
    if (!postcode) {
      return res.status(400).send({ message: "Unknown place id" });
    }
    if (!country) {
      return res.status(400).send({ message: "Unknown user id" });
    }
    if (!image) {
      return res.status(400).send({ message: "Unknown place id" });
    }
  }

  try {
    const newPlace = await Place.create({
      name,
      street,
      number,
      city,
      postcode,
      country,
      image,
    });

    res.status(201).send("New place is added!");
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
