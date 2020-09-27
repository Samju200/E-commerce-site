const currency = {
    "rates": {
      "NGN-Nigeria Naira": 1.00,
      "ZMW-Zambian Kwacha": 0.052,
      "GBP-Pounds Sterling": 0.0021,
      "USD-US Dollar": 0.0026
    }
}

let select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
let html = "";

const countryCode = Object.keys(currency.rates);
console.log(countryCode);
const rate = currency.rates;
console.log(currency.rates);
console.log(rate.NGN);

    window.addEventListener("DOMContentLoaded", function () {
    
      countryCode.map(code =>{ 
      var el = document.createElement("option");
      var ew = document.createElement("option"); 
      el.textContent = code; 
      el.value = code;
      ew.textContent = code; 
      ew.value = code; 
      for(let j = 0; j<select.length; j++){
        select[0].append(ew);
        select[1].append(el);
        console.log(select[1].value);
        function current(a,b){
          input[a].value =input[b].value * rate[select[a].value] /rate[select[b].value];
          
      }
        input[0].addEventListener('keyup',()=>{ current(1,0)
        
        })
        input[1].addEventListener('keyup',()=>{current(0,1)
            
        })
        select[0].addEventListener('change',()=>{current(1,0)
            
        })
        select[1].addEventListener('change',()=>{ current(0,1)
           
        })
      }
     
        
    })
    });