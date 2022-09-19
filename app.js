tlLines()

function tlLines(){
    var pins = document.querySelectorAll(".tl-img")
    var tl_section= document.querySelector(".tl")
    var lineWidth = pins[1].offsetLeft - pins[0].offsetLeft - 90
    var lineHeight = pins[1].offsetTop - pins[0].offsetTop - 54.4
    var lineX = pins[0].getBoundingClientRect().left + 91 - tl_section.getBoundingClientRect().left
    var curveX = pins[0].getBoundingClientRect().left - 111 - tl_section.getBoundingClientRect().left
    var lineY = pins[0].getBoundingClientRect().top - tl_section.getBoundingClientRect().top + 45
    var VlineX = pins[0].getBoundingClientRect().left - tl_section.getBoundingClientRect().left + 25.7
    var VlineY = pins[0].getBoundingClientRect().top - tl_section.getBoundingClientRect().top + 55.4
    var curveY = lineY
    var curves = document.querySelectorAll(".tl-crv")
    var lines = document.querySelectorAll(".tl-line")
    var line_wrap = document.querySelectorAll(".tl-svg")
    var v_line = document.querySelectorAll(".tl-v-svg")

    curves.forEach(function(item, index){
        curves[index].style.left = `${curveX}px`
        curves[index].style.top = `${curveY}px`
        curveY += 216
        curveX += lineWidth + 292
    })

    lines.forEach(function(item, index){
        lines[index].setAttribute("width", lineWidth)
        lines[index].setAttribute("height", "3")
        lines[index].setAttribute("viewBox", `0 0 ${lineWidth} 3`)
    })

    line_wrap.forEach(function(item, index){
        line_wrap[index].style.left = `${lineX}px`
        line_wrap[index].style.top = `${lineY}px`
        lineY += 216
        line_wrap[index].style.width = `${lineWidth}px`
    })

    v_line.forEach(function(item, index){
        v_line[index].style.left = `${VlineX}px`
        v_line[index].style.top = `${VlineY}px`
        v_line[index].style.height = `${lineHeight}px`
        VlineY += lineHeight + 54.4
    })
}
tlLines();

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

var countDownDate = new Date("Sep 20, 2022 16:00:00").getTime();

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
        document.querySelector(".timer").innerText = `${(days*24)+hours}:${minutes}:${seconds}`;
    }
    }, 1000)
