var CoundGioHang = 0;


document.addEventListener('DOMContentLoaded', function(){
	let anim_dilen = document.querySelectorAll('.scroll_mouse_dilen');
	let anim_LeftToRight = document.querySelectorAll('.scroll-LeftToRight');
	let anim_RightToLeft = document.querySelectorAll('.scroll-RightToLeft');
	let anim_ZoomTo = document.querySelectorAll('.scroll-zoomto');
	let anim_flip = document.querySelectorAll('.scroll-flip1');

	var giohang = document.querySelectorAll('.div_anh .mauden1 img');
	var numGioHang = document.querySelector('.wrap_giohang1 p');

	
	// console.log(anim_dilen);

	//scroll
	window.addEventListener('scroll', function(){
		// console.log(window.pageYOffset);
		for(let i=0; i<anim_dilen.length; i++)
		{
			// console.log(anim_dilen[i].scrollTop());
			// console.log($(anim_dilen[i]).offset().top - $(window).scrollTop());
			// if(anim_dilen[i].classList.contains('dilen')==true)
			// 	continue;
			// console.log(anim_dilen[i].classList.contains('dilen') + " " +  i);
			if($(anim_dilen[i]).offset().top-450 < window.pageYOffset)
			{
				anim_dilen[i].classList.add('dilen');	
			}


		}

		for(let i=0; i<anim_LeftToRight.length; i++)
		{
			if(anim_LeftToRight[i].classList.contains('cdLeftToRight')==true)
				continue;
			if(anim_LeftToRight[i].offsetTop-450 < window.pageYOffset)
			{
				anim_LeftToRight[i].classList.add('cdLeftToRight');	
			}
		}

		for(let i=0; i<anim_RightToLeft.length; i++)
		{
			if(anim_RightToLeft[i].classList.contains('cdRightToLeft')==true)
				continue;
			if(anim_RightToLeft[i].offsetTop-450 < window.pageYOffset)
			{
				anim_RightToLeft[i].classList.add('cdRightToLeft');	
			}
		}

		for(let i=0; i<anim_ZoomTo.length; i++)
		{
			if(anim_ZoomTo[i].classList.contains('cdZoomTo')==true)
				continue;
			if(anim_ZoomTo[i].offsetTop-450 < window.pageYOffset)
			{
				anim_ZoomTo[i].classList.add('cdZoomTo');	
			}
		}

		for(let i=0; i<anim_flip.length; i++)
		{
			if(anim_flip[i].classList.contains('flip1')==true)
				continue;
			if(anim_flip[i].offsetTop-450 < window.pageYOffset)
			{
				anim_flip[i].classList.add('flip1');	
			}
		}

	});
	//end scroll

		 // click gio hang


	 
	updateGioHang();
	for(var i=0; i<giohang.length; i++){
		giohang[i].addEventListener('click', function(){
			console.log(this.parentNode.parentNode.parentNode.nextSibling.getElementsByClassName('name_')[0].innerText);
			CoundGioHang++;
			updateGioHang();
		});
	}

	function updateGioHang(){
		numGioHang.innerText = CoundGioHang;
	}
});

function loadMilkTea(){
		trasua.sort(function(a, b){
			// console.log(b.giaSizeS-b.giaSizeS*b.sale/100);

			return (a.giaSizeS-a.giaSizeS*a.sale/100) - (b.giaSizeS-b.giaSizeS*b.sale/100);
		});

		var content_tea = document.getElementById('content_row_tea');
		// console.log(content_tea);
		let html1 = '';
		for(let i=0; i<4; i++)
		{
			 html1+= '<div class="welcome_anh scroll_mouse_dilen">'+

								'<div class="mot_sp">'+
									'<div class="div_anh_wrap">'+

										'<div class="div_anh">'+

											'<img src="'+trasua[i].urlImage+'" class="img-responsive">'+

											'<div class="mauden1"><img src="img/common/giohang.png"></div>'+
										'</div>';
											
			if(trasua[i].sale>0)
			{
				html1+='<div class="sale1">'+
							'<img src="img/common/sale1.png">'+
							'<p>'+trasua[i].sale+'%</p>'+
						'</div>';
			}
										
										
							html1+='</div>'+
									'<div class="content_bot">'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<br>'+
										'<a href="detail.html">'+
										'<p class="name_">'+trasua[i].name+'</p>'+
										'</a>';
								if(trasua[i].sale>0)
										html1+='<p class="gia_">'+'<del>'+trasua[i].giaSizeS+'</del>  '+(trasua[i].giaSizeS-trasua[i].giaSizeS*trasua[i].sale/100)+'Đ</p>';
								else
										html1+='<p class="gia_">'+trasua[i].giaSizeS+'Đ</p>';
									html1+='</div>'+
								'</div>'+
							'</div>';

		}

		content_tea.innerHTML = html1;
	}

	loadMilkTea();




	function loadcaffe(){
		cafe.sort(function(a, b){
			// console.log(b.giaSizeS-b.giaSizeS*b.sale/100);

			return (a.giaSizeS-a.giaSizeS*a.sale/100) - (b.giaSizeS-b.giaSizeS*b.sale/100);
		});

		var content_cofe = document.getElementById('content_row_cofe');
		// console.log(content_tea);
		let html1 = '';
		for(let i=0; i<4; i++)
		{
			 html1+= '<div class="welcome_anh scroll_mouse_dilen">'+

								'<div class="mot_sp">'+
									'<div class="div_anh_wrap">'+

										'<div class="div_anh">'+

											'<img src="'+cafe[i].urlImage+'" class="img-responsive">'+

											'<div class="mauden1"><img src="img/common/giohang.png"></div>'+
										'</div>';
											
			if(cafe[i].sale>0)
			{
				html1+='<div class="sale1">'+
							'<img src="img/common/sale1.png">'+
							'<p>'+cafe[i].sale+'%</p>'+
						'</div>';
			}
										
										
							html1+='</div>'+
									'<div class="content_bot">'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<br>'+
										'<a href="detail.html">'+
											'<p class="name_">'+cafe[i].name+'</p>'+
										'</a>';
								if(cafe[i].sale>0)
										html1+='<p class="gia_">'+'<del>'+cafe[i].giaSizeS+'</del>  '+(cafe[i].giaSizeS-cafe[i].giaSizeS*cafe[i].sale/100)+'Đ</p>';
								else
										html1+='<p class="gia_">'+cafe[i].giaSizeS+'Đ</p>';
									html1+='</div>'+
								'</div>'+
							'</div>';

		}

		content_cofe.innerHTML = html1;
	}

	 loadcaffe();


	 function loadfastfood(){
		fastfood.sort(function(a, b){
			// console.log(b.giaSizeS-b.giaSizeS*b.sale/100);

			return (a.giaSizeS-a.giaSizeS*a.sale/100) - (b.giaSizeS-b.giaSizeS*b.sale/100);
		});

		var content_fastfood = document.getElementById('content_row_fastfood');
		// console.log(content_tea);
		let html1 = '';
		for(let i=0; i<4; i++)
		{
			 html1+='<div class="welcome_anh scroll_mouse_dilen">'+

								'<div class="mot_sp">'+
									'<div class="div_anh_wrap">'+

										'<div class="div_anh">'+

											'<img src="'+fastfood[i].urlImage+'" class="img-responsive">'+

											'<div class="mauden1"><img src="img/common/giohang.png"></div>'+
										'</div>';
											
			if(fastfood[i].sale>0)
			{
				html1+='<div class="sale1">'+
							'<img src="img/common/sale1.png">'+
							'<p>'+fastfood[i].sale+'%</p>'+
						'</div>';
			}
										
										
							html1+='</div>'+
									'<div class="content_bot">'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<br>'+
										 '<a href="detail.html">'+
										'<p class="name_">'+fastfood[i].name+'</p>'+
										'</a>';
								if(fastfood[i].sale>0)
										html1+='<p class="gia_">'+'<del>'+fastfood[i].giaSizeS+'</del>  '+(fastfood[i].giaSizeS-fastfood[i].giaSizeS*fastfood[i].sale/100)+'Đ</p>';
								else
										html1+='<p class="gia_">'+fastfood[i].giaSizeS+'Đ</p>';
									html1+='</div>'+
								'</div>'+
							'</div>';

		}

		content_fastfood.innerHTML = html1;
	}

	 loadfastfood();




