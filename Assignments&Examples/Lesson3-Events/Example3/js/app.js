/**
* @ dynamically registering the events
* 
*/
window.onload = function() {
    //caching the dom element
    var button = document.getElementById("button1")
    button.addEventListener('click',function(event){
         alert("Clicked!")
    })
    var buttons = document.getElementsByClassName("btnClass")
    for(var i=0,bl = buttons.length;i<bl;i++) {
        buttons[i].addEventListener('click',getButton)
    }
}
var getButton = function(event) {
    alert(event.target.getAttribute("id")+"Clicked")
}

/**
* @ unregister all the events and use getElementByTag method to register event to buttons
* 
*/