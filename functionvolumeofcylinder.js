const prompt=require("prompt-sync")();
let volume =(r)=>
{
	const PI=3.14;
	return  1.33*PI*r*r;
}

let v;
x =parseFloat(prompt("Enter radious = "));
v = volume(x);
console.log("Volume of cylinder ="+ v);
