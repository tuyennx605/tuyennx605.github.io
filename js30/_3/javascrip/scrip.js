const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	console.log(this.value);
	document.documentElement.style.setProperty('--' +this.name,  this.value+suffix);
}
for(var i=0; i<inputs.length; i++){
	inputs[i].addEventListener('change', handleUpdate);
	inputs[i].addEventListener('mousemove', handleUpdate);
}