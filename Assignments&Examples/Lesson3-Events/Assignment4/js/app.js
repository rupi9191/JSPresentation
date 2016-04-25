/**
* @ use input type[color] and change background color of page on selection
* 
*/
window.onload = function() {
    //caching the dom element
    var input = document.getElementById('colorPicker')
    input.addEventListener('change',function(e){
        var color = e.target.value
        document.body.style.backgroundColor = color
    })

}

