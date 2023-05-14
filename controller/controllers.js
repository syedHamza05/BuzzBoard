const Order = require('../model/order')
const utility = require('../Utility/utility')
const Joi = require("joi")

exports.Order = async(req, res) =>{
    try{
        
        let save=await new Order(req.body).save();
        if(!req.body.order_id){
        const created_user = await Order.findOne({_id:save._id})
        
    if(created_user){
    return await utility.success(res,created_user, "order Created")
    }
}
    else{
        return await utility.failure(res, "" , "Something Went Wrong")
    }
} catch (error) {
    console.log("err",error);
} 
}

exports.updateOrder = async(req, res) =>{
    try{
    let data = await Order.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    if(Order){
    return await utility.success(res,data, "updated Successfully ")
    }
    else{
        return await utility.failure(res, check, "Something Went Wrong")
    }
}
catch (error) {
    console.log("err",error);
} 
}


// exports.orderUpdate = async (req, res) => {
//     try{
//     let data = await Order.findOneAndUpdate({ _id: req.params.id }, req.body.accepted, { new: true });
//     console.log(data)
//     return res.status(200).json({ data });
// } catch (error) {
//     console.log("err",error);
// } 
// };

exports.orderlist= async (req, res) =>{
    try {
            let { page, size} = req.query;
    
            if (!page) {       
                page = 1;
            }
        
            if (!size) {
                size = 10;
            }

            let skip =( page-1)*size
            // let limit = req.query.limit

            const user = await Order.find().sort(
                {order_date: -1 }).skip(skip)
            return res.send({
                page,
                size,
                Info: user,
            });
        
    } catch (error) {
        console.log("err",error);
    }   
}

exports.getOrderById = async (req, res) =>{
    try{
    let user = await Order.findOne({
        _id: req.params.id
    })
    if(Order){
    return await utility.success(res,user, "Order by id")
    }
    else{
        return await utility.failure(res, check, "Something Went Wrong")
    }
}
    catch (error) {
        console.log("err",error);
}}

exports.removeOrder = async(req, res)=>{
    try{
    let remove = await Order.deleteOne({_id:req.params.id})
    if(remove){
    return await utility.success(res,remove, "Order delete successfully")
    }
    else{
        return await utility.failure(res, "Something Went Wrong")
    }
}
catch (error) {
    console.log("err",error);
} }

