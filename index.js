/*
    Name: Raymond Lee
    Date: 16th APR 2018
    Section: CSE 154 AN
    TA: Daniel Tsu

    This is the script for all the possible events on the index page
*/

// Loads all the possible events that may occur on the page
window.onload = function() {
    document.getElementById("logo").onclick = move;
    document.getElementById("logo").onmouseover = change;
    document.getElementById("logo").onmouseout = changeBack;
}

// When the mouse is not above the element, the inner HTML of the elements changes
function changeBack(x) {
    document.getElementById("logo").innerHTML = "TWO PLUS THREE";
}

// When the mouse is above the element, the inner HTML of the element changes
function change(x) {
    document.getElementById("logo").innerHTML = "SEVENTEEN";
}

// If the element is clicked, it changes the page to the main page
function move() {
    window.location = "index.html";
}