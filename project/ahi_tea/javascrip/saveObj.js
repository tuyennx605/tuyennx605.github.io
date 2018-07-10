document.addEventListener('DOMContentLoaded', function(){
	// console.log("xong dom");
	var saveObj = document.getElementsByClassName('saveObj');
	console.log(saveObj);

	for(var i=0; i<saveObj.length; i++){
		saveObj[i].addEventListener('click', function(){
			this.querySelector('p');
			localStorage.setItem('detail', JSON.stringify(this.querySelector('p').innerText));
		});
	}
});