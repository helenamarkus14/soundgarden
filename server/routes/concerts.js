const router = require("express").Router();
const {concerts} = require("../controllers");


router.get("/", concerts.indexConcert);
router.post("/", concerts.createConcert);
router.put("/:id", concerts.updateConcert);
router.delete("/:id", concerts.destroyConcert);

module.exports = router;