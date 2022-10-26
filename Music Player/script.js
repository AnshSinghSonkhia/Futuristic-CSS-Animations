var x1=document.getElementById("myAudio1");
var x2=document.getElementById("myAudio2");
var x3=document.getElementById("myAudio3");
var x4=document.getElementById("myAudio4");
var x5=document.getElementById("myAudio5");
var x6=document.getElementById("myAudio6");
var x7=document.getElementById("myAudio7");
var x8=document.getElementById("myAudio8");
var x9=document.getElementById("myAudio9");
var x10=document.getElementById("myAudio10");
var x11=document.getElementById("myAudio11");
var x12=document.getElementById("myAudio12");

var stop=document.getElementById("stop");
var play=document.getElementById("play");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var repl=document.getElementById("repl");
var shuf=document.getElementById("shuf");

var myMusics=[x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12];
var musicName=["Faded","main rang sharbatoon ka","agar tum sath ho","kabira","Tum mile","bandeya","meharbani","ranjha","pee loon","chhanna meryea","the spectra","Love me like i do"];
var current=Math.floor(Math.random()*13);
console.log(current);
var other=current+1;
console.log(other);
var pre=current-1;
console.log(pre);

function playAudio(){
    // confirm("Do you wanted to play music?");
    document.getElementById("text").innerHTML="Playing music "+(current)+" of 12";
    document.getElementById("music_name").innerHTML=musicName[current];
        myMusics[current].play();
        stop.style.display='block';
        play.style.display='none';
        var a=document.getElementsByTagName('hr');

        for(var i=0;i<11;i++){
            a[i].className+=" bar";
        }
}

function pauseAudio(){
        myMusics[current].pause();
        stop.style.display='none';
        play.style.display='block';
        let a=document.getElementsByTagName('hr');
        for(let i=0;i<11;i++){
            a[i].classList.remove('bar');
        }
        // myMusics[pre].pause();
        // myMusics[other].pause();
}

function nextAudio(){
    myMusics[current].pause();
    current=current+1;
    if(current>11){
        current=1;
    }
    document.getElementById("text").innerHTML="Playing music "+(current)+" of 12";
    document.getElementById("music_name").innerHTML=musicName[current];
    myMusics[current].play();
    stop.style.display='block';
    play.style.display='none';


    var a=document.getElementsByTagName('hr');
    for(var i=0;i<11;i++){
        a[i].className+=" bar";
    }
    
}

function prevAudio(){
    myMusics[current].pause();
    current=current-1;
    if(current<0){
        current=11;
    }
    document.getElementById("text").innerHTML="Playing music "+(current+1)+" of 12";
    document.getElementById("music_name").innerHTML=musicName[current]; 
    myMusics[current].play();
    stop.style.display='block';
    play.style.display='none';

    var a=document.getElementsByTagName('hr');
    for(var i=0;i<11;i++){
        a[i].className+=" bar";
    }
}




// function pauseAudio(){
//     myMusics[current].pause();
//     stop.style.display='none';
//     play.style.display='block';

//     let a=document.getElementsByTagName('hr');
//     for(let i=0;i<11;i++){
//         a[i].classList.remove('bar');
//     }
//     // myMusics[pre].pause();
//     // myMusics[other].pause();
// }
