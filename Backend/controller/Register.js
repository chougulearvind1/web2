const User = require('../models/user');
const Register = async (req,res) => {
    try {
        const {firstName,lastName,email,password}=req.body;
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({message:'all field required '})
        }
        //check email pattern format if not in pattern then it is invalid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message:'invalid Email'})
        }
        //check email not added earlier ,ensure this first time to register
        const check_unique  = await User.findOne({email});
        if(check_unique)
        {
            return res.status(400).json({message:'Email Already Registered'})
        }
        const newUser= new User({FirstName:firstName,LastName:lastName,Email:email,password:password});
        const result = newUser.save();
        if(result){
            res.status(201).json({message:'User Registered'})
        }

    } catch (error) {
     console.log(error);
    }
}
module.exports=Register;