const router = require("express").Router();
let Package = require("../models/invoice.model");

router.route("/").get((req, res) => {
  Package.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const total = req.body.departureDate;

  const newPackage = new Package({
    total,
  });

  newPackage
    .save()
    .then(() => res.json("Invoice added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Package.findById(req.params.id)
    .then((invoice) => res.json(invoice))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Package.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Package.findById(req.params.id)
    .then((invoice) => {
      invoice.username = req.body.total;

      invoice
        .save()
        .then(() => res.json("Invoice updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
