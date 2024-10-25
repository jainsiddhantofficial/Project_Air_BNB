const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/users.js");
router.route("/signup")
.post(wrapAsync(userController.createUser))
.get(userController.signup);
router.route("/login").get(userController.login)
.post(saveRedirectUrl,passport.authenticate("local", { failureRedirect: "/login",failureFlash :true}),userController.loginUser);
router.get("/logout",userController.logout);
module.exports=router;






// const validateUser=(req,res,next)=>{
//     let {error}=userSchema.validate(req.body);
//       if(error)
//       {
//         let errMsg=error.details.map((el)=>el.message).join(",");
//         console.log(error);
//         throw new ExpressError(400,errMsg);
//       }else
//       {
//         next();
//       }
//   };