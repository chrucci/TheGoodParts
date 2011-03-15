"use strict";
/**
 * Created by .
 * User: chris
 * Date: 3/13/11
 * Time: 11:14 AM
 */

function displayValue(){
    try {
    document.write("<br/><strong>start displaying:</strong><br/>");
    document.write(stooge["first-name"] + "<br/>");
    document.write(stooge["middle-name"] + "<br/>");
    document.write(stooge.nickname + "<br/>");
    document.write(flight.equipment.model + "<br/>");
    document.write(flight.status + "<br/>");
    } catch (e){}
}

displayValue();

stooge["first-name"] = "NotJerome";

stooge["middle-name"] = "Lester";
stooge.nickname = "Curly";
flight.equipment = {
    model: "Boeing 777"
};
flight.status = "overdue";

displayValue();