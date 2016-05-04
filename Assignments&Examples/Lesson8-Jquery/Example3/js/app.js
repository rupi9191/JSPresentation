/**
*   Jquery ajax
*/

var url = "http://api.icndb.com/jokes/random/"
$(document).ready(function() {
    
    $("#searchBtn").click(function(e){
        var keyword = $("#search").val()
        var reg = /\d/g
        
        if(!keyword) {
            alert("Field should not be empty")
            return
        }
        if(reg.test(keyword)){
            alert("only numbers are accepted")
            return
        }
        $.ajax({
            url: url+keyword,
            method: 'GET',
            success: function(response) {
                var jokeList = $("#jokes"), jokes=""
                $.each(response.value,function(index,joke){
                    //jokes += "<li>"+joke.joke.replace("Chuck Norris","Rupesh")+"</li>"
                   jokes += "<li>"+joke.joke+"</li>"
                })
                jokeList.html(jokes)
            }
        })
    })
    
})

