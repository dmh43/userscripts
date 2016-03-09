// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/OpenUserJs/OpenUserJS.org/wiki/Tampermonkey-for-Chrome
// @grant        none
// @include      *
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

var input_elems = document.getElementsByTagName("input");
console.log(input_elems)
for (var key in input_elems) {
    var elem;
    elem = input_elems[key];
    if (localStorage[elem.id]) {
        elem.value = localStorage[elem.id];
        console.log(localStorage[elem.id]);
    }
    if (typeof elem === "object") {
        elem.onchange = function () {
            var tmp = this.value;
            var id = this.id;
            localStorage.setItem(id, tmp);
        }
    }
}