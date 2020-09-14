
    
       filterSelection("all")
       function filterSelection(c) {
         var x, i;
         x = document.getElementsByClassName("column");
         if (c == "all") c = "";
         for (i = 0; i < x.length; i++) {
           w3RemoveClass(x[i], "show");
           if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
         }
       }
       
       function w3AddClass(element, name) {
         var i, arr1, arr2;
         arr1 = element.className.split(" ");
         arr2 = name.split(" ");
         for (i = 0; i < arr2.length; i++) {
           if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
         }
       }
       
       function w3RemoveClass(element, name) {
         var i, arr1, arr2;
         arr1 = element.className.split(" ");
         arr2 = name.split(" ");
         for (i = 0; i < arr2.length; i++) {
           while (arr1.indexOf(arr2[i]) > -1) {
             arr1.splice(arr1.indexOf(arr2[i]), 1);     
           }
         }
         element.className = arr1.join(" ");


       }
       
       
       // Add active class to the current button (highlight it)
       var btnContainer = document.getElementById("myBtnContainer");
       var btns = btnContainer.getElementsByClassName("btn");
       for (var i = 0; i < btns.length; i++) {
         btns[i].addEventListener("click", function(){
           var current = document.getElementsByClassName("active");
           current[0].className = current[0].className.replace(" active", "");
           this.className += " active";
         });
       }



//        var productList = [
//         {
//              img: (function() {
//                 var img = new Image();
//                 img.src = "img/laptop 1.jpg";
//                 return img;
//               })()
//             };
//             console.log("img src: %o", obj.img.src);,
//            "productName": "Xiaomi Redmibook",
//              "price": "&#163;819.52 GBP"
//          },
//          {
//              "imageUrl": "image/img/img/charger.jpg",
//             "productName": "1.8m DC Charging power",
//             "price": "&#163;4.26 GBP"
//          },
//          {
//              "imageUrl": "image/img/bag 1.jpg",
//             "productName": "11 Inch Laptop Bag Tablet Zipper Pouch Sleeve for MacBook Air",
//              "price": "&#163;5.95"
//         },
//     ]
//     function listProducts(prods) {
//       let product_names = [];
//       for (let i=0; i<prods.length; i+=1) {
//        product_names.push(prods[i].name);
//       }
//       return product_names;
//     }
//     console.log(listProducts(products));
//     function totalValue(prods) {
//       let inventory_value = 0;
//       for (let i=0; i<prods.length; i+=1) {
//         inventory_value += prods[i].imgUrl * prods[i].price;
//       }
//       return inventory_value;
//     }
//     console.log(totalValue(products));
    
//     function listProducts(name, imgUrl, price) {
//   for (let i=0; i < productList.length; i++) {
//   document.getElementsByClassName("product-releted").innerHTML= productList.map
//   }

// }
    
    
//     var imgArray = new Array();
    
//     imgArray[0] = new Image();
//     imgArray[0].src = 'img/laptop1.jpg';
    
//     imgArray[1] = new Image();
//     imgArray[1].src = 'img/charger.jpg';
    
//     /* ... more images ... */
    
//     imgArray[2] = new Image();
//     imgArray[2].src = '/img/bag1.jpg';
    
//     /*------------------------------------*/
    
//     function nextImage(productImg)
//     {
//     var img = document.getElementById(productImg);
    
//     for(var i = 0; i < imgArray.length;i++)
//     {
//     if(imgArray[i].src == img.src) // << check this
//     {
//       if(i === imgArray.length){
//           document.getElementById(productImg).src = imgArray[0].src;
//           break;
//       }
//       document.getElementById(productImg).src = imgArray[i+1].src;
//       break;
//     }
//     }
//     }