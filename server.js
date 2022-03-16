const app = require('./app');
const dotenv = require('dotenv'); 

dotenv.config({path: './.env'})
console.log(process.env);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
