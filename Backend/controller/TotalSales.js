var sales= require('../models/sales')
//send all data to show sheet of  sales record
const TotalSales = async (req,res) => {
    const salesData=await sales.find({}).lean()
    res.status(200).json({data:salesData})

}
module.exports=TotalSales;