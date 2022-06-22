const Bootcamp = require("../models/Bootcamp");

exports.getBootcamps = async (req, res, next) => {
  try {
    const data=await Bootcamp.find();
  res.status(200).json({ success: true, message: "Display all bootcamps" ,data:data});
  } catch (error) {
    res.status(404).json({ success: false,error:error});
  }
  
};
exports.getBootcamp = async (req, res, next) => {
  try {
    const data=await Bootcamp.findById(req.params.id)
    if(!data){
      return res.status(404).json({ success: false,error:"Not found"});
    }
    res
    .status(200)
    .json({ success: true, message: `Display bootcamp ${req.params.id}` ,data:data});
  } catch (error) {
    res.status(404).json({ success: false,error:error});
  }
  
};
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp=await Bootcamp.create(req.body)
    res.status(201).json({ success: true, message: "Create new bootcamp" ,data:bootcamp});
  } catch (error) {
    res.status(400).json({ success: false,error:error});
  }
  
};
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};
exports.delBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};
