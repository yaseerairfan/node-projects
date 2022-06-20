const express = require("express");
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.use(function(req, res, next) {
//   // do logging
//   res.header('content-type', 'application/json');
//   console.log('Something is happening.');
//   next(); // make sure we go to the next routes and don't stop here
// });
//custom Routes
router.get('/',(req,res)=>{
  res.status(200).json({'success':true,'message':'Display all bootcamps'});
})
router.get('/:id',(req,res)=>{
  res.status(200).json({'success':true,'message':`Display bootcamp ${req.params.id}`});
})

router.post('/',(req,res)=>{
  res.status(200).json({'success':true,'message':'Create new bootcamp'});
})

router.put('/:id',(req,res)=>{
  res.status(200).json({'success':true,'message':`Update bootcamp ${req.params.id}`});
})
// router.delete('/:id',(req,res)=>{
//   res.status(200).json({'success':true,'message':`Delete bootcamp ${req.params.id}`});
// })


module.exports = router;
