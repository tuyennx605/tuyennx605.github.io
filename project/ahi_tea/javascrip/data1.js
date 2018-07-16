var trasua = [];
var cafe = [];
var fastfood = [];

function obj (id, loai, name, urlImage, giaSizeS, giaSizeM, giaSizeL, sale, mota, sao){
	this.id = id;
	this.loai = loai;
	this.name = name;
	this.urlImage = urlImage;
	this.giaSizeS = giaSizeS;
	this.giaSizeM = giaSizeM;
	this.giaSizeL = giaSizeL;
	this.sale = sale;
	this.mota = mota;
	this.sao = sao;
}

// trasua.push(
// 	new obj(
// 		1,
// 		1,
// 		'trà sữa chân châu',
// 		'img/product/tea/ts1.png',
// 		10000,
// 		15000,
// 		20000,
// 		10, 
// 		'Trà sữa trân châu chỉ bao gồm trà sữa và trân châu đen, dành riêng cho tín đồ thích trà sữa trân châu truyền thống.Bạn có thể chọn, thêm bớt topping mà bạn yêu thích. Hoặc thêm vị cho trà sữa thêm đậm đà hương thơm (vị cacao, bạc hà, trà xanh, kiwi, khoai môn) +5kPhí ship 0-30k. Miễn phí ship trong bán kính 3km. Giao hàng từ 1 ly.Miễn phí ship nội thành tp Hồ Chí Minh từ 10 ly trở lên.'
// 		)
// 	);

for(var i=1; i<=20; i++){
	if(i%7!=0)
	{
		trasua.push(
		new obj(
			i,
			1,
			'Trà sữa chân châu loai'+i,
			'img/product/tea/ts'+i+'.png',
			10000,
			15000,
			20000,
			0, 
			'Trà sữa trân châu chỉ bao gồm trà sữa và trân châu đen, dành riêng cho tín đồ thích trà sữa trân châu truyền thống.Bạn có thể chọn, thêm bớt topping mà bạn yêu thích. Hoặc thêm vị cho trà sữa thêm đậm đà hương thơm (vị cacao, bạc hà, trà xanh, kiwi, khoai môn) +5kPhí ship 0-30k. Miễn phí ship trong bán kính 3km. Giao hàng từ 1 ly.Miễn phí ship nội thành tp Hồ Chí Minh từ 10 ly trở lên.'
			,Math.floor((Math.random() * 5))
		)
		);
	}else
	{
		trasua.push(
		new obj(
			i,
			1,
			'Trà sữa chân châu loai '+i,
			'img/product/tea/ts'+i+'.png',
			10000,
			15000,
			20000,
			10, 
			'Trà sữa trân châu chỉ bao gồm trà sữa và trân châu đen, dành riêng cho tín đồ thích trà sữa trân châu truyền thống.Bạn có thể chọn, thêm bớt topping mà bạn yêu thích. Hoặc thêm vị cho trà sữa thêm đậm đà hương thơm (vị cacao, bạc hà, trà xanh, kiwi, khoai môn) +5kPhí ship 0-30k. Miễn phí ship trong bán kính 3km. Giao hàng từ 1 ly.Miễn phí ship nội thành tp Hồ Chí Minh từ 10 ly trở lên.'
			,Math.floor((Math.random() * 5))	
		)
		);
	}
	
}


for(var i=1; i<=12; i++){
	if(i%5!=0)
	{
		cafe.push(
		new obj(
			i,
			2,
			'Caffee loai '+i,
			'img/product/cafe/c'+i+'.png',
			10000,
			15000,
			20000,
			0, 
			'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.'
			,Math.floor((Math.random() * 5))
		)
		);
	}else
	{
		cafe.push(
		new obj(
			i,
			2,
			'Caffee loai'+i,
			'img/product/cafe/c'+i+'.png',
			10000,
			15000,
			20000,
			20, 
			'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.'
			)
		);
	}
	
}

for(var i=1; i<=16; i++){
	if(i%5!=0)
	{
		fastfood.push(
		new obj(
			i,
			3,
			'Fastfood loai '+i,
			'img/product/fastfood/f'+i+'.png',
			10000,
			15000,
			20000,
			0, 
			'Un endroit haut en couleurs très à l’américaineLe cadre est un peu façon diner à l’ancienne Rien de beau ou clinquant c’est vraiment très simple sans prise de tête Des trans assurent le show et divertissent les gens pendant le dîner Ils ont beaucoup d’énergie et font participer les gens Il faut prendre ça au second degré Malgré tout ce qui importe c’est que le contenu de l’assiette est bonLes burgers et frites sont bons c’est le principal Il faut se prêter au jeu'
			,Math.floor((Math.random() * 5))	
		)
		);
	}else
	{
		fastfood.push(
		new obj(
			i,
			3,
			'Fastfood loai'+i,
			'img/product/fastfood/f'+i+'.png',
			10000,
			15000,
			20000,
			20, 
			
			'Un endroit haut en couleurs très à l’américaineLe cadre est un peu façon diner à l’ancienne Rien de beau ou clinquant c’est vraiment très simple sans prise de tête Des trans assurent le show et divertissent les gens pendant le dîner Ils ont beaucoup d’énergie et font participer les gens Il faut prendre ça au second degré Malgré tout ce qui importe c’est que le contenu de l’assiette est bonLes burgers et frites sont bons c’est le principal Il faut se prêter au jeu'
			,Math.floor((Math.random() * 5))	
		)
		);
	}
	
}


