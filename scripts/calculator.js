"use strict";

var textField = document.getElementById("textBox");
var numberButtonArray = Array.from(document.getElementsByClassName("number"));
var clearButton = document.getElementById("clearButton");
var decimalButton = document.getElementById("decimalButton");

var maxDigits = 8;
var operator;
var current 

//add event listeners to the number buttons
numberButtonArray.forEach(function(item){
	item.addEventListener("click", function(){
		if(textField.value.length < maxDigits) textField.value += this.innerHTML;
	});
});

//add event listener to clear button
clearButton.addEventListener("click", function(){
	textField.value = "";
});

//add event listener to decimal button
decimalButton.addEventListener("click", function(){
		if(textField.value.length < maxDigits + 1 && textField.value.length > 0 && !textField.value.includes(".")) 
		textField.value += ".";
});

