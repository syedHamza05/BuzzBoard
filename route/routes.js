const router = require('express').Router()
const controllers = require('../controller/controllers')

router.post('/orders/create', controllers.Order)
router.post('/orders/update/:id', controllers.updateOrder)
router.get('/orders/search/:id', controllers.getOrderById)
router.get('/order/list', controllers.orderlist)
router.delete('/orders/delete/:id', controllers.removeOrder)

module.exports= router