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
var dataFingia_cont = [];
var dataFingia = [];
var datafindong = [];
var dataCotheBiet = [];

function showData(arr1){
	dataFingia = arr1;
	var content_product = document.getElementById('content_product');
	content_product.innerHTML='';
	html1 = '';
	for(let i=0; i<arr1.length; i++)
	{
		 html1+='<div class="mot_sp col-xs-6 col-sm-6 col-md-3 col-lg-3">'+
									'<div class="div_anh_wrap">'+

										'<div class="div_anh">'+

											'<img src="'+arr1[i].urlImage+'" class="img-responsive">'+

											'<div class="mauden1"><img src="img/common/giohang.png"></div>'+
										'</div>';
											
			if(arr1[i].sale>0)
			{
				html1+='<div class="sale1">'+
							'<img src="img/common/sale1.png">'+
							'<p>'+arr1[i].sale+'%</p>'+
						'</div>';
			}
										
										
							html1+='</div>'+
							'<div class="content_bot">';
							for(k=1; k<=5; k++)
							{
								if(k>arr1[i].sao)
								{
									html1+='<i class="fas fa-star"></i>';
								}
								else
								{
									html1+='<i class="fas fa-star" style="color:#FFC107;"></i>';
								}
							}
								
								html1+='<br>'+
										'<a href="detail.html"  class="saveObj">'+
										'<p class="name_">'+arr1[i].name+'</p>'+
										'</a>';
								// if(data11[i].sale>0)
								// 		html1+='<p class="gia_">'+'<del>'+data11[i].giaSizeS+'</del>  '+(data11[i].giaSizeS-data11[i].giaSizeS*data11[i].sale/100)+'Đ</p>';
								// else
								// 		html1+='<p class="gia_">'+'<del></del>  '+(data11[i].giaSizeS-data11[i].giaSizeS*data11[i].sale/100)+'Đ</p>';
										html1+='<p class="gia_">'+formatMoney((arr1[i].giaSizeS-arr1[i].giaSizeS*arr1[i].sale/100))+'đ</p>';
									html1+='</div>'+
								'</div>';
	}
	content_product.innerHTML = html1;
}

document.addEventListener('DOMContentLoaded', function(){
	
	var spcothebiet = document.getElementById('spcothebiet');
	var banner = document.getElementById('banner1');
	if(product==-1)
		banner.setAttribute('src', 'img/banner/banner1.jpg');
	else
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
	if(product==-1)	//sp khuyen mai
	{
		console.log(ALLProduct);
		for(var i=0; i<ALLProduct.length; i++){
			if(ALLProduct[i].sale>0)
			{
				data11.push(ALLProduct[i]);
			}
		}
		for(var i=0; i<6; i++)
			dataCotheBiet.push(fastfood[i]);
	}

	showData(data11);
	dataFingia_cont = data11;

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
							'<div class="content_bot">';
							for(k=1; k<=5; k++)
							{
								if(k>dataCotheBiet[i].sao)
								{
									html2+='<i class="fas fa-star"></i>';
								}
								else
								{
									html2+='<i class="fas fa-star" style="color:#FFC107;"></i>';
								}
							}
								
								html2+='<br>'+
										'<a href="detail.html" class="saveObj">'+
										'<p class="name_">'+dataCotheBiet[i].name+'</p>'+
										'</a>';
								// if(dataCotheBiet[i].sale>0)
								// 		html2+='<p class="gia_">'+'<del>'+dataCotheBiet[i].giaSizeS+'</del>  '+(dataCotheBiet[i].giaSizeS-dataCotheBiet[i].giaSizeS*dataCotheBiet[i].sale/100)+'Đ</p>';
								// else
								// 		html2+='<br><p class="gia_">'+dataCotheBiet[i].giaSizeS+'Đ</p>';
								html2+='<p class="gia_">'+formatMoney((dataCotheBiet[i].giaSizeS-dataCotheBiet[i].giaSizeS*dataCotheBiet[i].sale/100))+'đ</p>';
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


function timkiemproduct(str){
	let mang = data11;
	mang.sort(function(a, b){
		// console.log(b.giaSizeS-b.giaSizeS*b.sale/100);

		return (a.giaSizeS-a.giaSizeS*a.sale/100) - (b.giaSizeS-b.giaSizeS*b.sale/100);
	});
	let tam = [];
	for(let i=0; i<mang.length; i++){
		// console.log(mang[i].name.toLowerCase() + " vvvv " + str.toLowerCase);
		if(mang[i].name.toLowerCase().includes(str.toLowerCase()))
		{
			tam.push(mang[i]);
		}
	}
	// console.log(tam);
	dataFingia_cont = tam;
	return tam;
}



function timkiemchange(tk){
	if(tk.parentNode.previousElementSibling.value=='')
		return;
	let tam = [];
	console.log(tk.parentNode.previousElementSibling.value);
	tam = timkiemproduct(tk.parentNode.previousElementSibling.value);
	showData(tam);
}

function checknoclick(){
	for(i=1; i<=6; i++)
	{
		// console.log(document.getElementById('check'+i));
		let ipu = document.getElementById('check'+i);
		if(ipu.checked==true)
			return true;
	}
	return false;
}



function finTheoGIa(check1, giamin, giamax){	//dataFingia, datafindong;
	console.log(check1.checked);
	if(check1.checked==true)
	{
		for(let i=0; i<dataFingia_cont.length; i++)
		{
			let tam11 = dataFingia_cont[i].giaSizeS-dataFingia_cont[i].giaSizeS*dataFingia_cont[i].sale/100;
			console.log(tam11);
			if( tam11 >= giamin && tam11<giamax  )
				datafindong.push(dataFingia_cont[i]);
		}

	}
	else
	{
		let mangtam = [];
		for(let i=0; i<datafindong.length; i++)
		{
			let tam11 = datafindong[i].giaSizeS-datafindong[i].giaSizeS*datafindong[i].sale/100;
			if(tam11>=giamin && tam11<giamax)
				continue;
			mangtam.push(datafindong[i]);
		}
		datafindong = [];
		datafindong = mangtam;
		console.log(datafindong);
		console.log(mangtam);
		if(checknoclick()==false)
		{
			console.log("ko clicks");
			showData(dataFingia_cont);
			return;
		}
		
		showData(mangtam);
			return;
	}

	showData(datafindong);
}




var itk = document.getElementById('itk1');
console.log(itk);
// itk.addEventListener('change', function(){
// 	// console.log(this.value);
// });
itk.addEventListener('keyup', function(){
	// console.log(this.value.length);
	if(this.value.length==0)
	{
		// console.log('rong');
		showData(data11);
	}
});