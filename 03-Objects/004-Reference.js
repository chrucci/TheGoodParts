"use strict";
/**
 * Created by .
 * User: chris
 * Date: 3/13/11
 * Time: 11:22 AM
 */

var x = stooge;
stooge.nickname = "Moe";
x.nickname = "Shemp";

console.log(stooge.nickname); //Shemp because it's changed by reference

var a = {}, b = {}, c = {};
a.test = "lala";
console.log(c.test); //undefined because a, b, and c all have different references.

a = b = c = {};
a.foo = "bar";

console.log(c.foo); //"bar" because a b and c all share the same reference.




