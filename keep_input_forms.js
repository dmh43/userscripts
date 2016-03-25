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

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

addJQuery(function () {
    jQ(function () {
        if (document.activeElement) {
            field = jQ(document.activeElement);
            field.change(function () {
                var tmp = field.val();
                var id = field.attr('id');
                //localStorage.setItem(id, tmp);
                console.log('logged' + tmp);
            });
        }
        jQ("input, textarea").focus(function() {
            field = jQ(document.activeElement);
            console.log('here');
            if (localStorage[field.attr('id')]) {
                //field.val(localStorage[field.attr('id')]); //add button or print to console? keep history in cookie?
                console.log('recorvering ' + localStorage[field.attr('id')]);
            }
                field.change(function () {
                    var tmp = field.val();
                    var id = field.attr('id');
                    localStorage.setItem(id, tmp);
                    console.log('logged ' + tmp);
                });
        });
    });
});
