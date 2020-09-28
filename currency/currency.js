const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const year = document.querySelector(".year");


year.innerHTML = new Date().getFullYear();

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  if(links.classList.contains("show-links")){
    this.style.transform = "rotate(90deg)";
    this.style.backgroundColor = "#080855";
  } else {
    this.style.transform = "rotate(180deg)";
    this.style.backgroundColor = "transparent";
  }
});

// const nav = document.querySelector("nav");
// window.addEventListener("scroll", function(){
//   const navHeight = nav.getBoundingClientRect().height;
//   const scrollHeight = window.pageYOffset;
//   console.log(scrollHeight);
//   if(scrollHeight > navHeight){
//     nav.classList.add("fixed-nav");
//   } else {
//     nav.classList.remove("fixed-nav");
//   }
// })

const rates = {
    "NGN-NigerianNaira": 1.00,
    "ZMW-ZambianKwacha": 0.052,
    "GBP-PoundSterling": 0.0021,
    "USD-USDollars": 0.0026,
  }

let select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
let html = "";

const countryCode = Object.keys(rates);
console.log(countryCode)
// const rate = currency.rates;

    window.addEventListener("DOMContentLoaded", function () {
    
      countryCode.map(code =>{ 
        return html += `<option value = ${code}> ${code} </option>`;
      // let option1 = document.createElement("option");
      // let option2 = document.createElement("option"); 
      // option1.textContent = code; 
      // option1.value = code;
      // option2.textContent = code; 
      // option2.value = code; 
      // for(let j = 0; j < select.length; j++){
      //   select[0].append(option1);
      //   select[1].append(option2);
        
      })
      for(let i = 0 ; i < select.length; i++){
        select[i].innerHTML += html;
    }
    function convert(key,value){
      input[key].value = input[value].value * rates[select[key].value] /rates[select[value].value];
    }
    
        input[0].addEventListener('change',()=>{ convert(1,0);
        
        })
        input[1].addEventListener('change',()=>{convert(0,1);
            
        })
        select[0].addEventListener('change',()=>{convert(1,0);
            
        })
        select[1].addEventListener('change',()=>{convert(0,1);
           
        })
      
     
        
    })
;