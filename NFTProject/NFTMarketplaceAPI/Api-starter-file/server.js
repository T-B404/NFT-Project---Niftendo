const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const app = require("./app");
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DBPASSWORD
);
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then((con) => {
    //console.log(con.connection);
    console.log("DB Connection Successfully");
  });


const port =process.env.PORT || 3000

app.listen(port,()=>{
    console.log('App running on port 3000....')
})