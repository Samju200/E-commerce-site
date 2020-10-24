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
    "NGN-Nigerian-Naira": 1.00,
    "ZMW-Zambian-Kwacha": 0.052,
    "GBP-Pound-Sterling": 0.0021,
    "USD-US-Dollars": 0.0026,
  }

const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");

const countryCode = Object.keys(rates);

    window.addEventListener("DOMContentLoaded", function () {
      displayCountryCode()
      convert()
    }) 

      function displayCountryCode(){
        countryCode.map(code =>{ 
          let option1 = document.createElement("option");
          let option2 = document.createElement("option"); 
          option1.textContent = code; 
          option1.value = code;
          option2.textContent = code; 
          option2.value = code; 
            select[0].append(option1);
            select[1].append(option2);
          })
      }
  
      
        function convert(key,value){
          input[key].value = Number(input[value].value * rates[select[key].value] /rates[select[value].value]).toFixed(4);
        }
    
        input[0].addEventListener('input',()=>{ convert(1,0);
        
        })
        input[1].addEventListener('input',()=>{convert(0,1);
            
        })
        select[0].addEventListener('change',()=>{convert(1,0);
            
        })
        select[1].addEventListener('change',()=>{convert(0,1);
           
        })
      
      
