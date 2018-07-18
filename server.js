// Load Express
var express = require('express');
var app     = express();
var ip      = '127.0.0.1';
var port    = 8888;
  
// Set static folder
app.use(express.static('public'));
 
// Setup template engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    layoutsDir: "frontend/src/views/layouts",
    defaultLayout: "main.handlebars"
}));
app.enable('view cache');
app.set('view engine', 'handlebars');
app.set('views', 'frontend/src/views/');
 
// Start a server and listens on port 8888
var server = app.listen(port, function() {
    console.log('Isomorphic JavaScript Blog listening at http://%s:%s', ip, port);
});
  
app.get('*', function(req, response){
    response.render("index.handlebars", {
        message: "Welcome to Blog by DriveSoftCenter.Net"
    });
});