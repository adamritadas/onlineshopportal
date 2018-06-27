

exports.validateCredentials = function (params, socket) {

    var isvalidated = false;

    if(params.email == "admin@idw.com" && params.password == "123456") {
        isvalidated = true;
    }

    socket.emit('res_login', { validated : isvalidated } );

};