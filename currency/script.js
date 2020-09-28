const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
 
  links.classList.toggle("show-links");
});



const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
const API_URL = "https://api.exchangeratesapi.io/latest";
let html = "";
async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data.rates)

    const arrKeys = Object.keys(data.rates);
    console.log(arrKeys)
    arrKeys.map(item =>{
        console.log(item)
        return html += `<option value = ${item}> ${item} </option>`;
        
    })
    // console.log(html)
    for(let i = 0 ; i < select.length; i++){
        select[i].innerHTML += html;
    }
    function current(a, b ){
        input[a].value =input[b].value * rates[select[a].value] /rates[select[].value];
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
currency()




















