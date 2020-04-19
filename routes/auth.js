var express = require('express');
var router = express.Router();
const passport = require('passport');

const authCheck = (req, res, next) => {
    if(req.user) {
      // user is not logged in
      res.redirect('/user');
    } else {
      // logged in
      next();
    }
  };

// auth login
router.get('/login',authCheck, function(req,res,next) {
    res.render('login', {
        title : "Login",
        user: req.user
    });
});

// auth logout
router.get('/logout', (req,res) => {
    //hadle with passport
    req.logout();
    res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
    res.redirect('/user');
});

module.exports = router;