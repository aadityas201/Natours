const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

//****************** MIDDLEWARES*****************
const app = express();

//Middleware for req.body
app.use(express.json());

//Middle ware for serving static files
app.use(express.static(`${__dirname}/public`));

//Our own Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//third party middleware
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}


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

app.all('*', (req, res, next) => {
 next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

//**************Server************** */
module.exports = app;