const {validationResult} = require('express-validator');

const validateResult = (req,res,next)=>{
    try{
        validationResult(req).throw();
        next();
    }catch(err){
        res.status(403).json({error:err});
    }
}

module.exports = validateResult;