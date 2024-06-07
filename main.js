/*
		Designed by: Mohamed Ahmed
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }



  var imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg",]
  var i = 0;

var slideShow = function () {

    document.slideshow.src = imgs[i];
    if ( i < imgs.length - 1 ) {
      i++;
    }else {
      i = 0;
    }
  
    setTimeout("slideShow()", 3000);
  
  }

  slideShow();


  var imgs1 = ["img/2.jpg", "img/3.jpg", "img/4.jpg","img/1.jpg"]
  var ii = 0;

var slideShow1 = function () {

    document.slideshow1.src = imgs[ii];
    if ( ii < imgs1.length - 1 ) {
      ii++;
    }else {
      ii = 0;
    }
  
    setTimeout("slideShow1()", 3000);
  
  }

  slideShow1();



  var imgs2 = ["img/3.jpg", "img/4.jpg","img/1.jpg","img/2.jpg"]
  var iii = 0;

var slideShow2 = function () {

    document.slideshow2.src = imgs3[iii];
    if ( iii < imgs2.length - 1 ) {
      iii++;
    }else {
      iii = 0;
    }
  
    setTimeout("slideShow2()", 3000);
  
  }

  slideShow2();


  var imgs3 = ["img/4.jpg","img/1.jpg","img/2.jpg","img/3.jpg"]
  var iiii = 0;

var slideShow3 = function () {

    document.slideshow3.src = imgs3[iiii];
    if ( iiii < imgs3.length - 1 ) {
      iiii++;
    }else {
      iiii = 0;
    }
  
    setTimeout("slideShow3()", 3000);
  
  }

  slideShow3();


  window.addEventListener("scroll", function () {
    var header = document.getElementById("head");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
