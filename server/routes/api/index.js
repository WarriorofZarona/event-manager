const router = require("express").Router();
const { getPerson, updatePerson, getPeople } = require("../../controllers");

router.route("/people").get(getPeople);

router.route("/people/:id").get(getPerson).put(updatePerson);

module.exports = router;
