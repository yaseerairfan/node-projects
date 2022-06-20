exports.getBootcamps=(req,res,next)=>{
  res.status(200).json({'success':true,'message':'Display all bootcamps'});
}
exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({'success':true,'message':`Display bootcamp ${req.params.id}`});
  }
  exports.createBootcamp=(req,res,next)=>{
    res.status(200).json({'success':true,'message':'Create new bootcamp'});
  }
  exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({'success':true,'message':`Update bootcamp ${req.params.id}`});
  }
  exports.delBootcamp=(req,res,next)=>{
    res.status(200).json({'success':true,'message':`Delete bootcamp ${req.params.id}`});
  }