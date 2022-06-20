const express=require("express");
const dotenv=require('dotenv');


//Route files
const routes=require('./routes/index.js');
// const  logger=require('./middleware/logger');

//3rd party midleware
const morgan=require('morgan')
// const Fs = require('fs')  
// const Path = require('path')

// const path = Path.join(__dirname, "./routes/index.js")

// console.log(Fs.existsSync(path)); 

//Load env variables
dotenv.config({path:'./config/config.env'});

const app =express();
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
app.listen(PORT, () => console.log(`Server running on  ${process.env.NODE_ENV} mode on port ${PORT}`));
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
