const mongoose = require('mongoose');
//schema created for sales record
const  sales = mongoose.Schema({
    SalesId:{
        type:String,
        
    },
    ProductName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    }
})
// SailId autometically created added before new  document add  
sales.pre('save',async function(next){
    try {
        if(this.isNew){
        const prefix='Sales-';
        //collect sailid whoes pattern start with prefix and then sort for get last added document 
        const lastSale= await this.constructor.findOne({SalesId:{$regex:`^${prefix}`}}).sort({SalesId:-1})
        console.log(lastSale)
        let nextNumber=1;
        if(lastSale && lastSale.SalesId){
            //get last digits numbers for increment  
            const lastNumber = parseInt(lastSale.SalesId.replace(prefix,''))
            if(!isNaN(lastNumber)){nextNumber=lastNumber + 1}
        }
         this.SalesId =`${prefix}${nextNumber}`
         console.log(this.SalesId,'sale id');
    }  
    next();
    } catch (error) {
        console.log(error,'error');
        
    }
});
const Sales = mongoose.model('Sales',sales);
module.exports=Sales;