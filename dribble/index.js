
    
      //  filterSelection("all")
      //  function filterSelection(c) {
      //    var x, i;
      //    x = document.getElementsByClassName("column");
      //    if (c == "all") c = "";
      //    for (i = 0; i < x.length; i++) {
      //      w3RemoveClass(x[i], "show");
      //      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      //    }
      //  }
       
      //  function w3AddClass(element, name) {
      //    var i, arr1, arr2;
      //    arr1 = element.className.split(" ");
      //    arr2 = name.split(" ");
      //    for (i = 0; i < arr2.length; i++) {
      //      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      //    }
      //  }
       
      //  function w3RemoveClass(element, name) {
      //    var i, arr1, arr2;
      //    arr1 = element.className.split(" ");
      //    arr2 = name.split(" ");
      //    for (i = 0; i < arr2.length; i++) {
      //      while (arr1.indexOf(arr2[i]) > -1) {
      //        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      //      }
      //    }
      //    element.className = arr1.join(" ");


      //  }
       
       
      //  // Add active class to the current button (highlight it)
      //  var btnContainer = document.getElementById("myBtnContainer");
      //  var btns = btnContainer.getElementsByClassName("btn");
      //  for (var i = 0; i < btns.length; i++) {
      //    btns[i].addEventListener("click", function(){
      //      var current = document.getElementsByClassName("active");
      //      current[0].className = current[0].className.replace(" active", "");
      //      this.className += " active";
      //    });
      //  }

       const pictures = [
        {
          id: 1,
          title: "Mountains",
          category: "nature",
          img: "img/mountains.jpg",
          desc: `mountain top `
        },
        {
          id: 2,
          title: "Mountains",
          category: "people",
          img: "./img/people1.jpg",
          desc: `mountain top `
        },
        {
          id: 3,
          title: "Mountains",
          category: "nature",
          img: "./img/lights.jpg",
          desc: `mountain top `
        },
        {
          id: 4,
          title: "Mountains",
          category: "nature",
          img: "./img/nature.jpg",
          desc: `mountain top `
        },
        {
          id: 5,
          title: "Mountains",
          category: "car",
          img: "./img/cars1.jpg",
          desc: `mountain top `
        },
        {
          id: 6,
          title: "Mountains",
          category: "car",
          img: "./img/cars2.jpg",
          desc: `mountain top `
        },
        {
          id: 7,
          title: "Mountains",
          category: "car",
          img: "./img/cars3.jpg",
          desc: `mountain top `
        },
        {
          id: 8,
          title: "Mountains",
          category: "people",
          img: "./img/people2.jpg",
          desc: `mountain top `
        },
        {
          id: 9,
          title: "Mountains",
          category: "people",
          img: "./img/people3.jpg",
          desc: `mountain top `
        },
        {
          id: 10,
          title: "Woman",
          category: "woman",
          img: "./img/woman1.jpg",
          desc: `mountain top `
        },
        {
          id: 11,
          title: "Woman",
          category: "woman",
          img: "./img/woman2.jpg",
          desc: `mountain top `
        },
        {
          id: 12,
          title: "Woman",
          category: "woman",
          img: "./img/woman3.jpg",
          desc: `mountain top `
        },
        {
          id: 13,
          title: "Woman",
          category: "woman",
          img: "./img/woman4.jpg",
          desc: `mountain top `
        },
        {
          id: 14,
          title: "Woman",
          category: "woman",
          img: "./img/woman5.jpg",
          desc: `mountain top `
        },
        {
          id: 15,
          title: "Woman",
          category: "woman",
          img: "./img/woman6.jpg",
          desc: `mountain top `
        },
        {
          id: 16,
          title: "Woman",
          category: "woman",
          img: "./img/woman7.jpg",
          desc: `mountain top `
        },
        {
          id: 17,
          title: "Woman",
          category: "woman",
          img: "./img/woman8.jpg",
          desc: `mountain top `
        },
        {
          id: 18,
          title: "Woman",
          category: "woman",
          img: "./img/woman9.jpg",
          desc: `mountain top `
        },
        {
          id: 19,
          title: "Woman",
          category: "woman",
          img: "./img/woman010.jpg",
          desc: `mountain top `
        },
        {
          id: 20,
          title: "nature",
          category: "nature",
          img: "./img/slide_1.jpg",
          desc: `mountain top `
        },
        {
          id: 21,
          title: "nature",
          category: "nature",
          img: "./img/slide_2.jpg",
          desc: `mountain top `
        },
        {
          id: 22,
          title: "nature",
          category: "nature",
          img: "./img/slide_3.jpg",
          desc: `mountain top `
        },
        {
          id: 23,
          title: "nature",
          category: "nature",
          img: "./img/slide_4.jpg",
          desc: `mountain top `
        },
        {
          id: 24,
          title: "nature",
          category: "nature",
          img: "./img/slide_5.jpg",
          desc: `mountain top `
        },
        {
          id: 25,
          title: "nature",
          category: "nature",
          img: "./img/slide_6.jpg",
          desc: `mountain top `
        },
        {
          id: 26,
          title: "nature",
          category: "nature",
          img: "./img/slide_7.jpg",
          desc: `mountain top `
        },
        {
          id: 27,
          title: "nature",
          category: "tech",
          img: "./img/slide_8.jpg",
          desc: `mountain top `
        },
      ];
      
      const row = document.querySelector(".row");
      const btnContainer = document.querySelector(".btn-container");
      
      window.addEventListener("DOMContentLoaded", function(){
       displayPictures(pictures);
       displayFilterBtn()
      });

      function displayPictures(image){
        const displacePicture = image.map(function(picture){
          return `<div class="column nature">
          <div class="content">
            <img src=${picture.img} alt="${picture.title}" >
            <h4>${picture.title}</h4>
            <p>${picture.desc}</p>
          </div>
        </div>`;
        }).join("");
        row.innerHTML = displacePicture;
      }

      function displayFilterBtn(){
        const categories = pictures.reduce(function(values, image){
          if(!values.includes(image.category)){
            values.push(image.category)
          }
          return values;
        
          },["all"]
          );
           const categoriesBtns =
          categories.map(function(category){
            return`<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
          }).join("");
      
          btnContainer.innerHTML = categoriesBtns;
          console.log(categoriesBtns);
          const filterBtns = document.querySelectorAll(".filter-btn");
        console.log(filterBtns);
          filterBtns.forEach(function(btn){

            btn.addEventListener("click", function(e){
              const category = e.currentTarget.dataset.id;
              PictureCategory = pictures.filter(function(pictureImg){
                if(pictureImg.category === category){
                  return pictureImg
                }
              });
              if(category === "all"){
                displayPictures(pictures)
              }else{
                displayPictures(PictureCategory)
              }
              
            })
          })

      }
