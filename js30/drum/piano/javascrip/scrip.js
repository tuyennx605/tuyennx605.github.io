document.addEventListener('DOMContentLoaded', function(){
	window.addEventListener('keydown', function(e){
	// console.log(e);
	const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
	const key = document.querySelector('.phim_dan[data-key="'+e.keyCode+'"]');	//lay the theo dâtkey
	// console.log(key);
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
	if(e.propertyName !== 'background-color') return;//in ra thi biet
	this.classList.remove('playing');
}

function click1(){
	console.log(this.getAttribute('data-key'));
	const audio = document.querySelector('audio[data-key="'+ this.getAttribute('data-key')+'"]');
	// console.log(key);
	if(!audio) return;



	audio.currentTime = 0;
	audio.play();	//phat nhac

	this.classList.add('playing');

}

const keys = document.querySelectorAll('.phim_dan');
console.log(keys);
for(var i=0; i<keys.length; i++){
	keys[i].addEventListener('transitionend', hamremoveclass);
	keys[i].addEventListener('click', click1)
}

});