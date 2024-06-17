const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
  refreshToken
} = require("../controllers/authController");
const isAuthorized=require('../middleware/isAuthorized.js');
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Testing");
});
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/refresh",refreshToken);
router.get("/logout",isAuthorized,logoutController);
module.exports = router;
