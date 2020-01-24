function doFirst() {
	var button = document.getElementById("button");
	button.addEventListener("click",saveData,false);
	//this event listener waits on the button to be clicked to call the function
}
function saveData () {
	var one = document.getElementById('one').value;
	var two = document.getElementById('two').value;
	sessionStorage.setItem(one,two);
	
	display(one);
}
function display (one) {
	var secondbox = document.getElementById("secondbox");
	var two = sessionStorage.getItem(one);
	secondbox.innerHTML = "name of variable:" +one+ "<br/>" + two;
}

window.addEventListener("load",doFirst,false);