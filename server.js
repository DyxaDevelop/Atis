var path = require('path');
var express = require('express');
var firebase = require("firebase/app");

require("firebase/database");

const bodyParser = require("body-parser");


var app = express();
var fs = require('fs');

const urlencodedParser = bodyParser.urlencoded({ extended: false });



// Your web app's Firebase configuration
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


app.use(express.static(path.join(__dirname, 'public')));
var thanks = fs.readFileSync('./thanks.html');
var errorpage = fs.readFileSync('./error.html');

app.post("/message", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const key = database.ref('/clients/').push().getKey();

    database.ref('/clients/').child(key).set({
        "Name": request.body.name,
        "E-mail": request.body.email,
        "City": request.body.city,
        "Number": request.body.number,
        "Preferences": request.body.preferences
    }, function (error) {
        if (error) {
            console.log(error);
            response.end(errorpage);
        } else {
            response.end(thanks);
        }
    });
});


var index = fs.readFileSync('./index.html');
app.get('/', function (req, res) {
    res.end(index);
});
console.log('Server is started!');
app.listen(3000);