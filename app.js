
tlLines()

function tlLines(){
    var pins = document.querySelectorAll(".tl-img");
    var tl_section= document.querySelector(".tl");
    var lineWidth = pins[1].offsetLeft - pins[0].offsetLeft - 90;
    var lineHeight = pins[5].offsetTop - pins[0].offsetTop - 54.4;
    var lineX = pins[0].getBoundingClientRect().left + 91 - tl_section.getBoundingClientRect().left;
    var curveX = pins[0].getBoundingClientRect().left - 105 - tl_section.getBoundingClientRect().left;
    var lineY = pins[0].getBoundingClientRect().top - tl_section.getBoundingClientRect().top + 45;
    var VlineX = pins[0].getBoundingClientRect().left - tl_section.getBoundingClientRect().left + ((document.querySelector(".tl-pin-circle").clientWidth)*0.58)/2;
    var VlineY = pins[0].getBoundingClientRect().top - tl_section.getBoundingClientRect().top + 55.4;
    var curveY = lineY + 190
    var curves = document.querySelectorAll(".tl-crv")
    var lines = document.querySelectorAll(".tl-line")
    var line_wrap = document.querySelectorAll(".tl-svg")
    var v_line = document.querySelector(".tl-v-svg")

    curves.forEach(function(item, index){
        curves[index].style.left = `${curveX}px`
        curves[index].style.top = `${curveY}px`
        curveY -= 190
        curveX += lineWidth + 280
    })

    lines.forEach(function(item, index){
        lines[index].setAttribute("width", lineWidth)
        lines[index].setAttribute("height", "3")
        lines[index].setAttribute("viewBox", `0 0 ${lineWidth} 3`)
    })

    line_wrap.forEach(function(item, index){
        line_wrap[index].style.left = `${lineX}px`
        line_wrap[index].style.top = `${lineY}px`
        lineY += 195
        line_wrap[index].style.width = `${lineWidth}px`
    })

    v_line.style.left = `${VlineX}px`
    v_line.style.top = `${VlineY}px`
    v_line.style.height = `${lineHeight}px`

    
}

setTimeout(() => {
    tlLines();
}, 3500);
setTimeout(() => {
    tlLines();
}, 5000);
setTimeout(() => {
    tlLines();
}, 6000);
setTimeout(() => {
    tlLines();
}, 7000);


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// countdown timer
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}


var countDownDate = new Date("Sep 24, 2022 00:00:00").getTime();

var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (timeleft < 0) {
        clearInterval(myfunc)
        document.querySelector(".timer").innerText = "00:00:00";
    }
    else {
        document.querySelector(".timer").innerText = `${pad((days*24)+hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    }, 1000);


// active state

// function active(x){
//     x.style.cssText = "color: #000000;"
// }
// let home = document.querySelector(".nav-item").firstElementChild;
// console.log(home)
// active(home);

// document.querySelector(".navbar-nav").addEventListener("click",function(e){
//     if(e.target.className = "nav-link"){
//         active(e.target);
//     }
// });

// active(document.querySelector('.homeSec'))

function active(x){
    const boxes = document.querySelectorAll('.nav-link');
        boxes.forEach(box => {
        box.style.color = '#7F7F7F';
        box.style.fontWeight="100";
        });
    x.style.cssText = "color: #183153;";
    x.style.fontWeight="700";

};
active(document.querySelector('#s1'));

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

// console.log(current)
let vall= document.querySelector(`.${current}`);
if (vall !== null) {
    // console.log(vall)
    active(vall)
  }

};

// let timeline = document.querySelector('#s2');
// //Default active on home



/*
Using jquery waypoints to change active on scroll
*/
// timeline.waypoint(function() {
//  active(timeline);
// }, { offset: 101 });


// $('#3').waypoint(function() {
//  $(".nav-container ul li").children().removeClass("active");
//  $("#s3").addClass("active");
// }, { offset: 101 });

// $('#4').waypoint(function() {
//  $(".nav-container ul li").children().removeClass("active");
//  $("#s4").addClass("active");
// }, { offset: 101 });

// $('#1').waypoint(function() {
//  $(".nav-container ul li").children().removeClass("active");
//  $("#s1").addClass("active");
// }, { offset: 0 });

// $('#2').waypoint(function() {
//  $(".to-top").addClass("visible");
// }, { offset: 100 });

// $('#1').waypoint(function(event, direction) {
//  $(".to-top").removeClass("visible");
// }, { offset: 30 });
