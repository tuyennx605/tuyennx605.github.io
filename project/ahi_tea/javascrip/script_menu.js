var CoundGioHang = 0;
var shopping_cart = document.querySelector('.shopping-cart');
var totop = document.querySelector('.toTop');

document.addEventListener('DOMContentLoaded', function(){
	var numGioHang = document.querySelector('.count-item');
	var clickmenu = document.getElementsByClassName('cacsanpham');
	var giohang = document.querySelectorAll('.div_anh .mauden1 img');
	
	
	
	// console.log(clickmenu[1].getAttribute('data-key'));
	
	for(let i=0; i<clickmenu.length; i++){
		clickmenu[i].addEventListener('click', function(){
			console.log(this.getAttribute('data-key'));
			localStorage.setItem('cacsanpham', JSON.stringify(this.getAttribute('data-key')));
		});
	}
	
	function updateGioHang(){
		numGioHang.innerText = CoundGioHang;
	}
	 
	updateGioHang();
	for(var i=0; i<giohang.length; i++){
		giohang[i].addEventListener('click', function(){
			console.log(this.parentNode.parentNode.parentNode.nextSibling.getElementsByClassName('name_')[0].innerText);
			CoundGioHang++;
			updateGioHang();
		});
	}

	
});



window.addEventListener('scroll', function(){
	if (window.scrollY > 100) {
		
		totop.style.visibility = 'visible';
		totop.style.opacity = 1;
	} else {

		totop.style.visibility = "hidden";
		totop.style.opacity = 0;
	}
});