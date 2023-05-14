const config = ('config')

module.exports = {
    success: async(res, data, message = "")=>{
        return res.status(200).send({
            message: message,
            data:data
        })
    },
    failure: async(res, message ="")=>{
        return res.status(400).send({
            message: message,
        })
    },
}