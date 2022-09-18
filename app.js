tlLines()

function tlLines(){
    var pins = document.querySelectorAll(".tl-img")
    var lineWidth = pins[1].offsetLeft - pins[0].offsetLeft - 90
    var lineHeight = pins[1].offsetTop - pins[0].offsetTop - 56.4
    var lineX = pins[0].getBoundingClientRect().left + 91
    var curveX = pins[0].getBoundingClientRect().left - 110
    var lineY = 273 + window.innerHeight    
    var VlineX = pins[0].getBoundingClientRect().left + 26.7
    var VlineY = pins[0].getBoundingClientRect().top - document.getElementById("timeline").getBoundingClientRect().top + 814.5
    var curveY = lineY + 1
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
        VlineY += lineHeight + 56.4
    })
}
tlLines();