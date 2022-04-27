const router = require("express").Router();
const {concerts} = require("../controllers");

router.get("/", concerts.indexConcert);
router.get("/:name", concerts.userConcerts);
router.get("/:name/:id", concerts.showConcert);
router.post("/", concerts.createConcert);
router.put("/:name/:id", concerts.updateConcert);
router.delete("/:name/:id", concerts.destroyConcert);

module.exports = router;