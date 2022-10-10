const Router = require('express');
const router = new Router();
const basketDeviceController = require('../controllers/basketDeviceController.js');
const authMiddleware = require('../middleware/authMiddleware.js')

router.get('/', authMiddleware, basketDeviceController.get);
router.post('/', authMiddleware, basketDeviceController.create);
router.delete('/', authMiddleware, basketDeviceController.delete);


module.exports = router;