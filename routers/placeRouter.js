// routers/placeRouters.js

const { Router } = require("express");
const router = new Router();

const Place = require("../models").place;

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
    const place = await Place.findByPk(placeId);
    res.status(200).send(place);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
