/**
* @ Factory function/Maker function
* @ Constructor function
* 
*/

var fullName = function(first,last) {
    return {
        firstName: first,
        lastName: last,
        getFullName: function() {
            return this.firstName+" "+this.lastName;
        }
    };
}

var person = fullName("Rupesh","B")
console.log(person.firstName)

//constructor function

var Info = function(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName+" "+this.lastName;
    }
}

var info = new Info("Rupesh","B")
console.log(info.getFullName())

/**
* @ Create a constructor and factory function with your details like name,age,phone number,hobbies etc
* 
*/