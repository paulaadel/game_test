//From this CodePen https://codepen.io/ticklina/pen/OXxLbo by @ilovepeoplez
//Added an image, piece rotating and logic for checking the solution.
//Fixed small visibility issues and allowed auto-scrolling when dragging a piece and approaching the bottom end.
//Moreover, added an audio effect (https://freesound.org/people/sironboy/sounds/132106/) for each movement until the solution is correct, at which point, the player can no longer continue the game.

var playing = true;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
  if(playing == true){
    ev.dataTransfer.setData("text", ev.target.id);
  }
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	try{
	  if(ev.target.id.includes("drag")){
	    return;
	  }
      ev.target.appendChild(document.getElementById(data));
	}catch{
	}
	check();
}

function rotate(img){
  if(playing == true){
    var angle;
    var className = img.className;
    angle = Number(className.substring(6,className.length));
    angle = (angle + 90) % 360;
    img.className = "rotate" + angle;
    check();
  }
}


function check(){
  if(checkAngles() && checkPositions()){
    alert("Correct. Well done!");
	playing = false;
  }else{
   
  }
}

function checkAngles(){
  if(document.getElementById("drag1").className.includes("180") && document.getElementById("drag2").className.includes("270") && document.getElementById("drag3").className.includes("rotate0") && document.getElementById("drag4").className.includes("90") && document.getElementById("drag5").className.includes("180") && document.getElementById("drag6").className.includes("90") && document.getElementById("drag7").className.includes("180") && document.getElementById("drag8").className.includes("rotate0") && document.getElementById("drag9").className.includes("rotate270") && document.getElementById("drag10").className.includes("rotate180") && document.getElementById("drag11").className.includes("rotate90") && document.getElementById("drag12").className.includes("rotate270")){
    return true;
  }
}

function checkPositions(){
  if(document.getElementById("drag1").parentNode.id == "div5" && document.getElementById("drag2").parentNode.id == "div10" && document.getElementById("drag3").parentNode.id == "div3" && document.getElementById("drag4").parentNode.id == "div4" && document.getElementById("drag5").parentNode.id == "div9" && document.getElementById("drag6").parentNode.id == "div8" && document.getElementById("drag7").parentNode.id == "div2" && document.getElementById("drag8").parentNode.id == "div6" && document.getElementById("drag9").parentNode.id == "div11" && document.getElementById("drag10").parentNode.id == "div1" && document.getElementById("drag11").parentNode.id == "div12" && document.getElementById("drag12").parentNode.id == "div7"){
    return true;
  }
}