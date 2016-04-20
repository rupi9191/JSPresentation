/**
* creating child the element
* 
* 
*/
window.onload = function() {
    var div = document.getElementById('parent')
    var child = document.createElement('p')
    child.innerHTML = "I am a child"
    div.appendChild(child)
}


/**
* Assignment time
* @created nested div's
* 
*/