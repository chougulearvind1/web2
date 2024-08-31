var express=require('express')
const  router = express.Router();
const Register = require('../controller/Register');
const AddSalesEntry = require('../controller/AddSalesEntry');
const TotalSales = require('../controller/TotalSales');
const Revenue = require('../controller/Revenue');
const login =require('../controller/login')
// route with js file
try {
     router.post('/register',Register)
     router.post('/login',login)
     router.post('/AddSales',AddSalesEntry)
     router.get('/totalSales',TotalSales)
     router.get('/revenue',Revenue)
} catch (error) {
    console.log(error)
}
module.exports={routes:router}