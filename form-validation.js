
const displayMsg=(msg, id, colorname)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorname
}
const fnameValidate=()=>{
    const first_name = document.getElementById('fname').value
    if(first_name==""){
        displayMsg("First name is Mandatory","fnameMsg","red")
        return false
    }    
    else if(first_name.length<3){
        displayMsg("First name should contain more than 2 characters","fnameMsg","red")
        return false 
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg("First name should only contain alphabets","fnameMsg","red")
        return false
    }
    else{
        displayMsg("Valid first name","fnameMsg","green")
        return true
    }
    }


    const lnameValidate=()=>{
        const last_name = document.getElementById('lname').value
        if(last_name==""){
            displayMsg("Last name is Mandatory","lnameMsg","red")
            return false
        }    
        else if(last_name.length<3){
            displayMsg("Last name should contain more than 2 characters","lnameMsg","red")
            return false 
        }
        else if(!last_name.match(/^([a-zA-Z])+$/)){
            displayMsg("Last name should only contain alphabets","lnameMsg","red")
            return false 
        }
        else{
            displayMsg("Valid last name","lnameMsg","green")
            return true
        }
        }
//regular expression

//  /...regular expression goes inside this.../
// ^ is used to check from the start
// $ is used to check from the end
// [a-z] -> matches lowercase alphabets
// [A-Z] -> matches uppercase alphabets
// [a-zA-Z] -> matches all alphabets
// [0-9] -> matches numeric values
// [a-z0-9] matches all alphanumeric values
// {minValue, maxValue} ->eg:{3,50}
// for special characters use \ eg: \@, \#, \_ etc.
// ?= ->it means position of characters does not matter
// . -> it matches the single character
// * -> it matches one or more preceding characters


const emailValidate=()=>{
    const email = document.getElementById('email').value 
    if (email==""){
        displayMsg("Email field cannot be blank", "emailMsg","red")
        return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\-\_]+\@+([a-z])+\.+([a-z])+$/)){
        displayMsg("Invalid format", "emailMsg","red")
        return false
    }
    else{
        displayMsg("valid email", "emailMsg","green")
        return false
    }
}


const pwdValidate=()=>{
    const password = document.getElementById('email').value 
    if (password==""){
        displayMsg("Password field cannot be blank", "pwdMsg","red")
        return false
    }
    else if(!password.match(/^(?=)/)){
        displayMsg("Weak password", "pwdMsg","red")
        return false
    }
    else{
        displayMsg("Strong password", "pwdMsg","green")
        return false
    }
}

