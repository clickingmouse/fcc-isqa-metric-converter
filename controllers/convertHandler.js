/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
   
  this.getNum = function(input) {
    var result;
    // remove alphabets then convert to int
    //I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), 
    //but if nothing is provided it will default to 1.
    
    var noUnits=input.replace(/\D+$/g,'')
    //console.log(noUnits)
    result="invalid number"
    input=input.replace(/\D+$/g,'');
    console.log("-------------"+input)
    
    //eval()
    //check if str only has numbers (no decimals or chars)
    //console.log(/\D/.test("123456"))
    if (/\D/.test(input)){
      //console.log("------")
      console.log(input +" not pure numerals")
      // check if have decima l or /
      //console.log("+++++++++++++++")
      
     // check of invalid sequence ".." or "//" or "./"  
      
//console.log(/\.\d*\//.test("123.45/6"))
         if ( /^\d*\.\d*\/\d*$/.test(input))
    {
      var str=input.split(".")
      result = parseInt(str[0]) + eval(str[1])
    //console.log(input + " has / & . -->" +result +"=> "+ typeof(result))
      //result=1
    }    
    //have /
   // console.log(/\//.test("12.345/6"))
     else if (/^\d*\/\d*$/.test(input)) 
    //else if (/\//.test(input))
    {
      result =eval(input)
    //console.log(input + " has / -->" +result +"=> "+ typeof(result))
      
    }    
    
    //have decimal      
    else if  (/^\d*\.\d*$/.test(input)){
      result=parseFloat(input)
      
    //console.log(input + " has . -->" +result +"=> "+ typeof(result))
    }
      
      
    } else {
      //console.log(input + " only has numbers")
      result = parseInt(input)

    }
      
    
    

//console.log("input no matches")
    
    if (input =="") {result =1} 
     
    return (result); 
  };
  ////////////////////////////////////////////////////////////////////////
  this.getUnit = function(input) {
    var result;
    //console.log("function getUnit() --"+input)
    result=input.replace(/[0-9./]/g, '');
    
    //console.log("after replace "+result)
    //console.log("["+result+"]")
    if (/^gal|^l|^kg|^lbs|^km|^mi|^GAL|^L|^KG|^LBS|^KM|^MI/i.test(result))
    {
      //console.log(result + " is valid")
    return result;
    } else {
      //console.log("invalid unit") 
      return "invalid unit"}
  }; 
  
  this.getReturnUnit = function(initUnit) {
    initUnit=initUnit.toLowerCase()
    var result;
    //console.log("function ======>"+initUnit)
    switch (initUnit){
      case "gal":
        result="l"; 
        break; 
      case "l":
        //console.log(initUnit +"-------------- to gal")
        result ="gal"
        break;
      case "lbs":
        result="kg"
        break;
      case "kg":
        result = "lbs"
        break;
      case "mi":
        result = "km"
        break;
      case "km":
        result="mi"
        break;    
      default: 
        result="invalid unit"
        break;
                    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    //console.log("get "+ unit)
    unit=unit.toLowerCase()
    var result;
       switch (unit){
      case "gal":
        result="gallons"; 
        break; 
      case "l":
        result ="litres"
        break;
      case "lbs":
        result="pounds"
        break;
      case "kg":
        result = "kilograms"
        break;
      case "mi":
        result = "miles"
        break;
      case "km":
        result="kilometers"
        break;    
         default: result="invalid unit"
           break
                    }
    //console.log(result)
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result; // num expected
    initUnit=initUnit.toLowerCase()
    //console.log(initNum+"["+initUnit+"]")
        switch (initUnit){
      case "gal":
        result=initNum * galToL; 
        break; 
      //case /l/i.test(initUnit):
      //case initUnit.match(/l/i):
          case "l":
           // console.log("convert litres"+initNum)
        result =initNum / galToL
        break; 
      case "lbs":
        result=initNum * lbsToKg
        break;
      case "kg":
        result = initNum / lbsToKg
        break;
      case "mi":
        result = initNum * miToKm
        break;
      case "km":
        result= initNum / miToKm
        break;    
         default: result="invalid unit"
           break
                    }
    //console.log(result)
    return result;
  };
   
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    //{initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', 
    //string: '3.1 miles converts to 5.00002 kilometers'}
result = initNum +" " + this.spellOutUnit(initUnit) + " converts to " +  returnNum + " " +this.spellOutUnit(returnUnit)
    return result;
  };
  
}

module.exports = ConvertHandler;
