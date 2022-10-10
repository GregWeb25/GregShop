const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController.js');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware.js');

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create);
router.delete('/', checkRoleMiddleware('ADMIN'), typeController.delete);
router.get('/', typeController.getAll);


module.exports = router;