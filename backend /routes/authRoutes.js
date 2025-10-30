const express = require("express");
const router = express.Router();
const { register, login, getMe } = require("../controllers/authControllers");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route (you can add authentication middleware later)
// router.get('/me', protect, getMe);

module.exports = router;
