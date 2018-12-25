/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
  
  //testing
  console.log('...testing...')
  //console.log(convertHandler.getNum('4534.534/35abcABC'))
 // console.log(convertHandler.getNum('4534.53435abcABC')) 
  //console.log(convertHandler.getNum('4534534/35abcABC'))  
    console.log(convertHandler.getNum('123456')) 
console.log(convertHandler.getNum('123.456')) 
console.log(convertHandler.getNum('1/2')) 
 console.log(convertHandler.getNum('10.1/4')) 
 console.log(convertHandler.getNum('')) 
 //console.log(typeof(convertHandler.getNum('10.1/4'))) 
   
  
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
    console.log(req.query)
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
//    {initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', 
    //string: '3.1 miles converts to 5.00002 kilometers'}
    console.log(initNum)
    if((initNum == "invalid number") && (initUnit =="invalid unit"))
        { 
        console.log("ivalid both")
        res.send("invalid number and unit")
        } 
    
    else if (initNum == "invalid number") {
    console.log("invalid num")
      res.send("invalid number")
    }
    
    
    else if (initUnit == "invalid unit")
    {console.log("invalid unit?")
      res.send("invalid unit")
    } else {
    
    var result = {
    "initNum":initNum,
      "initUnit": initUnit,
      "returnNum": returnNum,
      "returnUnit":returnUnit,
      "string":toString
    }
    console.log(result)
      res.json(result)
    }
    });
  
};
