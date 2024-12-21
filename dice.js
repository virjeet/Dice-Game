var p1=Math.floor(Math.random()*6+1);
var p2=Math.floor(Math.random()*6+1);

if(p1>p2){
    document.querySelector("h1").textContent="🚩Player one won";
}
else if(p1===p2){
    document.querySelector("h1").textContent="Its a draw";

}
else{
    document.querySelector("h1").textContent="Player two won🚩";
}


var img1="dice"+p1+".png";
var imgsrc1="photos/"+img1;
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",imgsrc1);


var img2="dice"+p2+".png";
var imgsrc2="photos/"+img2;
var image=document.querySelectorAll("img")[1];
image.setAttribute("src",imgsrc2);




















// var p1=Math.round(Math.random()*6+1);
// var p2=Math.round(Math.random()*6+1);

// if(p1>p2){
//     document.querySelector("h1").textContent="Player one won";
// }
// else if(p1===p2){
//     document.querySelector("h1").textContent="Its a draw";

// }
// else{
//     document.querySelector("h1").textContent="Player two won";
// }

// if(p1===1){
//     document.querySelector("#one").setAttribute("src","photos/dice1.png");
// }
// else if(p1===2){
//     document.querySelector("#one").setAttribute("src","photos/dice2.png");
// }
// else if(p1===3){
//     document.querySelector("#one").setAttribute("src","photos/dice3.png");
// }
// else if(p1===4){
//     document.querySelector("#one").setAttribute("src","photos/dice4.png");
// }
// else if(p1===5){
//     document.querySelector("#one").setAttribute("src","photos/dice5.png");
// }
// else{
//     document.querySelector("#one").setAttribute("src","photos/dice6.png");
// }

// if(p2===1){
//     document.querySelector("#two").setAttribute("src","photos/dice1.png");
// }
// else if(p2===2){
//     document.querySelector("#two").setAttribute("src","photos/dice2.png");
// }
// else if(p2===3){
//     document.querySelector("#two").setAttribute("src","photos/dice3.png");
// }
// else if(p2===4){
//     document.querySelector("#two").setAttribute("src","photos/dice4.png");
// }
// else if(p2===5){
//     document.querySelector("#two").setAttribute("src","photos/dice5.png");
// }
// else{
//     document.querySelector("#two").setAttribute("src","photos/dice6.png");
// }


