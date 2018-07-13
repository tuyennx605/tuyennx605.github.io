
document.addEventListener('DOMContentLoaded', function(){
	window.addEventListener('keydown', function(e){
	// console.log(e);
	const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
	const key = document.querySelector('.key[data-key="'+e.keyCode+'"]');	//lay the theo dâtkey
	console.log(key);
	if(!audio) return;



	audio.currentTime = 0;
	audio.play();	//phat nhac

	key.classList.add('playing');

	// setTimeout(function(){
	// 	key.classList.remove('playing');
	// }, 600);

});


function hamremoveclass(e){
	console.log("vao day" + e.propertyName);
	if(e.propertyName !== 'color') return;//in ra thi biet
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
console.log(keys);
for(var i=0; i<keys.length; i++){
	keys[i].addEventListener('transitionend', hamremoveclass);
}

});