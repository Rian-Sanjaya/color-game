// fill array with random colors
var numSquares = 6;
var colors = [];
// pick a random color from the array and assign to a variable
var pickedColor;
var header = document.getElementById("header");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	// add event click to each square and the logic for checking  the clicked square color
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;

			if (clickedColor === pickedColor) {
				changeColor(clickedColor);
				header.style.background = clickedColor;
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "PLAY AGAIN?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try again"
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	// display the RGB picked color
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	header.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "NEW COLORS";
}

// if correct, set all squares background color with the correct color
function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

// pick a random color from the array
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// fill array with random colors
function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

// generate random color
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}