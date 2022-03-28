
const dotenv = require('dotenv'); 
const mongoose = require('mongoose')
const Tour = require('./models/tourModel') 

dotenv.config({path: './.env'})
// console.log(process.env);
const port = process.env.PORT;
const app = require('./app');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)


mongoose.connect(DB,{
  useNewUrlParser : true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true

}).then(() => {
  // .connect returns a promise whihc is handled by then
  console.log("Connected to the Database");
})


app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

