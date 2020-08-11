var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

 css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function rand(){


var number1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);  //generates a random color value
var number2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

	body.style.background = 
	"linear-gradient(to right, " 
	+ number1
	+ ", " 
	+ number2
	+ ")";

	css.textContent = body.style.background + ";";
};


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);