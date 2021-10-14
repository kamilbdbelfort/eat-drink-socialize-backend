// routers/tagRouter.js

const { Router } = require("express");
const router = new Router();

const authMiddleWare = require("../auth/middleware");

const Tag = require("../models").tag;
const Place = require("../models").place;

// GET all tags
router.get("/", async (req, res, next) => {
  try {
    const tags = await Tag.findAll();
    res.status(200).send(tags);
  } catch (e) {
    next(e.message);
  }
});

// GET a specific tag
router.get("/:id", async (req, res, next) => {
  const tagId = parseInt(req.params.id);
  if (!tagId) return res.status(404).json({ message: "Uknown place ID" });
  try {
    const tag = await Tag.findByPk(tagId, {
      include: [{ model: Place, through: { attributes: [] } }],
    });
    res.status(200).send(tag);
  } catch (e) {
    next(e.message);
  }
});

// POST a new tag
router.post("/", async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    if (!name) {
      return res.status(400).send({ message: "Please provide title" });
    }
  }

  try {
    const newTag = await Tag.create({
      name,
    });

    res.status(201).send("New tag is created!");
  } catch (e) {
    next(e.message);
  }
});

// DELETE a tag
router.delete("/:id", async (req, res, next) => {
  const tagId = parseInt(req.params.id);
  try {
    const tag = await Tag.findByPk(tagId);
    console.log("review", tag);

    if (!tag) {
      res.status(400).send(`No review with id of ${tagId} has been found`);
    } else {
      tag.destroy();
      res.status(200).send("Review has been deleted.");
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
