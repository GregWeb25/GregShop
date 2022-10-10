const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter.js');
const userRouter = require('./userRouter.js');
const brandRouter = require('./brandRouter.js');
const typeRouter = require('./typeRouter.js');
const basketRouter = require('./basketRouter.js');
const basketDeviceRouter = require('./basketDeviceRouter.js')
const ratingRouter = require('./ratingRouter.js');
const commentRouter = require('./commentRouter.js')

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/comment', commentRouter);
router.use('/basket', basketRouter);
router.use('/rating', ratingRouter);
router.use('/basket-device', basketDeviceRouter);


module.exports = router;