//   Open Menu

var toggle = document.querySelector("#open");
var menu = document.querySelector("header");
var closeButton = document.querySelector("#close");

// Open
toggle.addEventListener("click", function (e) {
  menu.style.left = "0px";
  toggle.style.opacity = 0;
  closeButton.style.opacity = 1;
  closeButton.style.zIndex = 9999;
});

// Close
closeButton.addEventListener("click", function (e) {
  menu.style.left = "-100%";
  toggle.style.opacity = 1;
  toggle.style.zIndex = 9999;
  closeButton.style.opacity = 0;
  closeButton.style.zIndex = 9998;
});

// AUTOPLAY Slide//

var indexValue = 0;

function slideShow() {
  setTimeout(slideShow, 5000);
  var x;
  const img = document.querySelectorAll(".slide1");
  if (img[0]) {
    var dots = document.getElementsByClassName("dot");
    for (x = 0; x < img.length; x++) {
      img[x].style.opacity = "0";
    }
    indexValue++;
    if (indexValue > img.length) {
      indexValue = 1;
    }
    for (i = 0; i < dots.length; i++) {}

    if (indexValue > img.length) {
      indexValue = 1;
    }
    img[indexValue - 1].style.opacity = "1";
  }
}
const img = document.querySelectorAll(".slide1");
var dots = document.getElementsByClassName("dot");

function currentSlide(index) {
  if (index > img.length) {
    index = 1;
  } else if (index < 1) {
    index = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  img[index - 1].style.opacity = "1";
  dots[index - 1].className += " active";
}
slideShow();

//  END Autoplay

//   Animation Index //

var block1 = document.querySelectorAll("#home .double img");
var block2 = document.querySelectorAll("#home .double .avant");
var block3 = document.querySelectorAll("#home .doubleReverse img");
var block4 = document.querySelectorAll("#home .doubleReverse .avant");

var w = window.innerWidth;

if (w >= 1280) {
  if (block1[0] && block2[0] && block3[0] && block4[0]) {
    for (let i = 0; i < block1.length; i++) {
      const element = block1[i];
      block1[i].style.opacity = 0;
    }

    for (let j = 0; j < block2.length; j++) {
      const element = block2[j];
      block2[j].style.opacity = 0;
    }
    for (let i = 0; i < block3.length; i++) {
      const element = block3[i];
      block3[i].style.opacity = 0;
    }

    for (let j = 0; j < block4.length; j++) {
      const element = block4[j];
      block4[j].style.opacity = 0;
    }
  }

  window.addEventListener("scroll", function (e) {
    let sy = window.scrollY;

    if (sy >= 600) {
      block1[0].style.opacity = 1;
      block1[0].classList.add("animate__animated", "animate__fadeInLeft");
      block2[0].style.opacity = 1;
      block2[0].classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 1150) {
      block3[0].style.opacity = 1;
      block3[0].classList.add("animate__animated", "animate__fadeInRight");
      block4[0].style.opacity = 1;
      block4[0].classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (sy >= 1700) {
      block1[1].style.opacity = 1;
      block1[1].classList.add("animate__animated", "animate__fadeInLeft");
      block2[1].style.opacity = 1;
      block2[1].classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 2150) {
      block3[1].style.opacity = 1;
      block3[1].classList.add("animate__animated", "animate__fadeInRight");
      block4[1].style.opacity = 1;
      block4[1].classList.add("animate__animated", "animate__fadeInLeft");
    }
  });
}

//    Animation Carte  //

var block5 = document.querySelectorAll("#carte .double img");
var block6 = document.querySelectorAll("#carte .double table");
var block7 = document.querySelectorAll("#carte .doubleReverse img");
var block8 = document.querySelectorAll("#carte .doubleReverse table");

var w = window.innerWidth;

if (w >= 1280) {
  if (block5[0] && block6[0] && block7[0] && block8[0]) {
    for (let i = 1; i < block5.length; i++) {
      const element = block5[i];
      block5[i].style.opacity = 0;
    }

    for (let j = 1; j < block6.length; j++) {
      const element = block6[j];
      block6[j].style.opacity = 0;
    }
    for (let i = 0; i < block7.length; i++) {
      const element = block7[i];
      block7[i].style.opacity = 0;
    }

    for (let j = 0; j < block8.length; j++) {
      const element = block8[j];
      block8[j].style.opacity = 0;
    }
  }

  window.addEventListener("scroll", function (e) {
    let sy = window.scrollY;

    if (sy >= 250) {
      block7[0].style.opacity = 1;
      block7[0].classList.add("animate__animated", "animate__fadeInLeft");
      block8[0].style.opacity = 1;
      block8[0].classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 750) {
      block5[1].style.opacity = 1;
      block5[1].classList.add("animate__animated", "animate__fadeInRight");
      block6[1].style.opacity = 1;
      block6[1].classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (sy >= 1350) {
      block7[1].style.opacity = 1;
      block7[1].classList.add("animate__animated", "animate__fadeInLeft");
      block8[1].style.opacity = 1;
      block8[1].classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 1850) {
      block5[2].style.opacity = 1;
      block5[2].classList.add("animate__animated", "animate__fadeInRight");
      block6[2].style.opacity = 1;
      block6[2].classList.add("animate__animated", "animate__fadeInLeft");
    }
  });
}

//   Anime Boissons   //

//    Animation Carte  //

var block9 = document.querySelectorAll("#boissons .double img");
var block10 = document.querySelectorAll("#boissons .double table");
var block11 = document.querySelectorAll("#boissons .doubleReverse img");
var block12 = document.querySelectorAll("#boissons .doubleReverse table");
console.log(block9);
console.log(block10);
console.log(block11);
console.log(block12);

var w = window.innerWidth;

if (w >= 1280) {
  if (block9[0] && block10[0] && block11[0] && block12[0]) {
    for (let i = 0; i < block9.length; i++) {
      const element = block9[i];
      block9[i].style.opacity = 0;
    }

    for (let j = 0; j < block10.length; j++) {
      const element = block10[j];
      block10[j].style.opacity = 0;
    }
    for (let i = 1; i < block11.length; i++) {
      const element = block11[i];
      block11[i].style.opacity = 0;
    }

    for (let j = 1; j < block12.length; j++) {
      const element = block12[j];
      block12[j].style.opacity = 0;
    }
  }

  window.addEventListener("scroll", function (e) {
    let sy = window.scrollY;
    /*console.log(sy)*/

    if (sy >= 250) {
      block9[0].style.opacity = 1;
      block9[0].classList.add("animate__animated", "animate__fadeInRight");
      block10[0].style.opacity = 1;
      block10[0].classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (sy >= 750) {
      block11[1].style.opacity = 1;
      block11[1].classList.add("animate__animated", "animate__fadeInLeft");
      block12[1].style.opacity = 1;
      block12[1].classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 1350) {
      block9[1].style.opacity = 1;
      block9[1].classList.add("animate__animated", "animate__fadeInRight");
      block10[1].style.opacity = 1;
      block10[1].classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (sy >= 1850) {
      block11[2].style.opacity = 1;
      block11[2].classList.add("animate__animated", "animate__fadeInLeft");
      block12[2].style.opacity = 1;
      block12[2].classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 2850) {
      block9[2].style.opacity = 1;
      block9[2].classList.add("animate__animated", "animate__fadeInRight");
      block10[2].style.opacity = 1;
      block10[2].classList.add("animate__animated", "animate__fadeInLeft");
    }
  });
}
