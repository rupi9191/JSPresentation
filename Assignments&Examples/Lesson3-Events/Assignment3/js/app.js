/**
* @ unregister all the events and use getElementByTag method to register event to buttons
* 
*/
window.onload = function() {
    //caching the dom element
    var buttons = document.getElementsByTagName("button")
    for(var i=0,bl = buttons.length;i<bl;i++) {
        buttons[i].addEventListener('click',getButton)
    }
}
var getButton = function(event) {
    alert(event.target.getAttribute("id")+"Clicked")
}

