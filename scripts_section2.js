let building1 = document.querySelector("#building_1")
let building2 = document.querySelector("#building_2")
let building3 = document.querySelector("#building_3")
let building4 = document.querySelector("#building_4")
let is_Sun1 = false
let is_Sun2 = false
let is_Sun3 = false
let is_Sun4 = false
function callback_nextPage(el) {
    return function(){
        el.classList.remove('structure_building'); 
    }
}
document.addEventListener("scroll",function(){
    let page1_textContainer = document.querySelector(".page1_textContainer");
    document.body.dataset.y = window.scrollY
    let y = parseInt(document.body.dataset.y)
    let text_Change1 = document.querySelector(".page1_text_change1")
    let text_Change2 = document.querySelector(".page1_text_change2")
    if(y >= 700 && y < 900){
        page1_textContainer.style.position = "relative"
        page1_textContainer.style.top = "700px"
        text_Change2.style.display = "inline-block"
        text_Change2.style.opacity = "100%"
        text_Change1.style.opacity = "0%"
        text_Change1.style.position = "absolute"
        text_Change2.style.position = "static"
        text_Change1.style.transition = "linear 0s, width 0s"
        text_Change2.style.transition = "linear .75s, width .25s"
        text_Change2.style.width = "60px"
        text_Change1.style.width = "60px"
        building1.style.opacity = "1"
        building1.style.top = "220px"
        if(is_Sun1 == false){
            building1.classList.toggle("structure_building");
            building1.addEventListener("webkitAnimationEnd", callback_nextPage(building1), false);
            is_Sun1 = true
        }
        building2.style.opacity = "0"
        building2.style.top = "710px"
        is_Sun2 = false
    }else if(y < 700){
        page1_textContainer.style.position = "fixed"
        page1_textContainer.style.top = "auto"
        text_Change1.style.display = "inline-block"
        text_Change1.style.opacity = "100%"
        text_Change2.style.opacity = "0%"
        text_Change2.style.position = "absolute"
        text_Change1.style.position = "static"
        text_Change2.style.transition = "linear 0s, width 0s"
        text_Change1.style.transition = "linear .75s, width .25s"
        text_Change2.style.width = "80px"
        text_Change1.style.width = "80px"
        building1.style.opacity = "0"
        building1.style.top = "280px"
        is_Sun1 = false
    }else if(y >= 900 && y < 1000){
        building2.style.opacity = "1"
        building2.style.top = "650px"
        building4.style.opacity = "0"
        building4.style.top = "810px"
        if(is_Sun2 == false){
            building2.classList.toggle("structure_building");
            building2.addEventListener("webkitAnimationEnd", callback_nextPage(building2), false);
            is_Sun2 = true
        }
        is_Sun4 = false
    }else if(y >= 1000 && y < 1100){
        building4.style.opacity = "1"
        building4.style.top = "750px"
        building3.style.opacity = "0"
        building3.style.top = "860px"
        if(is_Sun4 == false){
            building4.classList.toggle("structure_building");
            building4.addEventListener("webkitAnimationEnd", callback_nextPage(building4), false);
            is_Sun4 = true
        }
        is_Sun3 = false
    }else if(y >= 1100){
        building3.style.opacity = "1"
        building3.style.top = "800px"
        if(is_Sun3 == false){
            building3.classList.toggle("structure_building");
            building3.addEventListener("webkitAnimationEnd", callback_nextPage(building3), false);
            is_Sun3 = true
        }
    }
})