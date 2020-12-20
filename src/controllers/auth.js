const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/auth');

exports.signup = (req,res) =>{
    
User.findOne({ email: req.body.email})
.exec((error,user) => {
    if(user) return res.status(400).json({
        message: 'User already registered'
    });

    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;
    
    const _user = new User({

        firstName,
        lastName,
        email,
        password,
        username : Math.random().toString(),
        

    });
    console.log('user created '+_user.firstName);
    
    // how data valu is set as user value
    _user.save((error,data) =>{
        if(error){
            console.log('error occured' + error + data);
            return res.status(400).json({
                message: 'Something went wrong'
            });
        }

        if(data){
            // console.log(data)
            return res.status(200).json({
                message:'User created successfully..!'
            })
        }
    });

});

}

exports.signin = (req,res) => {
    User.findOne({email: req.body.email})
    .exec((error ,use) => {


    })
}