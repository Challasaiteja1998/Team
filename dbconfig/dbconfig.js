const mysql = require('mysql');

const dbConn = mysql.createConnection({
  ipaddress     : '192.168.100.8',
  user     : 'root',
  password : 'Sai@3337',
  database : 'category'
});
dbConn.connect(function(err) {
  if (err) throw err;
//   dbConn.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
  console.log("Database Connected!");
});
module.exports = dbConn;