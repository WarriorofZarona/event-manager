const { Person } = require("../models");

module.exports = {
  getPeople(req, res) {
    Person.find({})
      .then((people) => res.json(people))
      .catch((err) => res.status(500).json(err));
  },
  getPerson(req, res) {
    Person.find({ _id: req.params.id })
      .then((person) => res.json(person))
      .catch((err) => res.status(500).json(err));
  },
  updatePerson(req, res) {

    const { hasResponded, isAttending, food } = req.body;

    Person.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { hasResponded, isAttending, food } }
    )
      .then((person) => res.json(person))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
