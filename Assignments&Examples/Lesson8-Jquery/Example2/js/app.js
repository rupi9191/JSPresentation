/**
*   Jquery dom
*/

$(document).ready(function() {
    //multiple selectors
//    parent > child	$("div > p")	All <p> elements that are a direct child of a <div> element
    
    $("#parent>p").css("color","#0ff")
//    parent descendant	$("div p")	All <p> elements that are descendants of a <div> element
    $("#parent p").css("font-weight","bold")
//    element + next	$("div + p")	The <p> element that are next to each <div> elements
    $("#parent+p").css("font-family","courier")
//    element ~ siblings	$("div ~ p")	All <p> elements that are siblings of a <div> element
    $("#parent~p").html("We are all #parent siblings")
    
    //traversing>filtering
    var $div = $("#parent p")
    $div.eq(1).css("font-size","50px")
    var $div1 = $('#parent p:nth-child(3)')
    $div1.css("background-color","#ff0")
})

