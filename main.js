// main js here

var xCollision = false;
var yCollision = false;

//  shift in x and y
var xShift = 10;
var yShift = 10;

var viewportWidth = 0;
var viewportHeight = 0;

setViewPort();



function setViewPort() {
    viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}

var box = document.querySelector('.box');

// postion and width height of the box
function getBox() {

    return {
        top: window.scrollY + box.getBoundingClientRect().top,
        left: window.scrollX + box.getBoundingClientRect().left,
        width: box.clientWidth,
        height: box.clientHeight
    }

}

// dynamic view port on resize
window.addEventListener('resize', function (event) {
    setViewPort();
});



// run the anumation
requestAnimationFrame(animateBox);

function animateBox() {

    // if left + width of the box exceeds the viewport right while going right
    // or if the left of the box touches the window left
    xCollision = ( getBox().left + getBox().width >= viewportWidth) || (getBox().left  < 0);

    // if top + width of the box exceeds the viewport bottom while going down
    // or if the top of the box touches the window top
    yCollision = (getBox().top + getBox().height >= viewportHeight) || (getBox().top  < 0);

    // on collision change x direction
    if(xCollision){
        xShift = -1 * xShift;
    }

    //  on colltion change y direction
    if(yCollision){
        yShift = -1 * yShift;
    }   

    box.style.left = `${getBox().left + xShift}px`;
    box.style.top = `${getBox().top + yShift}px`;    
    

    // recursively call the anmimated box, settimeout may not be a good option
    requestAnimationFrame(animateBox);

}