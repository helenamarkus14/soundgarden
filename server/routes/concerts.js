const router = require("express").Router();
const {concerts} = require("../controllers");

router.get("/", concerts.indexConcert);
router.get("/:id", concerts.showConcert);
router.post("/", concerts.createConcert);
router.put("/:id", concerts.updateConcert);
router.delete("/:id", concerts.destroyConcert);

module.exports = router;