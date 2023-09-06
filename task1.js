function startTime(){
	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();


	if(hour <= 12){
		hour = hour
	}else{
		hour = hour-12;
	}

	//adding 0 if it is less than 10 

	hour = concatZero(hour);
	minutes = concatZero(minutes);
	seconds = concatZero(seconds);


	var mode;
	if(hour < 11){
		mode  ="AM";
	}else{
		mode="PM";
	}
	document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + " " + mode ;
	setTimeout(startTime, 500)
}


function concatZero(value){
	if(value < 10){
		value = "0" + value;
	}
	return value;
}

//screen
let screen = document.getElementById("screen");

//type to screen
function press(numValue){
if(screen.value == 0){
	screen.value = '';
}
screen.value += numValue;

}

//clear screen
function clearScreen(val){
screen.value=val;
}

//delete key
function backspace(){
const space = screen;
screen.value = space.value.substring(0, space.value.length - 1);
}

//calculate function
function calculate(){
if(screen.value != ''){
	try{
	clearScreen(eval(screen.value))
}catch(err){
	clearScreen("Bad Expression")
}
}
}

function sine(){
screen.value = Math.sin(screen.value * Math.PI/180);
}
function cosine(){
screen.value = Math.cos(screen.value * Math.PI/180);
}
function tan(){
screen.value = Math.tan(screen.value * Math.PI/180);
}
function cot(){
screen.value =1/Math.tan(screen.value * Math.PI/180);
}

function invsine(){
screen.value = Math.asin(screen.value) * (180 / Math.PI);
}
function invcosine(){
screen.value = Math.acos(screen.value) * (180 / Math.PI);
}
function sineh(){
screen.value = Math.sinh(screen.value * Math.PI/180);
}
function cosineh(){
screen.value = Math.cosh(screen.value * Math.PI/180);
}
function tanh(){
screen.value = Math.tanh(screen.value * Math.PI/180);
}
function invtan(){
screen.value = Math.atan(screen.value) * (180 / Math.PI);
}
function ln(){
screen.value =Math.log(screen.value);
}
function log(){
screen.value =Math.log10(screen.value);
}
function percent(){
screen.value = (screen.value/100);
}
function square(){
screen.value = Math.pow(screen.value,2);
}
function cube(){
screen.value = Math.pow(screen.value,3);
}
function sqrt(){
screen.value = Math.sqrt(screen.value);
}


//function fo +/-
function plusminus(){
var x=screen;
var y=x.value;
y=y*-1;
x.value = y;
}

//function for exponential
function Exp(){
screen.value = Math.pow(10, screen.value)
}
