const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment');
const dbConnection = async()=>{
    try{
        console.log('MongoDB Connected', process.env.DB_CONNECT)
        mongoose.connect("mongodb://localhost:27017/BuzzBoard",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((conn)=>{
            console.log(`mongoDB Connected : ${conn.connection.host}`)
            // autoIncrement.initialize(conn);
        })
    }catch (error){
        console.log('error while connectingdb' + error)
    }
}


module.exports={dbConnection}

// const mongoose = require('mongoose')
// global.autoIncrement = require('mongoose-auto-increment');

// const dbConnection = async()=>{
//     try{
//         console.log('MongoDB Connected', process.env.DB_CONNECT)
//         const conn = await mongoose.connect("mongodb://localhost:27017/BuzzBoard",{
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }).then((conn)=>{
//             console.log(`mongoDB Connected : ${conn.connection.host}`)
//             autoIncrement.initialize(conn);
//         })
//     }catch (error){
//         console.log('error while connectingdb' + error)
//     }
// }



// module.exports={dbConnection,autoIncrement}