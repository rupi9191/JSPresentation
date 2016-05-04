/**
*   Jquery form submit
*/

$(document).ready(function() {
    var form = $("#google")
    form.submit(function(e){
        e.preventDefault()
        this.submit()
    })
})

