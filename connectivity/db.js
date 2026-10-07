const mongoose = require('mongoose');

const connectDB=mongoose.createConnection("mongodb://localhost:27017/empData")
.then(() => {
    console.log("connected...")
    
}).catch((err) => {
    console.log(err)
});

module.exports={connectDB}



