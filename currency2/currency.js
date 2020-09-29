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

const rates = {
    "NGN-NigerianNaira": 1.00,
    "ZMW-ZambianKwacha": 0.052,
    "GBP-PoundSterling": 0.0021,
    "USD-USDollars": 0.0026,
  }

let select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");

const countryCode = Object.keys(rates);

    window.addEventListener("DOMContentLoaded", function () {
    
      countryCode.map(code =>{ 
      let option1 = document.createElement("option");
      let option2 = document.createElement("option"); 
      option1.textContent = code; 
      option1.value = code;
      option2.textContent = code; 
      option2.value = code; 
      for(let j = 0; j < select.length; j++){
        select[0].append(option1);
        select[1].append(option2);
        function convert(key,value){
          input[key].value = Number(input[value].value * rates[select[key].value] /rates[select[value].value]).toFixed(4);
        }
    
        input[0].addEventListener('change',()=>{ convert(1,0);
        
        })
        input[1].addEventListener('change',()=>{convert(0,1);
            
        })
        select[0].addEventListener('change',()=>{convert(1,0);
            
        })
        select[1].addEventListener('change',()=>{convert(0,1);
           
        })
      }
    })    
      })
