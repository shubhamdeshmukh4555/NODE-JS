const prompt=require("prompt-sync")();
let maximum = (a,b) =>
{
	if(a>b)
	{
		console.log("Max = "+a);
	}
	else
	{
		console.log("Max = "+b);
	}
}

let p,q;
p = parseInt(prompt("Enter 1st no = "));
q = parseInt(prompt("Enter 2nd no = "));
maximum(p,q);
