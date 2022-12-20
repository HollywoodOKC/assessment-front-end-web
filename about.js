console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`User Successfully Submitted!`);
}

const myFunction = () => {
	document.getElementById("ducky").addEventListener("mouseover", function () {
		window.alert(`You're Doing a great job!`);
	})
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
