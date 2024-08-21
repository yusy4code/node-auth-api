// routes/protected.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Example protected route
router.get('/profile', auth, (req, res) => {
  res.json({ msg: 'This is a protected route', user: req.user });
});

module.exports = router;
