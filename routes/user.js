var express = require('express');
var router = express.Router();

const authCheck = (req, res, next) => {
  if(!req.user) {
    // user is not logged in
    res.redirect('/auth/login');
  } else {
    // logged in
    next();
  }
};

/* GET users listing. */
router.get('/',authCheck, function(req, res) {
  res.render('profile', { 
    title: "Profile",
    user : req.user });
});

module.exports = router;
