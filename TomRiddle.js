window.onload = init;

var gCanvas;
var g2d;
var width = 854;
var height = 480;

var title = "Tom Riddle' Diary";
var gameState = 0;

function init() {
	gCanvas = document.getElementById("gameCanvas");
	gCanvas.width = width;
	gCanvas.height = height ;

	g2d = gCanvas.getContext("2d");
	g2d.imageSmoothingEnabled = false;
	g2d.webkitImageSmoothingEnabled = false;
	g2d.mozImageSmoothingENabled = false;

	console.log("Game canvas initialized");
	draw();
}

function draw() {
	if (gameState == 0) { 
		g2d.font = "20px Verdana";
		g2d.fillStyle = "#FFFFFF";
		g2d.fillText(title, (width / 2) - (g2d.measureText(title).width / 2, 30;
	}

	console.log("Game drawn successfully");
}