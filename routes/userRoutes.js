const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const authMiddleware = require('../middlewares/authMiddleware');

router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
// router.get('/', authMiddleware, userController.getUsers); // protected
// router.post('/', userController.createUser);

module.exports = router;
