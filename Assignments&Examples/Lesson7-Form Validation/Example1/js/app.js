/**
* @ Form validation
* 
*/


window.onload = function() {
    var form = document.getElementById('login')
    form.addEventListener('submit',function(e){
        e.preventDefault();
        console.log(this.elements)
        //this.submit()
    })
    //form.submit()
}
/**
* @ create a registration form and has some validations like firstname and lastname should have minimum 3 characters,
*   password and confirm password should be same 
*/