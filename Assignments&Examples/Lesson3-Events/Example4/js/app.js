/**
* @ dynamically registering the events
* 
*/
window.onload = function() {
    //caching the dom element
    var input = document.getElementById('someText')
    input.addEventListener('change',function(){
        alert("Text Changed!")
    })
    var block = document.getElementById('block')
    block.addEventListener('mouseover',function(e){
         e.target.style.backgroundColor = "#0f0"                 
    })
    block.addEventListener('mouseout',function(e){
         e.target.style.backgroundColor = "#000"                 
    })
}


/**
* @ use input type[color] and change background color of page on selection
* 
*/