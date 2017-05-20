"use strict";

var RequestHandler =  {
    dismatleRequest : function(request){
        if (request !== null) {
            var reqParamObj = {};
            var method = request.method;
            try {
                if (method === "GET" || method === "DELETE") {
                    reqParamObj = JSON.parse(request.query.query);
                } else if (method === "POST" || method === "PUT") {
                    reqParamObj = request.body;
                }
                var ip =
                    request.headers["x-forwarded-for"] ||
                    request.connection.remoteAddress ||
                    request.socket.remoteAddress ||
                    request.connection.socket.remoteAddress;
                console.log("Requested from IP -->  " + ip);
            } catch (error) {
                console.log("In the Request Handler --> Error Occurred....");
                console.log("Error Message : " + error.message);
                console.log("Error Stack  : " + error.stack);
                throw error;
            }
            if (reqParamObj) {
                console.log(
                    "Request Received   @  : " +
                    new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                        .toLocaleString()
                );
                return reqParamObj;
            } else {
                // commented in the request validation above...   && reqParamObj.param.requestId
                return "Empty_requestId";
            }
        }
    }
}

module.exports = RequestHandler;