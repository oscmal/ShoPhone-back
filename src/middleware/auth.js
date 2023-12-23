const jwt = require('jsonwebtoken');
const isAuthenticated = async (req,res,next)=>{
    try {
        const {authorization} = req.headers;
        if(!authorization){
            return next('Please login to access the data');
        }
        const verify = await jwt.verify(authorization,process.env.SECRET_KEY);
        next();
    } catch (error) {
       return next(error); 
    }
}

module.exports = isAuthenticated;