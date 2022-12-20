console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`User Successfully Submitted!`);
}

const ducky = document.querySelector('#ducky');

ducky.addEventListener('mouseover', () => {
	alert('Great Work!');
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
