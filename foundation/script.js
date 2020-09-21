let form = document.getElementById("form");
let fullName = document.getElementById("fullName");
let email = document.getElementById("mail");
let phoneNumber = document.getElementById("phone");
let address = document.getElementById("address");
let message = document.getElementById("message");
let fullNameRegex = "/^(a-z|A-Z|0-9)*[^#$%^&*()']*$/";
let emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
let phoneNumberRegex = /^[\+]?[0-9]{10,14}$/i;
// let education = document.getElementById("education")
// button = document.getElementById("button")

function requried(field,error1, error2, regex, event){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
        return false;
    }else if (!field.value.match(regex)){
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validation(e){
   requried(fullName,"Please enter your Full name", "Please Full Name can only contain letters.",fullNameRegex, e); 
    requried (email, "Please enter your Email address", "Please enter a valid email",emailRegex, e);
    requried (address, "enter your address" );
    requried (phoneNumber, "Please enter your phone number", "Please enter a valid phone number", phoneNumberRegex, e);

    return true
}
form.addEventListener('submit', validation)

// education.addEventListener('change', function(){
    
//     if(education.value === ''){
//         button.disabled = true;
//     }
//     else{
//         button.disabled = false;
//     }

// });