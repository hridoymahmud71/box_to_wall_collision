// main js here


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
//var box = document.getElementById('box');

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

// check collison
function checkCollision() {
    return {
        xCollision: getBox().left + getBox().width >= viewportWidth,
        yCollision: getBox().top + getBox().height >= viewportHeight
    }
}


// run the anumation
requestAnimationFrame(animateBox);

function animateBox() {

    console.log(getBox());

    if (getBox().left + getBox().width >= viewportWidth) {
        box.style.right = `${getBox().left + xShift}px`;
    }

    if (getBox().top + getBox().height >= viewportHeight) {
        box.style.bottom = `${getBox().top + yShift}px`;
    }

    if(getBox().left <= viewportWidth){
        box.style.left = `${getBox().left + xShift}px`;
    }

    if(getBox().top <= viewportHeight){
        box.style.top = `${getBox().top + yShift}px`;
    }

    
    

    requestAnimationFrame(animateBox);

}