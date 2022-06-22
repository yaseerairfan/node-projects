const mongoose=require('mongoose');
const connectdb=async ()=>{
    const uri=await mongoose.connect(process.env.MONGO_URI);
    console.log('connection established') ;   
}
module.exports=connectdb;