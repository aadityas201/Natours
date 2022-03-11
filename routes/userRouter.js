const express = require('express');
const userController = require('./../controllers/userControllers');
const Router = express.Router(); //Router for Users.

Router.route('/')
  .get(userController.getAllUSers)
  .post(userController.createUser);
Router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = Router;
