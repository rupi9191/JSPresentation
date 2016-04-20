/**
* Assignment time
* @created nested div's
* 
*/
window.onload = function() {
    var div1 = document.getElementById('div1')
    var div1Child = document.createElement('div')
    div1Child.innerHTML = "I am div1 Child"
    div1Child.setAttribute("id","div2")
    div1.appendChild(div1Child)
    var div2child = document.createElement('div')
    div1Child.innerHTML = "I am div2 Child"
    div1Child.appemdChild(div2child)
    
}

