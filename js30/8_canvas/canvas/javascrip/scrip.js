document.addEventListener('DOMContentLoaded', function(){
	const canvas1 = document.querySelector('#cvas');
	canvas1.width = window.innerWidth*80/100;
	canvas1.height = window.innerHeight;
	const ctx = canvas1.getContext('2d');
	ctx.strokeStyle = "red"; // mau but ve
	ctx.lineJoin = "round";	//kieu ve tron
	ctx.lineCap = 'round';

	ctx.lineWidth = 100;	//do rong cua dong ve



	let isVe = false;
	let lastX = 0;
	let LastY = 0;

	function Ve(e){
		if(!isVe) return;	//ko cho ve

		//ctx.strokeStyle = 'hsl(150, 100%, 50%)';	//chuyen mau
		ctx.beginPath();	//bat dau ve
		//bat dau  tu:
		ctx.moveTo(lastX, LastY);	
		//den
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();	//tat ve

		// lastX = e.offsetX;
		// LastY = e.offsetY;

		[lastX, LastY] = [e.offsetX, e.offsetY];
	}

	
	canvas1.addEventListener('mousedown', (e) => {
		isVe=true;
		//console.log(lastX + " "+ LastY);
		[lastX, LastY] = [e.offsetX, e.offsetY];
		//console.log(lastX + " "+ LastY);
	});

	canvas1.addEventListener('mousemove', Ve);
	canvas1.addEventListener('mouseup', ()=>isVe = false);
	canvas1.addEventListener('mouseout', ()=> isVe = false);

	canvas1.addEventListener('click', (e)=>{
		console.log(e);
	});
});