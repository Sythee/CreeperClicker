/*jslint browser: true*/
/*global $, jQuery, alert*/

var current_gold = 0;



function creepClick(number) {
    'use strict';
    current_gold = current_gold + number;
    document.getElementById("current_gold").innerHTML = current_gold;
    document.getElementById("current_gold").style.color = "white";
    document.getElementById("current_gold").style.position = "absolute";
    document.getElementById("current_gold").style.marginLeft = 535;
    document.getElementById("current_gold").style.paddingTop = 257;
}
