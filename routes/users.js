var express = require("express");
var router = express.Router();
const { getUser, deleteUser } = require("../controllers/user");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", getUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
