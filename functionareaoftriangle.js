const prompt=require("prompt-sync")();
let area=(l,b) =>
{
	return 0.5*l*b;
}

let a;
p = parseFloat(prompt("Enter length = "));
q = parseFloat(prompt("Enter breadth = "));
a = area(p,q)
console.log("Area of triangle = "+a);
