function callback_nextPage(el, anim_class) {
    return function(){
        el.classList.remove(anim_class);
    }
}
let isPipe1 = false
let pipe1 = document.querySelector("#pipe1")
let con_1 = document.querySelector("#construct_page1")
let build1 = document.querySelector("#building_page1")
let isShake1 = false
let tape = document.querySelector("#tape_page1")
let build2 = document.querySelector("#leftbuilding_page1")
let tree = document.querySelector("#tree_page1")
let isTape = false
let isBuild2 = false
let isTree = false
let chat1 = document.querySelector("#poschat_1")
let chat2 = document.querySelector("#poschat_2")
let chat3 = document.querySelector("#poschat_3")
let chat4 = document.querySelector("#poschat_4")
let isChat1 = false
let isChat2 = false
let isChat3 = false
let isChat4 = false
let prison = document.querySelector("#prison")
let prisonText = document.querySelector("#prisonText")
let page2Bottom = document.querySelector(".page2_bottom")
let isPrison = false
let card1 = document.querySelector("#card1")
let card2 = document.querySelector("#card2")
let card3 = document.querySelector("#card3")
let cardPic = document.querySelector(".pic")
let isCard = false
let lastText1 = document.querySelector("#last-text1")
let lastText2 = document.querySelector("#last-text2")
let lastText3 = document.querySelector("#last-text3")
let lastText4 = document.querySelector("#last-text4")
let lastText5 = document.querySelector("#last-text5")

document.addEventListener("scroll", function(){
    document.body.dataset.y = window.scrollY
    let y = document.body.dataset.y
    console.log(y)
    if(y>=100 && y <400){
        if(isPipe1 == false){
            pipe1.style.animation = "ani_pipe1_out .75s linear"
            isPipe1 = true
            pipe1.style.transform = "scaleY(1)"
        }
        con_1.style.top = "180px"
        con_1.style.opacity = "0"
        build1.style.top = "280px"
        build1.style.opacity = "0"
        isShake1 = false
    }
    else if(y<100){
        if(isPipe1 == true){
            pipe1.style.animation = "ani_pipe1_in .5s linear"
            pipe1.style.transform = "scaleY(-1)"
            isPipe1 = false
        }
    }
    else if(y>=400 && y<900){
        if(isShake1 == false){
            con_1.classList.toggle("structure_building");
            con_1.addEventListener("webkitAnimationEnd", callback_nextPage(con_1, "structure_building"), false);
            build1.classList.toggle("structure_building");
            build1.addEventListener("webkitAnimationEnd", callback_nextPage(build1, "structure_building"), false);
            isShake1 = true
            con_1.style.top = "120px"
            con_1.style.opacity = "1"
            build1.style.top = "220px"
            build1.style.opacity = "1"
        }
        if(isTape == true){
            tape.style.animation = "left_fadeOut linear .75s"
            tape.style.transform = "translateX(-800px)"
            isTape = false
        }
    }
    else if(y>=900 && y<1100){
        if(isTape == false){
            tape.style.animation = "left_fadeIn linear .75s"
            tape.style.transform = "translateX(0px)"
            isTape = true
        }
        if(isBuild2 == true){
            build2.style.animation = "left_fadeOut linear .75s"
            build2.style.transform = "translateX(-800px)"
            isBuild2 = false
        }
    }
    else if(y>=1100 && y<1400){
        if(isBuild2 == false){
            build2.style.animation = "left_fadeIn linear .75s"
            build2.style.transform = "translateX(0px)"
            isBuild2 = true
        }
        if(isTree == true){
            tree.style.animation = "left_fadeOut linear .75s"
            tree.style.transform = "translateX(-800px)"
            isTree = false
        }
    }
    else if(y>=1400 && y<1800){
        if(isTree == false){
            tree.style.animation = "left_fadeIn linear .75s"
            tree.style.transform = "translateX(0px)"
            isTree = true
        }
        if(isChat1 == true){
            chat1.style.animation = "chat_rfadeOut linear .5s"
            chat1.style.transform = "translateX(300px)"
            chat1.style.transform = "scaleX(-1)"
            chat1.style.opacity = "0"
            isChat1 = false
        }
    }else if(y>= 1800 && y<1900){
        if(isChat1 == false){
            chat1.style.animation = "chat_rfadeIn linear .5s"
            chat1.style.transform = "translateX(0px)"
            chat1.style.transform = "scaleX(-1)"
            chat1.style.opacity = "1"
            isChat1 = true
        }
        if(isChat2 == true){
            chat2.style.animation = "chat_lfadeOut linear .5s"
            chat2.style.transform = "translateX(300px)"
            chat2.style.opacity = "0"
            isChat2 = false
        }
    }else if(y>= 1900 && y<2000){
        if(isChat2 == false){
            chat2.style.animation = "chat_lfadeIn linear .5s"
            chat2.style.transform = "translateX(0px)"
            chat2.style.opacity = "1"
            isChat2 = true
        }
        if(isChat3 == true){
            chat3.style.animation = "chat_rfadeOut linear .5s"
            chat3.style.transform = "translateX(300px)"
            chat3.style.transform = "scaleX(-1)"
            chat3.style.opacity = "0"
            isChat3 = false
        }
    }else if(y>= 2000 && y<2100){
        if(isChat3 == false){
            chat3.style.animation = "chat_rfadeIn linear .5s"
            chat3.style.transform = "translateX(0px)"
            chat3.style.transform = "scaleX(-1)"
            chat3.style.opacity = "1"
            isChat3 = true
        }
        if(isChat4 == true){
            chat4.style.animation = "chat_lfadeOut linear .5s"
            chat4.style.transform = "translateX(300px)"
            chat4.style.opacity = "0"
            isChat4 = false
        }   
    }else if(y>= 2100 && y<3300){
        if(isChat4 == false){
            chat4.style.animation = "chat_lfadeIn linear .5s"
            chat4.style.transform = "translateX(0px)"
            chat4.style.opacity = "1"
            isChat4 = true
        }
    }else if(y>=3300 && y<4800){
        prison.style.opacity = "1"
        prison.style.transform = "translateY(0px)"
        prison.style.animation = "prison linear .3s .3s"
        prisonText.style.color = "red"
        page2Bottom.style.animation = "prisonText linear .5s .3s"
        if(isCard == true){
            card1.style.animation = "close_card linear .5s"
            card2.style.animation = "close_card linear .5s"
            card3.style.animation = "close_card linear .5s"
            cardPic.style.transform = "translateX(1500px)"
            cardPic.style.opacity = "0"
            isCard = false
        }
    }else if(y>=4800 && y<5000){
        if(isCard == false){
            cardPic.style.animation = "card_pic linear 1s"
            cardPic.style.transform = "translateX(0px)"
            cardPic.style.opacity = "1"
            card1.style.animation = "open_card linear .5s"
            card1.style.transform = "rotateY(0deg)"
            card2.style.animation = "open_card linear .5s .3s"
            card2.style.transform = "rotateY(0deg)"
            card3.style.animation = "open_card linear .5s .6s"
            card3.style.transform = "rotateY(0deg)"
            isCard = true
        }
    }else if(y>=6600 && y<6650){
        lastText1.style.transform = "translateY(0px)"
        lastText1.style.animation = "lastText linear .3s .2s"
        lastText1.style.opacity = "1"
    }else if(y>=6650 && y<6700){
        lastText2.style.transform = "translateY(0px)"
        lastText2.style.animation = "lastText linear .3s .2s"
        lastText2.style.opacity = "1"
    }else if(y>=6700 && y<6750){
        lastText3.style.transform = "translateY(0px)"
        lastText3.style.animation = "lastText linear .3s .2s"
        lastText3.style.opacity = "1"
    }else if(y>=6750 && y<6800){
        lastText4.style.transform = "translateY(0px)"
        lastText4.style.animation = "lastText linear .3s .2s"
        lastText4.style.opacity = "1"
    }else if(y>=6800){
        lastText5.style.transform = "translateY(0px)"
        lastText5.style.animation = "lastText linear .3s .2s"
        lastText5.style.opacity = "1"
    }
})