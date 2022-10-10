const Router = require('express');
const router = new Router();
const ratingController = require('../controllers/ratingController.js')

router.post('/', ratingController.create);
router.get('/',  ratingController.getOne);


module.exports = router;