const fs = require('fs');
const tourController = require('./../controllers/tourControllers');
const express = require('express');

const tours = JSON.parse(
  //Converts json data into JAvascript object.
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const Router = express.Router();
Router.route('/')
  .get(tourController.geAllTours)
  .post(tourController.createTour);
Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
