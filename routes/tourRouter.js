
const tourController = require('./../controllers/tourControllers');
const express = require('express');
const { router } = require('../app');
const Router = express.Router();
Router.param('id', tourController.checkID)



Router.route('/')
  .get(tourController.geAllTours)
  .post(tourController.checkBody, tourController.createTour);
Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
