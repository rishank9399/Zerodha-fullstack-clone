const { Signup, Login, Verify } = require("../Controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/verify', Verify);
router.post('/home', userVerification)

module.exports = router; 