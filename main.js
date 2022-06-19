// main js here

// check if collision happened in any axis
var xCollision = false;
var yCollision = false;

// initial box position
var xPosition = 0;
var yPosition = 50;

//  shift in x and y
var xShift = 10;
var yShift = 10;

var viewportWidth = 0;
var viwportHeight = 0;

setViewPort();


function setViewPort() {
     viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
     viwportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

     console.log(viewportWidth,viwportHeight);
}

window.addEventListener('resize', function(event){
   setViewPort();
});

function animateBox() {

}