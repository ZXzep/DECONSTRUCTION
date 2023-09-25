let head_count = document.querySelector("#content-head").dataset
let head_text = document.querySelector("#content-head")
let message = document.querySelector("#box-message")
let rule = document.querySelector('#rule-text')
let checkbox = document.getElementById('checkbox')
let cl_1_2 = document.querySelector("#cl_1_2")
// let cl_2_3 = document.getElementById("cl_2_3")
let object = document.getElementById("object-img")
let checklist = document.querySelector('.checklist');
let messages = [
    {
        page: "1",
        text: "ในขณะที่มีการก่อสร้างได้จัดทำ<br>ผ้าใบทึบแสงหรือผ้าใบโปร่งแสง<br>หรือวัสดุที่คล้ายกันมาปกคลุมตัว<br>อาคารตลอดแนวอาคารจนกว่า<br>การดำเนินงานจะแล้วเสร็จ",
        res_rule: "ระเบียบและข้อปฏิบัติในการควบคุมฝุ่นละออง<br>จากการก่อสร้างอาคาร ข้อ 4.4",
        html:`<img id="cl_1_1" src="./asset/Section3/checklist_1.1.png" >
            <img id="cl_1_2" src="./asset/Section3/checklist_1.2.png" >`
    },
    {
        page: "2",
        text: "ต้องทำความสะอาด เศษหิน โคลน ทราย<br>ที่ตกหล่นอยู่ข้างนอกรอบรั้วโครงการทุกวันโดยมีมาตรการทำความสะอาดที่ได้ผล",
        res_rule: "ระเบียบและข้อปฏิบัติในการควบคุมฝุ่นละออง<br>จากการก่อสร้างอาคาร ข้อ 4.7",
        html:`<img id="cl_2_1" src="./asset/Section3/checklist_2.1.png">
            <img id="cl_2_2" src="./asset/Section3/checklist_2.2.png">
            <img id="cl_2_3" src="./asset/Section3/checklist_2.3.png">`
    },
    {
        page: "3",
        text: "การก่อสร้าง ดัดแปลง หรือรื้อถอน ระดับเสียงไม่เกิน 115 เดซิเบล ในช่วง 6:00 - 22:00 น. และไม่เกิน 75 เดซิเบล ในช่วงเวลา 22:00 - 6:00 น.",
        res_rule: "กำหนดมาตราฐานระบบเสียงโดยทั่วไป ฉบับที่ 15 (พ.ศ. 2540)",
        html:`<img id="cl_4_1" src="./asset/Section3/checklist_4.1.png">
            <div class="wavy"><img id="cl_4_2" class="wave" src="./asset/Section3/checklist_4.2(sound).svg"></div>`
    },
    {
        page: "4",
        text: "หลังทำความสะอาดพื้นที่ก่อสร้างแล้วไม่ให้น้ำที่ฉีดไหลออกนอกบริเวณก่อสร้างลงสู่พื้นผิวถนนหรือท่อระบายน้ำสาธารณะ",
        res_rule: "ระเบียบและข้อปฏิบัติในการควบคุมฝุ่นละออง<br>จากการก่อสร้างอาคาร ข้อ 4.3",
        html:`<img id="cl_3_1" src="./asset/Section3/checklist_3.1.png">
        <img id="cl_3_3" src="./asset/Section3/checklist_3.3.png">
        <img id="cl_3_2" src="./asset/Section3/checklist_3.2.png">
        <img id="cl_3_4" src="./asset/Section3/checklist_3.4.png">`
    },
    {
        page: "5",
        text: "ใช้ดินเหนียวถมที่ดินก่อนก่อสร้างและไม่ใช้เศษอิฐหรือเศษปูนมาผสมกับดินที่ใช้ในการถม",
        res_rule: "",
        html:`<img id="cl_5_2" src="./asset/Section3/checklist_5.2.png">
        <img id="cl_5_1" src="./asset/Section3/checklist_5.1.png">`
    }
    
]
function callback_nextPage() {
    checklist.classList.remove('fade_in'); 
}
function nextElem(){
    // change detail in div box
    html = ""
    checkbox.checked = 0;
    head_count.count = parseInt(head_count.count) + 1
    head_text.innerHTML = `รายการ ${head_count.count}/5`
    message.innerHTML = messages[head_count.count-1].text
    rule.innerHTML = messages[head_count.count-1].res_rule
    html += messages[head_count.count-1].html
    object.innerHTML = html;

    // Animation class checklist when Click next question
    checklist.classList.toggle("fade_in");
    checklist.addEventListener("webkitAnimationEnd", callback_nextPage, false);
}

function showElem(el){
    // if input is not checked
    if (el.checked == 0 ){
        if(head_count.count == 1){
            cl_1_2.style.animation = "moveUp 1s linear forwards"
        }
        else if(head_count.count == 2){
            cl_2_3.style.animation = "moveLeftToRight 1s linear forwards";
            cl_2_2.style.animation = "fade-in 1s linear forwards";
        }
        else if(head_count.count == 3){
            document.querySelector('.wavy').style.animation = "fade-in .5s linear forwards";
        }   
        else if(head_count.count == 4){
            cl_3_4.style.animation = "moveLeftToRight 1s linear  forwards";
            cl_3_3.style.animation = "fade-in 1s linear forwards";
            
        }else if(head_count.count == 5){
            cl_5_1.style.animation = "fade-in 1s linear forwards";
        }
    }
    // if input is checked
    else{
        if(head_count.count == 1){
            cl_1_2.style.display = "block"
            cl_1_2.style.animation = "moveDown 1s linear forwards"
        }
        else if( head_count.count == 2){
            cl_2_3.style.display = "block";
            cl_2_3.style.animation = "moveRightToLeft 1s linear forwards";
            cl_2_2.style.animation = "fade-out 1s linear 1s forwards";
            
        }
        else if(head_count.count == 3){
            document.querySelector('.wavy').style.animation = "fade-out .5s linear  forwards";
        }
        else if(head_count.count == 4){
            cl_3_4.style.display = "block"
            cl_3_4.style.animation = "moveRightToLeft 1s linear forwards";
            cl_3_3.style.animation = "fade-out 1s linear 1s forwards";
            
        }else if(head_count.count == 5){
            cl_5_1.style.animation = "fade-out 1s linear .3s forwards";
        }
    }
    
}
