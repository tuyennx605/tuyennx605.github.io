var trasua = [];
var cafe = [];
var fastfood = [];
var ALLProduct = [];

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
	var so = Math.floor((Math.random() * 20) + 10)*1000;
	if(i%7!=0)
	{
		trasua.push(
		new obj(
			i,
			1,
			'Trà sữa loai '+i,
			'img/product/tea/ts'+i+'.png',
			so,
			so+5000,
			so+10000,
			0, 
			'Trà sữa trân châu chỉ bao gồm trà sữa và trân châu đen, dành riêng cho tín đồ thích trà sữa trân châu truyền thống.Bạn có thể chọn, thêm bớt topping mà bạn yêu thích. Hoặc thêm vị cho trà sữa thêm đậm đà hương thơm (vị cacao, bạc hà, trà xanh, kiwi, khoai môn) +5kPhí ship 0-30k. Miễn phí ship trong bán kính 3km. Giao hàng từ 1 ly.Miễn phí ship nội thành tp Hồ Chí Minh từ 10 ly trở lên.'
			,Math.floor((Math.random() * 4+1))
		)
		);
	}else
	{
		trasua.push(
		new obj(
			i,
			1,
			'Trà sữa loai '+i,
			'img/product/tea/ts'+i+'.png',
			so,
			so+5000,
			so+10000,
			10, 
			'Trà sữa trân châu chỉ bao gồm trà sữa và trân châu đen, dành riêng cho tín đồ thích trà sữa trân châu truyền thống.Bạn có thể chọn, thêm bớt topping mà bạn yêu thích. Hoặc thêm vị cho trà sữa thêm đậm đà hương thơm (vị cacao, bạc hà, trà xanh, kiwi, khoai môn) +5kPhí ship 0-30k. Miễn phí ship trong bán kính 3km. Giao hàng từ 1 ly.Miễn phí ship nội thành tp Hồ Chí Minh từ 10 ly trở lên.'
			,Math.floor((Math.random() * 4+1))	
		)
		);
	}
	ALLProduct.push(trasua[i-1]);
	
}


for(var i=1; i<=12; i++){
	var so = Math.floor((Math.random() * 50) + 20)*1000;
	if(i%5!=0)
	{
		cafe.push(
		new obj(
			i,
			2,
			'Coffee loai '+i,
			'img/product/cafe/c'+i+'.png',
			so,
			so+5000,
			so+10000,
			0, 
			'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.'
			,Math.floor((Math.random() * 4+1))
		)
		);
	}else
	{
		cafe.push(
		new obj(
			i,
			2,
			'Coffee loai'+i,
			'img/product/cafe/c'+i+'.png',
			so,
			so+5000,
			so+10000,
			20, 
			'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.'
			,Math.floor((Math.random() * 4+1))	
		)
		);
	}
	ALLProduct.push(cafe[i-1]);
	
}

for(var i=1; i<=16; i++){
	var so = Math.floor((Math.random() * 90) + 30)*1000;
	if(i%5!=0)
	{
		fastfood.push(
		new obj(
			i,
			3,
			'Fastfood loai '+i,
			'img/product/fastfood/f'+i+'.png',
			so,
			so+5000,
			so+10000,
			0, 
			'Un endroit haut en couleurs très à l’américaineLe cadre est un peu façon diner à l’ancienne Rien de beau ou clinquant c’est vraiment très simple sans prise de tête Des trans assurent le show et divertissent les gens pendant le dîner Ils ont beaucoup d’énergie et font participer les gens Il faut prendre ça au second degré Malgré tout ce qui importe c’est que le contenu de l’assiette est bonLes burgers et frites sont bons c’est le principal Il faut se prêter au jeu'
			,Math.floor((Math.random() * 4+1))	
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
			so,
			so+5000,
			so+10000,
			20, 
			
			'Un endroit haut en couleurs très à l’américaineLe cadre est un peu façon diner à l’ancienne Rien de beau ou clinquant c’est vraiment très simple sans prise de tête Des trans assurent le show et divertissent les gens pendant le dîner Ils ont beaucoup d’énergie et font participer les gens Il faut prendre ça au second degré Malgré tout ce qui importe c’est que le contenu de l’assiette est bonLes burgers et frites sont bons c’est le principal Il faut se prêter au jeu'
			,Math.floor((Math.random() * 4+1))	
		)
		);
	}
	ALLProduct.push(fastfood[i-1]);
	
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}


function formatMoney(money){
	let dem=1;
	let a =[];
	let so = money.toString();
	let kq = '';
	for(let i=so.length-1; i>=0; i--)
	{
		kq+=so.charAt(i);
		if(dem%3==0 && i!=0)
		{
			kq+=',';
		}
		dem++;
	}
	tam = '';
	for(let i=kq.length-1; i>=0; i--)
		tam+= kq.charAt(i);
	return tam;
}

function timkiem1(str){
	let mang = shuffle(ALLProduct);
	// console.log(mang);
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
	return tam;
}

