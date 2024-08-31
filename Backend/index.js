const express = require('express');
const cors = require('cors');
  const mongoose = require('mongoose');
const {routes}  = require('./routes/routes');
const app =express();
app.use(cors());
app.use(express.json())
app.use('/API',routes);
// connecting to  mongoose
mongoose.connect('mongodb://localhost:27017',{
  family: 4
})
.then(()=>console.log(' mongoose connected'))
.catch((error) => {console.log("error while connecting",error)});


//express  server start 
app.listen(5000,async () => { 
    console.log('server running on http://localhost:5000');
     
 })