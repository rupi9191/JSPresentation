/**
*   accessing localstorage
*/

window.onload = function() {
    
}

var details = {
    name: "Rupesh",
    age: 25,
    hobbies: ["Watching Anime","Coin Collection","Folk Tales"],
    job: "Software Developer"
}

localStorage.setItem("details",JSON.stringify(details))

var local = localStorage.getItem("details")
console.log(local)
var localJson = JSON.parse(local)

console.log(localJson.name)
