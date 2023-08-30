const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8001;
const db= require('./config/mongoose');

app.use(express.urlencoded());

app.use(express.static('./assets'));
app.use('/',require('./routes'));

//app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');   
app.set('views','./views');
app.listen(port,function(err){
if(err){
    console.log(err);
}
console.log('Server running on port',port);
});