const mongoose = require('mongoose')
const conection=  require('../connection/database')
const Schema = mongoose.Schema;



const orderSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    item_name: { type: String, default: "" },
    order_id: { type: Number, default: 0 },
    cost: { type: Number, default: 0 },
    order_date: { type: Date, default: Date.now()},
    delivery_date: { type: Date, default: null },
})
orderSchema.plugin(conection.autoIncrement.plugin, { model: 'order', field: 'order_id' })

const Order = new mongoose.model('Order', orderSchema)

module.exports = Order