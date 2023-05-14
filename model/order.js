const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    item_name: { type: String, default: "" },
    order_id: { type: Number, default: 0 },
    cost: { type: Number, default: 0 },
    order_date: { type: Date, default: Date.now()},
    delivery_date: { type: Date, default: null },
})

orderSchema.post('save', async(doc) => {
    let count=await Order.countDocuments({});
    await Order.updateOne({_id:doc._id},{$set:{order_id:count+1}});
});
const Order = new mongoose.model('Order', orderSchema)

module.exports = Order