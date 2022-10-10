const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController.js');
const authMiddleware = require('../middleware/authMiddleware.js')

router.get('/', basketController.getOne);


module.exports = router;