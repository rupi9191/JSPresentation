/**
* @ create a registration form and has some validations like firstname and lastname should have minimum 3 characters,
*   password and confirm password should be same 
*/


window.onload = function() {
    var form = document.getElementById('registration')
    form.addEventListener('submit',function(e){
        e.preventDefault();
        var formElements = this.elements
        for(var i=0,fl=formElements.length;i<fl;i++) {
            if(formElements[i].name=="fname" || formElements[i].name=="lname") {
                if(formElements[i].value.length < 3){
                    alert(formElements[i].name+" "+"should have minimum of 3 characters")
                }
            }
        }
        if(formElements.namedItem('password').value != formElements.namedItem('confirmPassword').value)
                alert("Password and confirm password should be same")
        //this.submit()
    })
    //form.submit()
}
