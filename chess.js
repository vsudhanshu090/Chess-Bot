var canvas = document.getElementById("myCanvas");  

var width = canvas.width;
var height = canvas.height;

var w = Math.floor(width/8); //width of one square

var c = canvas.getContext("2d");  
c.fillStyle = "gray";  
c.fillRect(0,0,width,height);

var rows = 8;
var cols = 8;

var board = [];