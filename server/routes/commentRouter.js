const Router = require('express');
const router = new Router();
const commentController = require('../controllers/commentController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware.js');

router.post('/', authMiddleware, commentController.create);
router.delete('/', checkRoleMiddleware('ADMIN'), commentController.delete);
router.get('/', commentController.get);



module.exports = router;