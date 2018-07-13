var CoundGioHang = 0;

document.addEventListener('DOMContentLoaded', function(){
	var numGioHang = document.querySelector('.wrap_giohang1 p');
	var clickmenu = document.getElementsByClassName('cacsanpham');
	var giohang = document.querySelectorAll('.div_anh .mauden1 img');
	
	// console.log(clickmenu[1].getAttribute('data-key'));
	
	for(let i=0; i<clickmenu.length; i++){
		clickmenu[i].addEventListener('click', function(){
			console.log(this.getAttribute('data-key'));
			localStorage.setItem('cacsanpham', JSON.stringify(this.getAttribute('data-key')));
		});
	}
	

	 
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