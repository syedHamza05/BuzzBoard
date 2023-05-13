const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    item_name: { type: String, default: "" },
    cost: { type: Number, default: "" },
    order_date: { type: Date, default: Date.now()},
    delivery_date: { type: Date, default: null },
})

const Order = new mongoose.model('Order', orderSchema)

module.exports = Order