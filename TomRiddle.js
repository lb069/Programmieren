window.onload = init;

var gCanvas;
var g2d;
var width = 854;
var height = 480;

var title = "Tom Riddle's Diary";
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
		g2d.font = "60px Apple Chancery";
		g2d.fillStyle = "#FFFFFF";
		g2d.fillText(title, (width / 2) - (g2d.measureText(title).width / 2), 140);
	
		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC"; 
		g2d.fillText("1. Spiel starten", (width / 2) - (g2d.measureText("1. Spiel starten").width / 2), 200); 
		g2d.fillText("2. Spiel verlassen", (width / 2) - (g2d.measureText("2. Spiel verlassen").width / 2), 244); 

		var input = new CanvasInput({
			canvas: gCanvas,
			x: 10,
			y: 450,
			placeholder:'Eingabe hier...'
		});
	}
	if (gameState == 1) {
		g2d.font = "60px Apple Chancery";
		g2d.fillStyle = "#FFFFFF";
		g2d.fillText("Vielen Dank fuers Spielen!", (width / 2) - (g2d.measureText("Vielen Dank fuers Spielen!").width / 2), 140);
	
		g2d.font = "24px Courier New";
		g2d.fillStyle = "#CCCCCC"; 
		g2d.fillText("Programmiert von", (width / 2) - (g2d.measureText("Programmiert von").width / 2), 200); 
		g2d.fillText("Sandra Keller", (width / 2) - (g2d.measureText("Sandra Keller").width / 2), 244); 
		g2d.fillText("Lara Bihlmaier", (width / 2) - (g2d.measureText("Lara Bihlmaier").width / 2), 288); 

	}

	console.log("Game drawn successfully");
}