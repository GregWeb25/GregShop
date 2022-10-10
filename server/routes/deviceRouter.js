const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController.js');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware.js');

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create);
router.delete('/', checkRoleMiddleware('ADMIN'), deviceController.delete);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);


module.exports = router;