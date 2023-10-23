let page1_item_text = document.querySelectorAll(".page1-item-text")
let page1_item = document.querySelectorAll(".page1-item")
let penalty_box = document.querySelector(".penalty-box")
let isPenaltyAni = true;
let isCellAni = true;
let penalty_sound = document.createElement('audio')
let paper_left = document.querySelector('#paper-img-left')
let paper_right = document.querySelector('#paper-img-right')
let cell_left = document.querySelector("#cell-img-left")
let cell_right = document.querySelector("#cell-img-right")
penalty_sound.setAttribute('src', '/asset/Section4/stingers.mp3')
penalty_sound.loop = true;
penalty_sound.preload = "auto";
for(let i = 0;i<3;i++){
    page1_item[i].addEventListener("animationend",()=>{
        page1_item[i].classList.toggle("rotate")
    })
}
document.addEventListener("scroll",function(){
    let y = window.scrollY
    // console.log("scroll ",y)
    // console.log("innerHeight ",window.innerHeight/1.2)
    if(penalty_box.getBoundingClientRect().bottom < window.innerHeight/1.2 && penalty_box.getBoundingClientRect().bottom > 0){
        if(isPenaltyAni == true){
            penalty_box.classList.toggle("scaleDown")
            isPenaltyAni = false;
            document.querySelector(".scaleDown").addEventListener("animationend",()=>{
                penalty_box.classList.remove("scaleDown")
            })

        }
    }else if(penalty_box.getBoundingClientRect().bottom < 0 || penalty_box.getBoundingClientRect().top > window.innerHeight){
        isPenaltyAni = true;
    }
    if(document.querySelector(".page2-box-paper").getBoundingClientRect().top < window.innerHeight){
        paper_left.style.left = -paper_left.getBoundingClientRect().top + "px";
        paper_right.style.right = -paper_right.getBoundingClientRect().top + "px";
    }
    console.log(cell_left.getBoundingClientRect().bottom - window.innerHeight)
    if(cell_left.getBoundingClientRect().bottom-window.innerHeight < 0 && isCellAni){
        cell_left.classList.toggle("fade-in")
        cell_right.classList.toggle("fade-in")
        cell_left.style.opacity = 1;
        cell_right.style.opacity = 1;
        isCellAni = false;
        document.querySelector(".fade-in").addEventListener("animationend",()=>{
            cell_left.classList.remove("fade-in")
            cell_right.classList.remove("fade-in")
        })
    }
})
   



