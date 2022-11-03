const authRouter = require('./auth-router');
const cartRouter = require('./cart-router');
const orderRouter = require('./order-router');
const productRouter = require('./product-router');
const userRouter = require('./user-router');

const router = require('express').Router(); //router parent

// routers enfants 

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/orders', orderRouter)
router.use('/carts', cartRouter)


module.exports = router;