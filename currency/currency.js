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
let html = "";

const countryCode = Object.keys(rates);

    window.addEventListener("DOMContentLoaded", function () {
    
      countryCode.map(code =>{ 
        return html += `<option value = ${code}> ${code} </option>`;
      })
      for(let i = 0 ; i < select.length; i++){
        select[i].innerHTML += html;
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
              
    })
