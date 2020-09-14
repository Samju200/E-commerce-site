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

con.addEventListener("onClick" ,contactt)
function contactt(){
    document.location(contact)
  }
//   con.onclick= myFunction() {
//     location.replace(contact)
//   }

// function classToggle() {
//     const navs = document.querySelectorAll('.Nav-bar')
    
//     navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
//   }
  
//   document.querySelector('.Navbar__Link-toggle')
    // .addEventListener('click', classToggle);
    $(document).ready(function(){
        $("menu").click(function(){
            $("nav-link-list").toggleClass(".active")
        })})