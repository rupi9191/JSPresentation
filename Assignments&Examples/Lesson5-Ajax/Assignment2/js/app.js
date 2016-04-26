/**
* @ Do the same by replacing ul with div and li with p 
* @ render only 5 jokes and jokes should be refreshed every time you click jokes button
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
        var div = document.getElementById("jokes")
        while(div.hasChildNodes() ){
            div.removeChild(div.lastChild);
        }
        for(var i=0;i<5;i++) {
            var p = document.createElement('p')
            p.innerHTML = jokes[i].joke
            div.appendChild(p)
                     
        }
    }
  };
  xhttp.open("GET", "http://api.icndb.com/jokes/random/10", true);
  xhttp.send();
}



