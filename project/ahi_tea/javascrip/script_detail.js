function getdata(){
	if (typeof(Storage) !== "undefined") {	//kiem tra trinh duyet ho tro storate ko
    // Code for localStorage/sessionStorage.
    		var data;
    		try{
    			data = JSON.parse(localStorage.getItem('detail') || "");
    		}catch(err)
    		{
    			data = "";
    		}
    		return data;
		} else {
		    alert("sorry! no web storage support");
		    return 1;
		}
}
var nameDetail = getdata();
console.log(nameDetail);

document.addEventListener('DOMContentLoaded', function(){
	var objd;
	var checkco = false;
	var moreProduct = [];
	for(let i=0; i<trasua.length; i++)
	{
		if(trasua[i].name==nameDetail)
		{
			objd = trasua[i];
			checkco = true;
			moreProduct = trasua.slice();
			break;
		}
	}

	if(checkco==false){
			for(let i=0; i<cafe.length; i++)
		{
			if(cafe[i].name==nameDetail)
			{
				objd = cafe[i];
				checkco = true;
				moreProduct = cafe.slice();
				break;
			}
		}
	}
	if(checkco==false){
			for(let i=0; i<fastfood.length; i++)
		{
			if(fastfood[i].name==nameDetail)
			{
				objd = fastfood[i];
				checkco = true;
				moreProduct = fastfood.slice();
				break;
			}
		}
	}
	// console.log(moreProduct);
	var name = document.querySelector('.content>h1');
	name.innerText = objd.name;

	var img = document.querySelector('.content_sp>.image_product>img');
	img.setAttribute('src', objd.urlImage);

	var gia = document.querySelector('.product_detal>h3');
	gia.innerText = formatMoney(objd.giaSizeS)+" đ";
	var caption = document.querySelector('.caption');
	caption.innerText = objd.mota;
	

	var radio_inline = document.querySelectorAll('.radio1');
	console.log(radio_inline);


	
	var tienThem = document.querySelector('.tienThem');
	for(var i=0; i<radio_inline.length; i++)
	{
		radio_inline[i].addEventListener('change', function(){
			// console.log(objd[this.getAttribute('data-name')]);
			tienThem.innerText= "+"+ (objd[this.getAttribute('data-name')] - objd.giaSizeS) + " VNĐ";
		});
	}





// more product
moreProduct.sort(function(a, b){
			// console.log(b.giaSizeS-b.giaSizeS*b.sale/100);

			return (a.giaSizeS-a.giaSizeS*a.sale/100) - (b.giaSizeS-b.giaSizeS*b.sale/100);
		});
	html2 = '';
	for(let i=0; i<6; i++)
	{
		 html2+='<div class="mot_sp col-xs-4 col-sm-4 col-md-2 col-lg-2">'+
									'<div class="div_anh_wrap">'+

										'<div class="div_anh">'+

											'<img src="'+moreProduct[i].urlImage+'" class="img-responsive">'+

											'<div class="mauden1"><img src="img/common/giohang.png"></div>'+
										'</div>';
											
			if(moreProduct[i].sale>0)
			{
				html2+='<div class="sale1">'+
							'<img src="img/common/sale1.png">'+
							'<p>'+moreProduct[i].sale+'%</p>'+
						'</div>';
			}
										
										
							html2+='</div>'+
									'<div class="content_bot">'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<i class="fas fa-star"></i>'+
										'<br>'+
										'<a href="detail.html"  class="saveObj">'+
										'<p class="name_">'+moreProduct[i].name+'</p>'+
										'</a>';
								// if(moreProduct[i].sale>0)
								// 		html2+='<p class="gia_">'+'<del>'+moreProduct[i].giaSizeS+'</del>  '+(moreProduct[i].giaSizeS-moreProduct[i].giaSizeS*moreProduct[i].sale/100)+'Đ</p>';
								// else
								// 		html2+='<p class="gia_">'+moreProduct[i].giaSizeS+'Đ</p>';
								html2+='<p class="gia_">'+(moreProduct[i].giaSizeS-moreProduct[i].giaSizeS*moreProduct[i].sale/100)+'Đ</p>';
									html2+='</div>'+
								'</div>';
	}
	var spcothebiet = document.getElementById('spcothebiet');
	spcothebiet.innerHTML = html2;




	var demsl = 1;

	var cong11 = document.getElementById('cong');
	var tru11 = document.getElementById('tru');
	var sl11 = document.getElementById('soluong11');
	var themgiohang = document.getElementById('themgiohang');
	console.log(tru11);

	cong11.addEventListener('click', function(){
		demsl++;
		sl11.innerText = demsl;
	});

	tru11.addEventListener('click', function(){
		if(demsl==1)
			return;
		demsl--;
		sl11.innerText = demsl;
	});

	themgiohang.addEventListener('click', function(){
		list1 = DB.getData();
		for(let i=0; i<list1.length; i++){
			if(list1[i].name == objd.name){
				alert('Sản Phẩm '+ objd.name + ' đã có trong giỏ hàng!');
				return;
			}
		}
		list1.push(objd);
		objd.sl = demsl;
		updateGioHang();
		console.log(objd.name);
		
	});

});