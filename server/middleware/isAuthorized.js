const jwt=require('jsonwebtoken')

const isAuthorized=async(req,res,next)=>{
   
        const token = req.cookies.refreshToken;
      console.log(token)
        if (!token) return res.status(401).send({success:false,message:"Unauthorized"})
      
        jwt.verify(token, process.env.Refresh_Token_Secret, (err, user) => {
          if (err) return res.status(403).send({success:false,message:"Forbidden"})
          console.log(user)
          req.user = user;
          next();
        });
      };
      module.exports=isAuthorized