const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware.js');

router.post('/registration', userController.registration);
router.get('/getadmins', checkRoleMiddleware('ADMIN'), userController.getAdmins);
router.get('/', userController.getAll);
router.post('/deleteadmin', checkRoleMiddleware('ADMIN'), userController.deleteAdmin);
router.post('/addadmin', checkRoleMiddleware('ADMIN'), userController.addAdmin);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);


module.exports = router;