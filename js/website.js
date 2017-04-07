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
	biggerOne.style.width = "215px";
	biggerOne.style.height = "215px";
	}
});
biggerOne.addEventListener("mouseout", () => {
	biggerOne.style.width = "200px";
	biggerOne.style.height = "200px";
});

biggerTwo.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerTwo") {
		biggerTwo.style.width = "215px";
		biggerTwo.style.height = "215px";
	}
});
biggerTwo.addEventListener("mouseout", () => {
	biggerTwo.style.width = "200px";
	biggerTwo.style.height = "200px";
});

biggerThree.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerThree") {
	biggerThree.style.width = "215px";
	biggerThree.style.height = "215px";
	}
});
biggerThree.addEventListener("mouseout", () => {
	biggerThree.style.width = "200px";
	biggerThree.style.height = "200px";
});

biggerFour.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerFour") {
	biggerFour.style.width = "215px";
	biggerFour.style.height = "215px";
	}
});
biggerFour.addEventListener("mouseout", () => {
	biggerFour.style.width = "200px";
	biggerFour.style.height = "200px";
});

biggerFive.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerFive") {
	biggerFive.style.width = "215px";
	biggerFive.style.height = "215px";
	}
});
biggerFive.addEventListener("mouseout", () => {
	biggerFive.style.width = "200px";
	biggerFive.style.height = "200px";
});

biggerSix.addEventListener("mouseover", (event) => {
	if (event.target.id == "biggerSix") {
	biggerSix.style.width = "215px";
	biggerSix.style.height = "215px";
	}
});
biggerSix.addEventListener("mouseout", () => {
	biggerSix.style.width = "200px";
	biggerSix.style.height = "200px";
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


