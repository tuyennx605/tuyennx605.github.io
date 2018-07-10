document.addEventListener('DOMContentLoaded', function(){
	let anim_dilen = document.querySelectorAll('.scroll_mouse_dilen');
	let anim_LeftToRight = document.querySelectorAll('.scroll-LeftToRight');
	let anim_RightToLeft = document.querySelectorAll('.scroll-RightToLeft');
	let anim_ZoomTo = document.querySelectorAll('.scroll-zoomto');
	let anim_flip = document.querySelectorAll('.scroll-flip1');


	console.log(anim_dilen);


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
});