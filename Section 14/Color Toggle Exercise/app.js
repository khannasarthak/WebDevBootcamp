var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function () {
	console.log('Color changed!');
	body.classList.toggle("pink");
	console.log(body.classList);
});