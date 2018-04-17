/*
    Name: Raymond Lee
    Date: 16th APR 2018
    Section: CSE 154 AN
    TA: Daniel Tsu

    This is the script for all the possible events on the quadratic solver page
*/

// Loads all the possible events that may occur on the page
window.onload = function() {
    document.getElementById("calc_btn").onclick = calculate;
    document.getElementById("logo").onclick = move;
    document.getElementById("logo").onmouseover = change;
    document.getElementById("logo").onmouseout = changeBack;
}

// When the mouse is not above the element, the inner HTML of the elements changes
function changeBack() {
    document.getElementById("logo").innerHTML = "TWO PLUS THREE";
}

// When the mouse is above the element, the inner HTML of the element changes
function change() {
    document.getElementById("logo").innerHTML = "SEVENTEEN";
}

// If the element is clicked, it changes the page to the main page
function move() {
    window.location = "index.html";
}

// This calculates the two roots of the quadratic equation entered on the page 
// then displays it on the output section of the page
function calculate() {
    let first = document.getElementById("a").value;
    let second = document.getElementById("b").value;
    let third = document.getElementById("c").value;

    let root1 = (-second + Math.sqrt(Math.pow(second, 2) - 4 * first * third)) / 4 * first * third;
    let root2 = (-second - Math.sqrt(Math.pow(second, 2) - 4 * first * third)) / 4 * first * third;

    document.getElementById("output1").innerHTML += root1;
    document.getElementById("output2").innerHTML += root2;
}