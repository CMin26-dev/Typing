
let title= document.getElementById('randomWord');
let inputTitle= document.getElementById('inputWord');
let worddictionary =  ["Tôi","có","c","d","e","f","i","g","h","one","two","three","four","five","six","seven","eight","nine","ten","lấy","ví","dụ","một","dòng","sông","trôi","chảy","bản","sắc","cố","hữu","của","dân","tộc","Việt","Nam"];
//console.log(worddictionary.length);
//1.randomtukhoa
let randomword = worddictionary[ Math.floor(Math.random() *worddictionary.length )];
 console.log(randomword);
let diem = document.getElementById("point");
let counttime = document.getElementById('countDowntime');

let time = 1;
let countDown = setInterval(thoigian,1000);
let point=0;

function het()
{
   
    randomword = worddictionary[Math.floor(Math.random() * worddictionary.length)];
    title.innerHTML = randomword;
    inputTitle.value = "";
    countDown;
    time = 15;
    return countDown;
    
}
let addbutton = document.getElementById('addbutton');

addbutton.addEventListener('click',restart)

function restart()
{
    point = 0;
    diem.innerHTML = point;
    time = 0
    time.innerHTML =time;
    het();

}



//countdown thoigian
function thoigian(){
    time--;
    counttime.innerHTML= "Your Time: " + time;
    
    if(time<=-1) {
        alert("Het gio!!!");
        restart();
    }
 }
title.innerHTML=randomword;
//congdiemkhinhapdung
inputTitle.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        // Do work
        if(inputTitle.value === randomword) {
            randomword = worddictionary[ Math.floor(Math.random() *worddictionary.length  )];
           title.innerHTML = randomword;
            inputTitle.value = "";
            point++ ;
            diem.innerHTML = "Your Score: " + point;
            
        }else {
            het();
        }
    }
})




