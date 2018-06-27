var dbconnection = function () {
    var mysql = require('mysql');
    var sql = mysql.createConnection({
        host : 'localhost',
        port : 3306, // use your mysql port
        database: 'db_idw_demo',//use your own database name
        user : 'root',
        password : ''
    });
    sql.connect(function(err){
        if(err!=null) {
            console.log(err);
        }
        else {
            console.log("DB Connection successfully made");
        }
    });
    return sql;
};
exports.dbConnection = dbconnection;

