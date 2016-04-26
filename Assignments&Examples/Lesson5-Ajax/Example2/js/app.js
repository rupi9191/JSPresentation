/**
* @simple example of ajax
* @accessing json data
*/
window.onload = function() {
    
}
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.send();
/**
* Accessing json data
*/
var loadJokes = function(){
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var jokes = JSON.parse(xhttp.responseText)
        jokes = jokes.value
        var ul = document.getElementById("jokes")
        for(var i=0,jl=jokes.length;i<jl;i++) {
            var li = document.createElement('li')
            li.innerHTML = jokes[i].joke
            ul.appendChild(li)
            
        }
    }
  };
  xhttp.open("GET", "http://api.icndb.com/jokes/random/10", true);
  xhttp.send();
}
/**
* @ Do the same by replacing ul with div and li with p 
* @ render only 5 jokes and jokes should be refreshed every time you click jokes button
*/


