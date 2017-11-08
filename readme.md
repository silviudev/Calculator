			### About Javascript Calculator

			This is an online calculator that allows you to perform basic calculations such as addition, subtraction, multiplication, division, and square root. It works with both positive and negative numbers as well as decimals. It also has an "RND" button which rounds the currently displayed number to the nearest whole.

			This calculator also has some unique functionality. The "FIB" button allows you to find the Nth <a href="https://en.wikipedia.org/wiki/Fibonacci_number" target="new">Fibonacci number</a>, with N being the number currently displayed on the screen. The program will not allow the user to perform this function with a number higher than ten million, as that might take too long and cause the browser to freeze.

			The other special function this calculator has is the ability to find the Nth <a href="https://en.wikipedia.org/wiki/Prime_number" target = "new">prime number</a> using the "PRIM" button, where N is the currently displayed number. The program won't allow values higher than 100,000 for this, as that could take too long and may freeze the browser.
			
			I was surprised to find that large numbers are handled very nicely by Javascript's default Number type, so I didn't have to implement special functionality for numbers that don't fit in the 64-bit type. Javascript automatically uses the power of ten notation for very large numbers and even uses "Infinity" for numbers that are too large even for that, which I didn't know before and found very interesting. 