$(function() {		//chay khi html, css load xong rui
	$('.dv1').slideUp();		//thu lai

	$('h1').click(function(event){
		console.log("click");

			//https://www.w3schools.com/jquery/jquery_slide.asp
		// $('.dv1').slideDown();
		// $(this).next().slideDown();	// the tiep theo cua the h1

		$('.dv1').slideToggle();	//ket hop slideup va slidedow

			//https://www.w3schools.com/jquery/jquery_css_classes.asp
		// $(selector).addClass(classname,function(index,currentclass))
		// $(this).addClass('mauxanh');	//them class ten mauxanh
		// $(".dv1").removeClass("dv1");	//xoa class
		$(this).toggleClass('mauxanh');	// them va xoa class


	});

	$('h1').on('click', function(event){	//viet ham click c2
		console.log("click2");
		// event.prevantDefault();		//khi click vao link no ko bi chuyen ra khoi trang khac

			//https://www.w3schools.com/jquery/eff_animate.asp
		// $('body').animate({scrollTop: 900}, 1000);	//cuon 1 khoang 900px trong 1s

		//tinh toa do
		//https://www.w3schools.com/jquery/css_offset.asp
		console.log($('.dv1').offset().top);
	});



	//phan 2: transition, animation
	//
	//animation
	
	



	//thu vien jq
	//greensock.com ==> tsweenmax : hieu ung load lai thi se lam j tung anh 1 khi load, load them noi dung, 
	//thu vien animate css : vao ra cua doi tuong
	//thu vien wow.js : hieeuj ung cuon chuot den dau thi load hieu ung den do...

	// https://www.w3schools.com/jsref/met_win_setinterval.asp
	setInterval(function(){ alert("Hello"); }, 3000); // sau khoang 3s thi no lam funtion

	// https://www.w3schools.com/jsref/met_win_settimeout.asp

});