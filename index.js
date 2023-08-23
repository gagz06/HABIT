const express = require('express');
const app = express();
const port = 8001;

app.use(express.static('./assets'));
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
if(err){
    console.log(err);
}
console.log('Server running on port',port);
});