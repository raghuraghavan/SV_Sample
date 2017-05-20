var express = require("express");
var router = express.Router();
var reqHandler = require('../../Framework/requestHandler');
var dbConfig = require('../../Framework/db');

var perfData = {
    loadPerfData : function(request,response){
        if(request != null){
            var objRequestObj = reqHandler.dismatleRequest(request);
            if (objRequestObj !== null && objRequestObj.param !== null) {
                try {                                 
                    //console.log(objRequestObj);
                    var mongojs = require("mongojs");
                    var db = mongojs("PerformanceDB", ["PerfData_Collection"]);
                    db.PerfData_Collection.save(objRequestObj);
                    response.status(200).json("sucess").end();
                    db.close();
                } catch(e) {
                    console.log(e.message);
                }
            } 
            else 
            {
                response.status(900).json("Improper Request data was send (or) not Request data was retrived from caller").end();
            }
        }
    }   
}

module.exports = perfData