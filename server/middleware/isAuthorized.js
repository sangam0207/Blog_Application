const jwt=require('jsonwebtoken')

const isAuthorized=async(req,res,next)=>{
   
  const authHeader = req.headers.authorization||req.headers.Authorization;
  if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized user ' });
  }
    
   const token = authHeader.split(' ')[1];
   console.log(token)
        if (!token) return res.status(401).send({success:false,message:"Unauthorized"})
      
        jwt.verify(token, process.env.Access_Token_Secret, (err, user) => {
          if (err) return res.status(403).send({success:false,message:"Forbidden"})
          console.log(user)
          req.user = user;
          next();
        });
      };
      module.exports=isAuthorized