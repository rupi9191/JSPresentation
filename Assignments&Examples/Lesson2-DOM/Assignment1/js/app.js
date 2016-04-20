/**
* Assignment time
* @log the header's text
* @change paragraph's font-size to 40 
* @change font-color of span to green
* @give a class to div and access div element using class 
*/

window.onload = function() {
    var header1 = document.getElementById("headerId");
    header1.innerHTML = "I am not a header please do not call me that";
    console.log(header1.innerHTML)
    var paragraph = document.getElementById("paragraphId");
    paragraph.style.color = "#FF0000";
    paragraph.style.fontSize = "40px"
    var spans = document.getElementsByClassName("sClass");
    spans[0].style.fontSize = "30px";
    spans[0].style.color = "#7CFC00";
    var divs = document.getElementsByClassName("dClass")
    console.log(divs[0].innerHTML)
}