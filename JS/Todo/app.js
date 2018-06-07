
var todos = ['A','b','c'];



var input = prompt("What would you want to do?");

while (input!=="quit") {

if (input ==="list") {
	list();

} else if (input ==="new") {
	Addnew();
} 
else if (input ==="delete") {
	del();
} 
 input = prompt("What would you want to do?");
}

console.log("You quit the App");

function list() {

	todos.forEach( function(element, index) {
	console.log(index + ': ' +element);
	});

	console.log('--------------');
}

function Addnew() {
	todos.push(prompt ("Enter new To Do:"));
	console.log("Added new todo.");
	console.log('--------------');
}

function del() { 
	var delIndex = prompt ("Enter index to delete");
	// delete from delIndex and delete the number of elements after it. 
	todos.splice(delIndex,1);

	}