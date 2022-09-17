for(i = 0; i< 2; i++){    
    var pins = document.querySelectorAll(".tl-img")
    var lineWidth = pins[1].offsetLeft - pins[0].offsetLeft - 90
    var lineX = pins[0].getBoundingClientRect().left + 91
    var curveX = pins[0].getBoundingClientRect().left - 110
    var lineY = 273 + window.innerHeight
    var curveY = lineY + 1

    var curves = document.querySelectorAll(".tl-crv")
        curves.forEach(function(item, index){
            curves[index].style.left = `${curveX}px`
            curves[index].style.top = `${curveY}px`
            curveY += 216
            curveX += lineWidth + 290
        })
    var lines = document.querySelectorAll(".tl-line")
        lines.forEach(function(item, index){
            lines[index].setAttribute("width", lineWidth)
            lines[index].setAttribute("height", "3")
            lines[index].setAttribute("viewBox", `0 0 ${lineWidth} 3`)
        })
    var line_wrap = document.querySelectorAll(".tl-svg")
        line_wrap.forEach(function(item, index){
            line_wrap[index].style.left = `${lineX}px`
            line_wrap[index].style.top = `${lineY}px`
            lineY += 216
        })
    }
function tlLines(){
    lineWidth = pins[1].offsetLeft - pins[0].offsetLeft - 90
    var lineX = pins[0].getBoundingClientRect().left + 91
    var curveX = pins[0].getBoundingClientRect().left - 110
    lineY = 273 + window.innerHeight    
    // curveX = pins[0].offsetLeft - 110
    var curveY = lineY + 1

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
    })

}