"use strict";
/**
 * Created by .
 * User: chris
 * Date: 3/13/11
 * Time: 11:29 AM
 */

if (typeof Object.create !== "function"){
    Object.create = function(o){
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}
var another_stooge = Object.create(stooge);
console.log("new object takes original objects values as defaults: " + another_stooge["last-name"]); //"Howard" got defaulted based on the Stooge prototype.
stooge["last-name"] = "Rucci";
console.log("stooge.lastname = " + stooge["last-name"]); //"Rucci"
console.log("new object hasn't been explicitly set yet, so it still takes its value from the original object: another_stooge.lastname = " + another_stooge["last-name"]); //"Rucci" Stooge's last name still treated as the default until another_stooges value is set.
another_stooge["last-name"] = "noob";
console.log("original changes independent from new objects values: stooge.lastname = " + stooge["last-name"]); //"Rucci"
console.log("new object accepts it's own value without change that of the original: another_stooge.lastname = " + another_stooge["last-name"]); //"noob" different reference from stooge.
stooge["last-name"] = "smith";
console.log("The linkage between new and original was broken when the new value was set: stooge.lastname = " + stooge["last-name"]); //"smith"
console.log("another_stooge.lastname = " + another_stooge["last-name"]); //"noob" different reference from stooge.