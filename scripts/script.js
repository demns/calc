var v1 = 0, v2 = 0;
var flag = false;
var operator = 0;
var decimal_divider = 1;

function clearscreen()
{
	document.getElementById("display").value = "";
	document.getElementById("display1").value = "";
	document.getElementById("display2").value = "";
	v1 = 0;
	v2 = 0;
	decimal_divider = 1;
}
function input(num)
{
	if(decimal_divider ==1)
	{
		if(flag == false)
			v1 = v1*10+num;
		else
			v2 = v2*10+num;
	}
	else
	{
		if(flag == false)
			v1 = v1+num/decimal_divider;
		else
			v2 = v2+num/decimal_divider;
	}
	document.getElementById("display").value += num.toString();
	document.getElementById("display1").value = v1;
	document.getElementById("display2").value = v2;
}

function point()
{
	decimal_divider *=10;
	document.getElementById("display").value += '.';
}

function operation(op)
{
	flag = true;
	decimal_divider = 1;
	document.getElementById("display").value += op;
	operator = op;
}

function output()
{
	switch (operator) {
		case '+':
			v1 += v2;
			break;
		case '-':
			v1 -= v2;
			break;
		case '*':
			v1 *= v2;
			break;
		case '/':
			v1 /= v2;
			break;
		default:
			alert("Error! Operation was not selected!");
	}
	document.getElementById("display").value = v1.toString();
	v2 = 0;
	decimal_divider = 1;
}