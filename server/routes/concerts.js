const router = require("express").Router();
const {concerts} = require("../controllers");

router.get("/", concerts.indexConcert);
router.get("/:name", concerts.userConcerts);
router.get("/:name/:id", concerts.showConcert);
router.post("/", concerts.createConcert);
router.put("/:name/:id", concerts.updateConcert);
router.delete("/:name/:id", concerts.destroyConcert);

router.post("/:name/:id/playlists", concerts.newPlaylist);
router.get("/:name/:id1/playlists/:id2/edit", concerts.showPlaylist);
router.put("/:name/:id1/playlists/:id2", concerts.updatePlaylist);
router.delete("/:name/:id1/playlists/:id2", concerts.deletePlaylist);

module.exports = router;