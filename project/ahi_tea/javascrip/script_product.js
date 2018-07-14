function getdata(){
	if (typeof(Storage) !== "undefined") {	//kiem tra trinh duyet ho tro storate ko
    // Code for localStorage/sessionStorage.
    		var data;
    		try{
    			data = JSON.parse(localStorage.getItem('cacsanpham') || 1);
    		}catch(err)
    		{
    			data = 1;
    		}
    		return data;
		} else {
		    alert("sorry! no web storage support");
		    return 1;
		}
}
var product = getdata();
console.log(product);
var data11 = [];
var dataCotheBiet = [];

document.addEventListener('DOMContentLoaded', function(){
	var content_product = document.getElementById('content_product');
	var spcothebiet = document.getElementById('spcothebiet');
	var banner = document.getElementById('banner1');
	banner.setAttribute('src', 'img/banner/banner'+product+'.jpg');

	if(product==2)
	{
		for(var i=0; i<fastfood.length; i++)
			data11.push(fastfood[i]);
		for(var i=0; i<6; i++)
			dataCotheBiet.push(cafe[i]);
	}
	if(product==3)
	{
		for(var i=0; i<cafe.length; i++)
			data11.push(cafe[i]);
		for(var i=0; i<6; i++)
			dataCotheBiet.push(fastfood[i]);
	}
	if(product==1)
	{
		for(var i=0; i<trasua.length; i++)
			data11.push(trasua[i]);
		for(var i=0; i<6; i++)
			dataCotheBiet.push(fastfood[i]);
	}

	html1 = '';
	for(let i=0; i<data11.length; i++)
	{
		 html1+='<div class="mot_sp col-xs-6 col-sm-6 col-md-3 col-lg-3">'+
									'<div class="div_anh_wrap">'+

										'<div class="div_anh">'+

											'<img src="'+data11[i].urlImage+'" class="img-responsive">'+

											'<div class="mauden1"><img src="img/common/giohang.png"></div>'+
										'</div>';
											
			if(data11[i].sale>0)
			{
				html1+='<div class="sale1">'+
							'<img src="img/common/sale1.png">'+
							'<p>'+data11[i].sale+'%</p>'+
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
										'<a href="detail.html"  class="saveObj">'+
										'<p class="name_">'+data11[i].name+'</p>'+
										'</a>';
								if(data11[i].sale>0)
										html1+='<p class="gia_">'+'<del>'+data11[i].giaSizeS+'</del>  '+(data11[i].giaSizeS-data11[i].giaSizeS*data11[i].sale/100)+'Đ</p>';
								else
										html1+='<p class="gia_">'+data11[i].giaSizeS+'Đ</p>';
									html1+='</div>'+
								'</div>';
	}
	content_product.innerHTML = html1;

	html2 = '';
	for(let i=0; i<dataCotheBiet.length; i++)
	{
		 html2+='<div class="mot_sp col-xs-4 col-sm-4 col-md-2 col-lg-2">'+
									'<div class="div_anh_wrap">'+

										'<div class="div_anh">'+

											'<img src="'+dataCotheBiet[i].urlImage+'" class="img-responsive">'+

											'<div class="mauden1"><img src="img/common/giohang.png"></div>'+
										'</div>';
											
			if(dataCotheBiet[i].sale>0)
			{
				html2+='<div class="sale1">'+
							'<img src="img/common/sale1.png">'+
							'<p>'+dataCotheBiet[i].sale+'%</p>'+
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
										'<a href="detail.html">'+
										'<p class="name_">'+dataCotheBiet[i].name+'</p>'+
										'</a>';
								if(dataCotheBiet[i].sale>0)
										html2+='<p class="gia_">'+'<del>'+dataCotheBiet[i].giaSizeS+'</del>  '+(dataCotheBiet[i].giaSizeS-dataCotheBiet[i].giaSizeS*dataCotheBiet[i].sale/100)+'Đ</p>';
								else
										html2+='<p class="gia_">'+dataCotheBiet[i].giaSizeS+'Đ</p>';
									html2+='</div>'+
								'</div>';
	}
	spcothebiet.innerHTML = html2;
	
});

function showFilter(button) {
	if (button.innerHTML === "Hide filter") {
		document.querySelector('.filter').style.display = "none";
		button.innerHTML = '<i class="fas fa-filter"></i> Filter products';
	} else {
		document.querySelector('.filter').style.display = "block";
		button.innerHTML = "Hide filter";
	}
}