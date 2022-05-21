const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({ include: Product }).then((tags) => {
    res.json(tags);
  });
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    include: Product,
    where: { id: req.params.id },
  }).then((tag) => {
    res.json(tag);
  });
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.name,
  }).then((tag) => {
    res.json(tag);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    { tag_name: req.body.tag_name },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((updates) => {
    res.json(updates);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((changes) => {
    res.json(changes);
  });
});

module.exports = router;
