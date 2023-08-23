module.exports.loginOrSignup=  function(req,res){
    try{
        return res.render("loginSignup",{title:"login"});
    }
    catch(err){
        console.log(err);
    }
}

