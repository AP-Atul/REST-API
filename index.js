// main server code
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const mysql          = require('mysql');

// sql connections
var db_config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "rapi"
};

// handling connection lost
var con;
function handleDisconnect() {

  con = mysql.createConnection(db_config); 

  con.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }                                     
  });                                     
                                         
  con.on('error', function(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                     
      throw err;                                  
    }
  });

}
handleDisconnect();

// parse application/x-www-form-urlencoded && application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// endpoints definition
require('./routes')(app, con);

// port definition for server
var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});