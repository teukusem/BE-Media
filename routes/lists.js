var express = require("express");
const { getList } = require("../controllers/list");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.send("Kamu lagi di lists");
// });

router.post("/", getList);

module.exports = router;
