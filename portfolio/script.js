const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const nameRegex =  /^(a-z|A-Z|0-9)*[^#$%^&*()']*$/;
const emailRegex = "/^+([]?+)*@+([-]?+)*({2,6})+$/";
const work = document.getElementsByClassName("work");
const port = document.getElementsByClassName("port");
const con = document.getElementsByClassName("con");
const contact = document.getElementsByClassName("contact");
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");


function required( field ,  error1, error2, regex, event){
    if(field.value === ""){
        field.nextElementSibling.innerHTML = error1
        event.preventDefault()
    }else if(!name.value.match(regex)){
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault()
    }else{
        field.nextElementSibling.innerHTML = "";
    }
    return true

} 

function validation(e){
    required(name, "This field is required", "Please name can only contain letter only",  nameRegex, e);
    required(email,  "This field is required", "Please email can only have one special charater", emailRegex, e);
    required(message, "This field is required", e);
    return true
}


form.addEventListener("submit", validation)

toggle.addEventListener("click", function(){
    nav.classList.toggle("active")
})
