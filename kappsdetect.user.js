// ==UserScript==
// @name         kappsdetect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://127.0.0.1:8185/racing-overlay/*
// @grant        window.close
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

var kappsurl=window.location
var wtitle=""
var wwidth=""
var wheigth=""
var wtop=0
var wleft=0

var overlay = String(window.location).split("standings")
if(overlay.length > 1){
    wtitle="Standings"
    wwidth=1110
    wheigth=420
} else {
    wtitle="Relatives"
    wwidth=430
    wheigth=250
    wtop=480
}

document.title=wtitle
document.body.style.background="#000000"
window.resizeTo(wwidth,wheigth)
