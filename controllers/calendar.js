module.exports.loadCalendar=  function(req,res){
    try{
        return res.render("calendar",{
            title: "Habit Tracker System | HTS"
        });
    }
    catch(err){
        console.log(err);
    }
}

