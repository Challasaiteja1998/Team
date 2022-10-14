var dbConn = require('../dbconfig/dbconfig');

var category = function(ma){
  this.id                = ma.id;
  this.store_id            = ma.store_id;
  this.name            = ma.name;
  this.image                  = ma.image;
  this.orderin             = ma.orderin;
  this.status       = ma.status;
  this.addon_status             = ma.addon_status;
  
};
category.findById = function (id, result) {
    dbConn.query("Select * from data WHERE id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result.json(err, null);
    }
    else{
      console.log("res",res);
      result(null, res);
    }
    });
    };

    category.findAll = function (result) {
        dbConn.query("Select * from data", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{ 
          console.log('employees : ', res);
          result(null, res);
        }
        });
        };
        module.exports = category;