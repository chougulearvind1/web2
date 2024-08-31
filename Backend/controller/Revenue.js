const sales= require('../models/sales')

const Revenue = async (req,res) => {
    //aggrigate method is used for  calculate total amount 
    const result=await sales.aggregate([
        {
            $group:{
                _id:null,
                totalAmount:{$sum:'$Amount'}
            }
        }
    ])
    
    const total=await  result.length>0?result[0].totalAmount:0;
    return res.status(200).json({Total:total});
}
module.exports=Revenue