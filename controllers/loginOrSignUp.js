module.exports.loginOrSignup=  function(req,res){
    try{
        return res.render("loginSignup",{title:"Login or Sign Up"});
    }
    catch(err){
        console.log(err);
    }
}

