var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function rcxy(){
let r = Math.floor(Math.random()*256); //rgb(255,255,255) the   red
let g = Math.floor(Math.random()*256); //the green
let b = Math.floor(Math.random()*256); //the blue
ctx.fillStyle = "rgba("+r+","+g+","+b+")"; //now put together
}


rcxy();//color
ctx.fillRect(0,0,400,400);



ctx.fillStyle = "#000";
let size = 10;

let x = Math.ceil(Math.random()*100);
let y = Math.ceil(Math.random()*100);
let xx = Math.ceil(Math.random()*100+size);
let yy = Math.ceil(Math.random()*100+size);
ctx.fillRect(x,y,xx,yy);
ctx.fillRect(400-x-xx,y,xx,yy);
ctx.fillRect(x,400-y-yy,xx,yy);
ctx.fillRect(400-x-xx,400-y-yy,xx,yy);

ctx.fillRect(200-xx/2,200-yy/2,xx,yy);//h
ctx.fillRect(200-yy/2,200-xx/2,yy,xx);//v


ctx.fillRect(200-(xx*2),200-yy/8,xx*4,yy/4);//hhhh
ctx.fillRect(200-yy/4+yy/8,200-xx*2,yy/4,xx*4);//vvvv


//APLI

//h
ctx.beginPath();
ctx.arc(200-(xx*2),200,xx/2,0,2*Math.PI);
ctx.fill();

//hh
ctx.beginPath();
ctx.arc(200-(xx*2)+xx*4,200,xx/2,0,2*Math.PI);
ctx.fill();

//v
ctx.beginPath();
ctx.arc(200,200-xx*2,xx/2,0,2*Math.PI);
ctx.fill();

//vv
ctx.beginPath();
ctx.arc(200,200-xx*2+xx*4,xx/2,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.strokeRect(50,50,300,300);
ctx.stroke();
