const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const nameRegex =  /^(a-z|A-Z|0-9)*[^#$%^&*()']*$/;
const emailRegex = "/^+([]?+)*@+([-]?+)*({2,6})+$/";
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");
const links = document.querySelector(".links");
const listLinks = document.querySelector(".list-links");
const navLinks = document.querySelectorAll(".nav-links");
const slideImg = document.querySelector(".slide-img");
const year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();
navToggle.addEventListener("click", function () {
   const listLinksHeight = listLinks.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;
   if(listLinksHeight === 0){
       listLinks.style.height = `${linksHeight}px`;
       this.style.transform = "rotate(90deg)";
      this.style.backgroundColor = "brown";
   }else{
       listLinks.style.height = 0;
       this.style.transform = "rotate(180deg)";
      this.style.backgroundColor = "transparent"
   }
    // listLinks.classList.toggle("show-links");
    // if(listLinks.classList.contains("show-links")){
    //   this.style.transform = "rotate(90deg)";
    //   this.style.backgroundColor = "brown";
    // } else {
    //   this.style.transform = "rotate(180deg)";
    //   this.style.backgroundColor = "transparent";
    // }
})

window.addEventListener("scroll", function(){
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight + 100){
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
})

Array.from(navLinks).forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const navHeight = nav.getBoundingClientRect().height;
        const targetAttr = e.currentTarget.getAttribute("href").slice(1);
        const itemTarget = document.getElementById(targetAttr);
        let position = itemTarget.offsetTop - navHeight;
        if(!nav.classList.contains("fixed-nav")){
            position = position - navHeight;
        }
        if(navHeight > 100){
            position = position + 450;
        }

        window.scrollTo({
            left: 0,
            top: position
        })
    })

})

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

setInterval(function(){
    let random = Math.floor((Math.random() * 7) + 1);
    slideImg.src = "slideName/slide_" + random + ".jpg";
}, 10000)
