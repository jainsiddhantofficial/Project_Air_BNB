const User = require("../models/user.js");
module.exports.signup=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.createUser=async (req,res,next)=>{
    try{
        let {username,email,password}=req.body;
        const newUser = new User({username,email});
        const registedUser=await User.register(newUser,password);
        console.log(registedUser);
        req.login(registedUser,(err)=>{
          if(err){
            return next(err);
          }
          req.flash("success","Welcome to Wanderlust!!");
          res.redirect("/listings");
        });
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};


module.exports.login=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.loginUser=async(req,res)=>{
    req.flash("success","Welcome to Wanderlust!!");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
    };    

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
      if(err){
        next(err);
      }
      req.flash("success","You are logged out !!");
      res.redirect("/listings");
    });
  };