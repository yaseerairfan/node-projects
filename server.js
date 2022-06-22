const express=require("express");
const dotenv=require('dotenv');
const connectdb=require('./config/db');


// const  logger=require('./middleware/logger');

//3rd party midleware
const morgan=require('morgan')

//Route files
const routes=require('./routes/index.js');
// const Fs = require('fs')  
// const Path = require('path')

// const path = Path.join(__dirname, "./routes/index.js")

// console.log(Fs.existsSync(path)); 

//Load env variables
dotenv.config({path:'./config/config.env'});
connectdb();
const app =express();

app.use(express.json());
//dev logging middleware
if(process.env.NODE_ENV=='development'){
    app.use(morgan('dev'));
}
// app.use(logger);
// app.get('/',(req,res)=>{
//     res.status(200).json({'success':true,'message':`Delete bootcamp ${req.params.id}`});
//   })
app.use("",require("./routes/index.js"));




const PORT=process.env.PORT || 5000;
const server=app.listen(PORT, () => console.log(`Server running on  ${process.env.NODE_ENV} mode on port ${PORT}`));
// handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    //Close server and quit process
    server.close(()=>{
        process.exit(1);
    })
})


// const { buffer } = require("stream/consumers");
// const server = http.createServer((req, res) => {
//   const { headers, url, method } = req;
//   const array = [{ id: 1, text: "one" }];
//   let body = [];
//   req.on("data", (chunk) => {
//     body.push(chunk);
//   });
//   req.on("end", () => {
//     let status = "404";
//     let response = {
//         success:false,
//       array: null,
//       error:null
//     };
//     body = Buffer.concat(body).toString();
//     if(method==='GET' && url==='/todos'){
//         status='200',
//         response.success=true,
//         response.array=array
//     }
//     else if(method==='POST' && url==='/todos'){
//         const{ text,id }=JSON.parse(body);
//         if(!id || !text){
//             response.error='Both id an text is required'
//         }
//         else{
//             array.push({id,text});
//             console.log({id,text});
//             response.array=array
//         }
       
//     }

//     res.end(JSON.stringify(response));
//   });
// });
// const port = 5000;
// server.listen(port, () => console.log(`Server running on port ${port}`));
