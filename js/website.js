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
  var dataText = [ "Experience in HTML, CSS, JavaScript and JQuery, Python, and iOS mobile development with Swift"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      // add next character to the text
     document.querySelector("#animate").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

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


