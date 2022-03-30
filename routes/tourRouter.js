
const tourController = require('./../controllers/tourControllers');
const express = require('express');
const { router } = require('../app');
const Router = express.Router();
// Router.param('id', tourController.checkID)

Router.route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.geAllTours)


Router.route('/tour-stats').get(tourController.getTourStats);
Router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

Router.route('/')
  .get(tourController.geAllTours)
  .post(tourController.createTour);
Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
