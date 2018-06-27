
var dbConnector = require('./DB_Connector');
var connection = dbConnector.dbConnection();

exports.productAdd = function (params, socket) {

    connection.query('INSERT INTO tbl_product SET ?', params, function (err, rows) {
        var recordAdded = false;

        if(err != null) {
            console.log(err);
        }else {
            if(rows['affectedRows'] == 1) {
                recordAdded = true;
                //insertId: 15,
            }
        }

        socket.emit('res_product_add', { added : recordAdded });
    });

};

exports.getAllProducts = function (callFunc) {
    connection.query('SELECT * FROM tbl_product', function (err, rows) {
        if(err!=null) {
            console.log(err);
        } else {
            callFunc(rows);
        }
    });
};


















