const { fail } = require('assert');
const fs = require('fs');
const Tour = require('./../models/tourModel') 
const APIFeatures = require('./../utils/apiFeatures');

// const tours = JSON.parse(
//   //Converts json data into JAvascript object.
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);
//   if (req.params.id * 1 > tours.length) {
//     return (
//       res.status(404),
//       json({
//         status: 'Fail',
//         message: 'Invalid ID',
//       })
//     );
//   }
//   next();
// }
// exports.checkBody = (req, res, next) => {
//   if(!req.body.name || !req.body.price){
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     })
//   }
//   next();          //moving onto the next middleware
// }

exports.geAllTours = async (req, res) => {
  try {
    const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
    const tours = await features.query;
    res.status(200).json({
      status: 'Success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (error) {
    res.status(404).json({
      status: fail,
      message: error
    })
  }
};
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: {
        tour
      }
    })
    
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error
    })
  }
};
exports.createTour = async(req, res) => {
 try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
 } catch (error) {
   res.status(404).json({
      status: 'Fail',
      message: error
    })
 }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
      //new is a bool when set to true returns the updated document p
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'Success',
      data: {
        tour
      },
    });
    
  } catch (error) {
     res.status(404).json({
      status: 'Fail',
      message: error
    })
  }
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'Success',
      message: 'Record Deleted Successfully'
    })
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error
    })
  }
};
