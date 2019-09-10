var slideshow_2 = document.querySelector(".slideshow-2");
var slideshow_1 = document.querySelector(".slideshow-1");
var slideshow_3 = document.querySelector(".slideshow-3");
var slideshow_4 = document.querySelector(".slideshow-4");
var slideshow_5 = document.querySelector(".slideshow-5");
var slideshow = document.querySelector("#slideshow");
var clientsone = document.querySelector('clients-slide-1');


var arrowRight = document.querySelector(".arrow-right-js");
var arrowLeft = document.querySelector(".arrow-left-js");

// function slideshowFirst() {
//    slideshow_2.style.right="0";
// }

// function slideshowSecond() {
//    slideshow_2.style.right="-100%";
// }

// setInterval(slideshowFirst,3000);
// setInterval(slideshowSecond,6000);

// function clientsslideshow() {
//     clientsone.style.transform = "translatex(-40px)";
//  }

//  clientsslideshow();

//  arrowRight.onclick = function() {
//     count += 1;
    
//  }
var countRight = 0;
var countLeft = 0;
var increamentRight = function() {
  return countRight++;
  
}

var increamentLeft = function() {
   return countLeft++;
   
 }


//  arrowLeft.onclick = function() {
//    count += 1;
  
// }


 arrowRight.addEventListener('click', function(){
    var numRight =Number(increamentRight());
   switch(numRight) {
      case 1:
         console.log("iam 1");
         slideshow_3.style.transform = "translatex(0)";
         break;
      case 2:
         console.log("iam 2");
         slideshow_4.style.transform = "translatex(0)";
         break;
      case 3:
         console.log("iam 3");
         slideshow_5.style.transform = "translatex(0)";
         break;
      case 4:
         console.log("iam 4");
         break;
      case 5:
         console.log("iam 5");
         break;
   }
 });

 arrowLeft.addEventListener('click', function(){
   
   var numLeft =Number(increamentLeft());
   switch(numLeft) {
      case 1:
         console.log("iam 1");
         slideshow_3.style.transform = "translatex(0)";
         break;
      case 2:
         console.log("iam 2");
         slideshow_4.style.transform = "translatex(0)";
         break;
      case 3:
         console.log("iam 3");
         slideshow_5.style.transform = "translatex(0)";
         break;
      case 4:
         console.log("iam 4");
         slideshow_5.style.transform = "translatex(0)";
         break;
      case 5:
         console.log("iam 5");
         break;
   }
   
 });

//  $(document).ready(function(){
//    $('.slideshow').slick({
//      setting-name: setting-value
//    });
//  });

//  $('.slideshow').slick();









