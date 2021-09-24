
canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="grey";
ctx.linewidth =1;
ctx.rect(150 , 143 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.linewidth =5;
ctx.arc(250 , 210 , 40  , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.linewidth= 5;
ctx.arc(330 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.linewidth= 5;
ctx.arc(410 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.linewidth= 5;
ctx.arc(370 , 260 , 40 , 0 , 2 * Math.PI);

ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.linewidth= 5;
ctx.arc(285 , 260 , 40 , 0 , 2 * Math.PI);
ctx.stroke(); 