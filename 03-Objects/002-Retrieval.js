"use strict";
/**
 * Created by .
 * User: chris
 * Date: 3/13/11
 * Time: 10:23 AM
 */
(function(){

    console.log(stooge["first-name"]); //Jerome
    console.log(flight.departure.IATA); //SYD
    console.log(stooge["middle-name"]); //undefined
    console.log(flight.status); //undefined
    console.log(stooge["FIRST-NAME"]); //undefined

    console.log(stooge["middle-name"] || "(none)"); //(none)
    console.log(flight.status || "unknown"); //unknown
    console.log(flight.number || "unknown"); //815

    //Guard against a TypeError exception using && operator
    console.log(flight.equipment); //undefined
    try{
        console.log(flight.equipment.status); //throw "TypeError"
    }catch(e){
        console.log("Caught exception:" + e);
    }
    console.log(flight.equipment && flight.equipment.status); //undefined



})();
