// document.addEventListener('DOMContentLoaded', function(){
// 	console.log("ok");

	// //khai bao
	// let nut = document.querySelectorAll('.chuyenslide ul li');
	// let slides = document.querySelectorAll('.cacslide ul li');
	// let nextSlide1 = document.querySelector('.next_slide');
	// let prevSlide1 = document.querySelector('.prev_slide');
	// // console.log(slides);


	// function getVtSlideHienTai()
	// {
	// 	var vt1 = 0;
	// 	var nutkickhoat1 = document.querySelector('.cacslide ul li.active-slide');
	// 	// console.log( nutkickhoat1);
	// 	// console.log(nutkickhoat1.previousElementSibling);
	// 	for(vt1=0; nutkickhoat1 = nutkickhoat1.previousElementSibling; vt1++){}	//tinh vi tri phan tu
	// 	return vt1;
	// }

	// function nextSlide(){
	// 	let vt = getVtSlideHienTai()+1;
	// 	if(vt>=slides.length)
	// 		vt = 0;
	// 	for(let j=0; j<slides.length; j++)
	// 	{
	// 		slides[j].classList.remove('active-slide');
	// 	}
			
	// 		// console.log(vt);
	// 		slides[vt].classList.add('active-slide');

	// 		for(let j=0; j<nut.length; j++)
	// 			nut[j].classList.remove('kich_hoat');

	// 		nut[vt].classList.add('kich_hoat');
			
	// 		// clearInterval(autoChuyenSlide);
	// }

	// function previusSlide(){
	// 	let vt = getVtSlideHienTai()-1;
	// 	if(vt<=0)
	// 		vt = slides.length-1;
	// 	for(let j=0; j<slides.length; j++)
	// 	{
	// 		slides[j].classList.remove('active-slide');
	// 	}
			
	// 		// console.log(vt);
	// 		slides[vt].classList.add('active-slide');

	// 	for(let j=0; j<nut.length; j++)
	// 			nut[j].classList.remove('kich_hoat');

	// 		nut[vt].classList.add('kich_hoat');
	// }

	// for(let i=0; i<nut.length; i++)
	// {
	// 	nut[i].addEventListener('click', function(){
	// 		//su kien cho tung nut chuyen
	// 		// console.log(this);
	// 		// rs
	// 		for(let j=0; j<nut.length; j++)
	// 			nut[j].classList.remove('kich_hoat');

	// 		this.classList.add('kich_hoat');
	// 		//tinh vi tri
	// 		console.log(this.previousElementSibling);// phan tu trc no, cung cap

	// 		var vt = 0;
	// 		var nutkickhoat = this;
	// 		for(vt=0; nutkickhoat = nutkickhoat.previousElementSibling; vt++){}	//tinh vi tri phan tu
	// 		// console.log(vt);

	// 		for(let j=0; j<slides.length; j++)
	// 		{
	// 			slides[j].classList.remove('active-slide');
	// 		}
	// 		slides[vt].classList.add('active-slide');

	// 	});
	// }

	// var autoChuyenSlide = setInterval(function(){
	// 	nextSlide();
	// }, 5000);


	// console.log(nextSlide1);
	// nextSlide1.addEventListener('click', nextSlide);

	// prevSlide1.addEventListener('click', previusSlide);






// });