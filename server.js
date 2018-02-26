// Pull in all required dependencies
let express = require("express");
let bodyParser = require("body-parser");
let expressHandlebars = require("express-handlebars");
let methodOverride = require("method-override");

let PORT = process.env.PORT || 3000;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at PORT:" + PORT);
});