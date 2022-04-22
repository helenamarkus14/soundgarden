const router = require("express").Router()

router.use("/users", require("./users"))
router.use("/concerts", require("./concerts"))

module.exports = router;