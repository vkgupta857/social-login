var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Welcome",
    user: req.user
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: "About",
    user: req.user
  });
});

module.exports = router;
