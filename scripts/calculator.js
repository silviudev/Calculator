"use strict";

var textField = document.getElementById("textBox");
var numberButtonArray = Array.from(document.getElementsByClassName("number"));
var clearButton = document.getElementById("clearButton");
var decimalButton = document.getElementById("decimalButton");
var addButton = document.getElementById("add");
var divideButton = document.getElementById("divide");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var squareRootButton = document.getElementById("sqrt");
var roundButton = document.getElementById("round");
var flipSignButton = document.getElementById("posneg");
var fibButton = document.getElementById("fib");
var primeButton = document.getElementById("prime");
var equalsButton = document.getElementById("equals");

var maxDigits = 8;
var operator = "";
var num1 = -1;

//add event listeners to the number buttons
numberButtonArray.forEach(function(item){
	item.addEventListener("click", function(){
		if(textField.value == "0") textField.value = "";
		if(textField.value.length < maxDigits) textField.value += this.innerHTML;
	});
});

//add event listener to clear button
clearButton.addEventListener("click", function(){
	clearDisplay();
	resetFunctionality();
});

//add event listener to decimal button
decimalButton.addEventListener("click", function(){
		if(textField.value.length < maxDigits + 1 && textField.value.length > 0 && !textField.value.includes(".")) 
		textField.value += ".";
});

//add event listener to addition button
addButton.addEventListener("click", function(){
	num1 = Number.parseFloat(textField.value);
	operator = "add";
	clearDisplay();
});

//add event listener to multiply button
multiplyButton.addEventListener("click", function(){
	num1 = Number.parseFloat(textField.value);
	operator = "multiply";
	clearDisplay();
});

//add event listener to subtract button
subtractButton.addEventListener("click", function(){
	num1 = Number.parseFloat(textField.value);
	operator = "subtract";
	clearDisplay();
});

//add event listener to divide button
divideButton.addEventListener("click", function(){
	num1 = Number.parseFloat(textField.value);
	operator = "divide";
	clearDisplay();
});

//add event listener to square root button
squareRootButton.addEventListener("click", function(){
	num1 = Number.parseFloat(textField.value);
	if(num1 >= 0){
		textField.value = Math.sqrt(num1);
		num1 = -1;
		manageDisplayLength();
	}else{
		alert("Taking the square root of a negative number is not possible in this calculator as it does not result in a real number");
	}

});

//add event listener to round button
roundButton.addEventListener("click", function(){
	num1 = Number.parseFloat(textField.value);
	textField.value = Math.round(num1);
	num1 = -1;
});

//add event listener to flip sign button
flipSignButton.addEventListener("click", function(){
	if(textField.value != "0"){
		if(!textField.value.includes("-")){
			textField.value = "-".concat(textField.value);
		}else{
			textField.value = textField.value.slice(1);
		}		
	}
});

//add event listener to fibonacci button
fibButton.addEventListener("click", function(){
	var n = Math.abs(Math.round(Number.parseFloat(textField.value)));
	
	if(n > 10000000){
		alert("Fibonacci numbers quickly approach infinity at high indices. Entering extremely high values (above 10 million) for this calculation may freeze your browser. Please enter a lower value for Fibonacci calculations")
	}else{
		var old = 0;
		var previous = 0;
		var current = 1;
		var count = 0;
		
		if(n == 0){
			textField.value = 0;
		}else{
			while(count < n-1){
				old = previous;
				previous = current;
				current = old + previous;
				count++;
			}
		}
		
		textField.value = current;
		manageDisplayLength();		
	}

});

//add event listener to prime button
prime.addEventListener("click", function(){
	var n = Math.abs(Math.round(Number.parseFloat(textField.value)));
	if(n==0) return;
	
	if(n == 1){
		textField.value = "2";
	}else if(n <= 100000){
		var temp = 1;
		var count = 1;
		
		while(count < n){
			temp+=2;
			if(isPrime(temp)){
				count++;
			}
		}
		textField.value = temp;
	}else{
		alert("Finding more than 100000 prime numbers would take very long and may freeze your browser. Please enter a value of 1000 or below for Prime number calculation");
	}
});


//add event listener to equals button
equalsButton.addEventListener("click", function(){
	var num2 = Number.parseFloat(textField.value);
	
	if(num1 != -1 && textField.value.length > 0 && operator != ""){
		if(operator == "add"){
			textField.value = add(num1, num2).toString();
		}else if(operator == "subtract"){
			textField.value = subtract(num1,num2).toString();
		}else if(operator == "multiply"){
			textField.value = multiply(num1,num2).toString();
		}else if(operator == "divide"){
			textField.value = divide(num1,num2).toString();
		}
	}
	num1 = -1;
	
	manageDisplayLength();
});

function clearDisplay(){
	textField.value = 0;
}

function resetFunctionality(){
	num1 = 0;
	num2 = 0;
	operator = "";
}

function manageDisplayLength(){
	if(textField.value.includes("e") || textField.value.length > 9){
		textField.value = Number.parseFloat(textField.value).toPrecision(7);
	}	
}

function isPrime(num){
	var limit = Math.sqrt(num);
	for(var i = 3; i <= limit; i++){
		if(num%i == 0){
			return false;
		}
	}
	return true;
}

function add(a,b){
	return a + b;
}

function subtract(a,b){
	return a - b;
}

function multiply(a,b){
	return a * b;
}

function divide(a,b){
	return a / b;
}

