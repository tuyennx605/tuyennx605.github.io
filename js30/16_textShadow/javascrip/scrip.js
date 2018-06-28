const text = document.querySelector('h1');
const body1 = document.querySelector('body');

const walk = 300;

function shadow(e){

	const {offsetWidth: width, offsetHeight: height} = body1;
	let {offsetX: x, offsetY: y} = e;

	if(this!==e.target){
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xwalk = Math.round((x/width*walk) - (walk/2));
	const ywalk = Math.round((y/height*walk) - (walk/2));

	text.style.textShadow = xwalk + "px "+ ywalk + "px 0 gray," 
							+ xwalk*-1 + "px "+ ywalk + "px 0 blue,"
							+xwalk + "px "+ ywalk*-1 + "px 0 blue,"
							+xwalk*-1 + "px "+ ywalk*-1 + "px 0 blue";
	console.log(text.style);
}

body1.addEventListener('mousemove', shadow);