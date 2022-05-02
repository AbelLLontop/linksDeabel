const {validationResult} = require('express-validator');

const validateResult = (req,res,next)=>{
    try{
        validationResult(req).throw();
        next();
    }catch(err){
        console.log('un error en la conexion');
        res.status(403).json(err);
    }
}

module.exports = validateResult;