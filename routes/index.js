const express = require("express");
const router = express.Router();

const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  delBootcamp,
} = require("../controllers/bootcamp");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.use(function(req, res, next) {
//   // do logging
//   res.header('content-type', 'application/json');
//   console.log('Something is happening.');
//   next(); // make sure we go to the next routes and don't stop here
// });
//custom Routes
router.route("/").get(getBootcamps).post(createBootcamp);
router.route("/:id").get(getBootcamp).put(updateBootcamp).delete(delBootcamp);
router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
