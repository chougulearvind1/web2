const sales = require('../models/sales');


const AddSalesEntry = async(req,res) => {
    //req.body data added to moongose
    const {productName,quantity,Amount}=req.body;
    if(!productName || !quantity ||!Amount){
        return res.status(400).json({message :'all feild required'})
    }
    const newSales=new sales({ProductName:productName,quantity:quantity,Amount:Amount})
    await newSales.save();
     return res.status(200).json({message:'sales Added'})
}
module.exports=AddSalesEntry