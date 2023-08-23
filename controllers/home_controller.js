module.exports.home =  function(req,res){
    try{
        return res.render("home",{
            title: "Habit Tracker System | HTS"
        });
    }
    catch (err) {
        console.log('Error',err);
        return;
    }
}