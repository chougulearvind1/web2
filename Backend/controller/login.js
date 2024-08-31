const User = require('../models/user');
const login = async (req,res) => {
    try {
        // valdiation added with both feild required,cheack email-if emial not found send to resp,check match password or not 
        const {email,password} = req.body;
            console.log(email,'email',password);
            if(!email || !password){
                return res.status(400).json({message : 'both feild required for login'})
            }
            const user =await User.findOne({Email:email});
            if(!user){
                return res.status(400).json({message :'Email not registerd wiht us  yet '})
            }
        if(user.password === password){
            return res.status(200).json({message:'Login sucessful',Login:true})
        } else{
            return res.status(400).json({message:'check you entered data',Login:false})
        }
    } catch (error) {
        console.log(error,'error');
    }
    
}
module.exports=login