const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

//****************** MIDDLEWARES*****************
const app = express();

//Middleware for req.body
app.use(express.json());

//Our own Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//third party middleware
app.use(morgan('dev'));

// app.get('/', (req,res) => {
//     res.status(200).send('Hello from the Server Side')
// });

//Reading JSOn fiel and converting into JS object

//******************Functions**************** */

// app.get('/api/v1/tours',geAllTours);
//app.post('/api/v1/tours', createTour);

//  app.get('/api/v1/tours/:id',getTour);
//  app.patch('/api/v1/tours/:id', updateTour);
//  app.delete('/api/v1/tours/:id', deleteTour);

//***********************Routes********** */

//route mountings
//middleware for mounting the routers.
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//**************Server************** */
