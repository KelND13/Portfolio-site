// JavaScript for website

// Variables:
const header = document.getElementById("header");
const biggerOne = document.querySelector("#biggerOne");
const biggerTwo = document.querySelector("#biggerTwo");
const biggerThree = document.querySelector("#biggerThree");
const biggerFour = document.querySelector("#biggerFour");
const biggerFive = document.querySelector("#biggerFive");
const biggerSix = document.querySelector("#biggerSix");
const twitter = document.querySelector("#twitter");
const github = document.querySelector("#github");
const linkedin = document.querySelector("#linkedin");
const test = document.querySelector(".test");


biggerOne.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerOne") {
	biggerOne.style.width = "410px";
	biggerOne.style.height = "410px";
	}
});
biggerOne.addEventListener("mouseout", () => {
	biggerOne.style.width = "400px";
	biggerOne.style.height = "400px";
});

biggerTwo.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerTwo") {
		biggerTwo.style.width = "410px";
		biggerTwo.style.height = "410px";
	}
});
biggerTwo.addEventListener("mouseout", () => {
	biggerTwo.style.width = "400px";
	biggerTwo.style.height = "400px";
});

biggerThree.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerThree") {
	biggerThree.style.width = "410px";
	biggerThree.style.height = "410px";
	}
});
biggerThree.addEventListener("mouseout", () => {
	biggerThree.style.width = "400px";
	biggerThree.style.height = "400px";
});

biggerFour.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerFour") {
	biggerFour.style.width = "410px";
	biggerFour.style.height = "410px";
	}
});
biggerFour.addEventListener("mouseout", () => {
	biggerFour.style.width = "400px";
	biggerFour.style.height = "400px";
});

biggerFive.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerFive") {
	biggerFive.style.width = "410px";
	biggerFive.style.height = "410px";
	}
});
biggerFive.addEventListener("mouseout", () => {
	biggerFive.style.width = "400px";
	biggerFive.style.height = "400px";
});

biggerSix.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerSix") {
	biggerSix.style.width = "410px";
	biggerSix.style.height = "410px";
	}
});
biggerSix.addEventListener("mouseout", () => {
	biggerSix.style.width = "400px";
	biggerSix.style.height = "400px";
});





// Changes size of the social icons when you hover over them:
twitter.addEventListener("mouseover", (event) => {
	if (event.target.id == "twitter") {
	twitter.style.width = "70px";
	twitter.style.height = "70px";
	}
});

twitter.addEventListener("mouseout", () => {
	twitter.style.width = "60px";
	twitter.style.height = "60px";
});

github.addEventListener("mouseover", (event) => {
	if (event.target.id == "github") {
	github.style.width = "70px";
	github.style.height = "70px";
	}
});

github.addEventListener("mouseout", () => {
	github.style.width = "60px";
	github.style.height = "60px";
});

linkedin.addEventListener("mouseover", (event) => {
	if (event.target.id == "linkedin") {
	linkedin.style.width = "70px";
	linkedin.style.height = "70px";
	}
});

linkedin.addEventListener("mouseout", () => {
	linkedin.style.width = "60px";
	linkedin.style.height = "60px";
});


document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Experience in HTML, CSS, JavaScript and JQuery, Python, and iOS mobile development with Swift:"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      // add next character to the text
     document.querySelector("#project-header").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait then call func again for next sentence
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 800);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 40000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     ||  
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

// Initializing the canvas
// I am using native JS here, but you can use jQuery, 
// Mootools or anything you want
var canvas = document.getElementById("canvas");

// Initialize the context of the canvas
var ctx = canvas.getContext("2d");

// Set the canvas width and height to occupy full window
var W = window.innerWidth, H = 300;
canvas.width = W;
canvas.height = H;

// Some variables for later use
var particleCount = 150,
	particles = [],
	minDist = 70,
	dist;

// Function to paint the canvas black
function paintCanvas() {
	// Set the fill color to black
	ctx.fillStyle = "rgba(0,0,0,1)";
	
	// This will create a rectangle of white color from the 
	// top left (0,0) to the bottom right corner (W,H)
	ctx.fillRect(0,0,W,H);
}

// Now the idea is to create some particles that will attract
// each other when they come close. We will set a minimum
// distance for it and also draw a line when they come
// close to each other.

// The attraction can be done by increasing their velocity as 
// they reach closer to each other

// Let's make a function that will act as a class for
// our particles.

function Particle() {
	// Position them randomly on the canvas
	// Math.random() generates a random value between 0
	// and 1 so we will need to multiply that with the
	// canvas width and height.
	this.x = Math.random() * W;
	this.y = Math.random() * H;
	
	
	// We would also need some velocity for the particles
	// so that they can move freely across the space
	this.vx = -1 + Math.random() * 2;
	this.vy = -1 + Math.random() * 2;

	// Now the radius of the particles. I want all of 
	// them to be equal in size so no Math.random() here..
	this.radius = 4;
	
	// This is the method that will draw the Particle on the
	// canvas. It is using the basic fillStyle, then we start
	// the path and after we use the `arc` function to 
	// draw our circle. The `arc` function accepts four
	// parameters in which first two depicts the position
	// of the center point of our arc as x and y coordinates.
	// The third value is for radius, then start angle, 
	// end angle and finally a boolean value which decides
	// whether the arc is to be drawn in counter clockwise or 
	// in a clockwise direction. False for clockwise.
	this.draw = function() {
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		// Fill the color to the arc that we just created
		ctx.fill();
	}
}

// Time to push the particles into an array
for(var i = 0; i < particleCount; i++) {
	particles.push(new Particle());
}

// Function to draw everything on the canvas that we'll use when 
// animating the whole scene.
function draw() {
	
	// Call the paintCanvas function here so that our canvas
	// will get re-painted in each next frame
	paintCanvas();
	
	// Call the function that will draw the balls using a loop
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		p.draw();
	}
	
	//Finally call the update function
	update();
}

// Give every particle some life
function update() {
	
	// In this function, we are first going to update every
	// particle's position according to their velocities
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		
		// Change the velocities
		p.x += p.vx;
		p.y += p.vy
			
		// We don't want to make the particles leave the
		// area, so just change their position when they
		// touch the walls of the window
		if(p.x + p.radius > W) 
			p.x = p.radius;
		
		else if(p.x - p.radius < 0) {
			p.x = W - p.radius;
		}
		
		if(p.y + p.radius > H) 
			p.y = p.radius;
		
		else if(p.y - p.radius < 0) {
			p.y = H - p.radius;
		}
		
		// Now we need to make them attract each other
		// so first, we'll check the distance between
		// them and compare it to the minDist we have
		// already set
		
		// We will need another loop so that each
		// particle can be compared to every other particle
		// except itself
		for(var j = i + 1; j < particles.length; j++) {
			p2 = particles[j];
			distance(p, p2);
		}
	
	}
}

// Distance calculator between two particles
function distance(p1, p2) {
	var dist,
		dx = p1.x - p2.x,
		dy = p1.y - p2.y;
	
	dist = Math.sqrt(dx*dx + dy*dy);
			
	// Draw the line when distance is smaller
	// then the minimum distance
	if(dist <= minDist) {
		
		// Draw the line
		ctx.beginPath();
		ctx.strokeStyle = "rgba(255,255,255,"+ (1.2-dist/minDist) +")";
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
		ctx.closePath();
		
		// Some acceleration for the partcles 
		// depending upon their distance
		var ax = dx/2000,
			ay = dy/2000;
		
		// Apply the acceleration on the particles
		p1.vx -= ax;
		p1.vy -= ay;
		
		p2.vx += ax;
		p2.vy += ay;
	}
}

// Start the main animation loop using requestAnimFrame
function animloop() {
	draw();
	requestAnimFrame(animloop);
}

animloop();



