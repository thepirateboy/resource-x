const router = require("express").Router();
let Package = require("../models/package.model");

router.route("/").get((req, res) => {
  Package.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const departureDate = req.body.departureDate;
  const exporter = req.body.exporter;
  const total = req.body.total;
  const value = req.body.value;
  const quantity = req.body.quantity;
  const weight = req.body.weight;
  const destination = req.body.destination;
  const user = req.body.user;

  const newPackage = new Package({
    departureDate,
    exporter,
    total,
    value,
    quantity,
    weight,
    destination,
    user,
  });

  newPackage
    .save()
    .then(() => res.json("Package added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Package.findById(req.params.id)
    .then((packages) => res.json(packages))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Package.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Package.findById(req.params.id)
    .then((thePackage) => {
      thePackage.departureDate = Date.parse(req.body.departureDate);
      thePackage.exporter = req.body.exporter;
      thePackage.total = Number(req.body.total);
      thePackage.value = Number(req.body.value);
      thePackage.quantity = Number(req.body.quantity);
      thePackage.weight = Number(req.body.weight);
      thePackage.destination = req.body.destination;
      thePackage.user = req.body.user;

      thePackage
        .save()
        .then(() => res.json("Package updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
