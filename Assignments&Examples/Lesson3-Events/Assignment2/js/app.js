/**
* @ add a new button and event handler for it, and change its color when clicked
* 
*/
window.onload = function() {
    
}
function buttonClick(el) {
    console.log(el)
    if(el.innerHTML === "Click Me!")
        el.innerHTML = "Unclick me!"
    else 
        el.innerHTML = "Click Me!"
}
var eventPassing = function(event) {
    console.log(event)
     if(event.target.innerHTML === "Click Me!")
        event.target.innerHTML = "Unclick me!"
    else 
        event.target.innerHTML = "Click Me!"
}
var eventAndElementPassing = function(event,element) {
    element.style.backgroundColor = "#0f0"
    element.style.color = "#fff"
}
