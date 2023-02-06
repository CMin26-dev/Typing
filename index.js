
let title= document.getElementById('randomWord');
let inputTitle= document.getElementById('inputWord');
let worddictionary =  ["a","b","c","d","e","f","i","g","h","one","two","three","four","five","six","seven","eight","nine","ten"];
//console.log(worddictionary.length);
//1.randomtukhoa
let randomword = worddictionary[ Math.floor(Math.random() *worddictionary.length )];
 console.log(randomword);
let score = document.getElementById("point 1");
let tim = document.getElementById('countDowntime');

let time = 11;
let countDown = setInterval(thoigian,1000);
let point=0;

function lopp()
{
    score.innerHTML = "Your Score: " + point;
   
    randomword = worddictionary[Math.floor(Math.random() * worddictionary.length)];
    title.innerHTML = randomword;
    inputTitle.value = "";
    countDown;
    time = 11;
    return countDown;
}
let addBt = document.getElementById('addBt');

addBt.addEventListener('click',restart)

function restart()
{
    point = 0;
    lopp();
}



//countdown thoigian
function thoigian(){
    time--;
    tim.innerHTML= "Your Time: " + time;
    
    if (time <= 0){
        
       lopp();
    }
 }
title.innerHTML=randomword;
//congdiemkhinhapdung
inputTitle.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        // Do work
        if(inputTitle.value === randomword) {
            //randomword = worddictionary[ Math.floor(Math.random() *worddictionary.length  )];
           // title.innerHTML = randomword;
            //inputTitle.value = "";
            point++;
            lopp();
            
        }else{
            lopp();
        }
    }
})




