const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user,
  }),
);

// Add
router.get('/Add', ensureAuthenticated, (req, res) =>
  res.render('Add', {
    user: req.user,
  }),
);

// Edit
router.get('/Edit', ensureAuthenticated, (req, res) =>
  res.render('Edit', {
    user: req.user,
  }),
);

module.exports = router;
