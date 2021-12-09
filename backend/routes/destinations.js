const router = require("express").Router();
let Destination = require("../models/destination.model");

router.route("/").get((req, res) => {
  Destination.find()
    .then((destinations) => res.json(destinations))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const destination_name = req.body.destination_name;
  const destination_description = req.body.destination_description;

  const newDestination = new Destination({
    destination_name,
    destination_description,
  });

  newDestination
    .save()
    .then(() => res.json("Destination added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Destination.findById(req.params.id)
    .then((destination) => res.json(destination))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Destination.findByIdAndDelete(req.params.id)
    .then(() => res.json("Destination deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Destination.findById(req.params.id)
    .then((destination) => {
      destination.name = req.body.name;
      destination.description = req.body.description;

      destination
        .save()
        .then(() => res.json("Destination updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
