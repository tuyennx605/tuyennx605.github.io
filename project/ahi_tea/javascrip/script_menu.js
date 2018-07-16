var CoundGioHang = 0;
var shopping_cart = document.querySelector('.shopping-cart');
var totop = document.querySelector('.toTop');


//gio hang
var DB = {
	getData: function(){
		if (typeof(Storage) !== "undefined") {	//kiem tra trinh duyet ho tro storate ko
    // Code for localStorage/sessionStorage.
    		var data;
    		try{
    			data = JSON.parse(localStorage.getItem('dbgiohang') || []);
    		}catch(err)
    		{
    			data = [];
    		}
    		return data;
		} else {
		    alert("sorry! no web storage support");
		    return [];
		}
	},
	setData: function(data){
		localStorage.setItem('dbgiohang', JSON.stringify(data));
		// setCoundata();
	}
};
var numGioHang = document.querySelector('.count-item');
var list1 = DB.getData();
function updateGioHang(){
	if(!list1)
		{
			 list1 = [];
			 console.log("vao day 4646" + list1);
		}
	numGioHang.innerText = list1.length;
	DB.setData(list1);
}
//end gio hang

document.addEventListener('DOMContentLoaded', function(){
	
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
			var check1 = false;
			if(!list1)
			{
				 list1 = [];
				 console.log("vao day 4646" + list1);
			}
			for(var j=0; j<list1.length; j++)
			{
				if(this.parentNode.parentNode.parentNode.nextSibling.getElementsByClassName('name_')[0].innerText == list1[j].name){
					list1[j].sl++;
					check1 = true;
					break;
				}
			}
			if(check1==false)
			{
				for(var j=0; j<trasua.length; j++){
					if(this.parentNode.parentNode.parentNode.nextSibling.getElementsByClassName('name_')[0].innerText == trasua[j].name){
						list1.push(trasua[j]);
						list1[list1.length-1].sl = 1;
						check1 = true;
						break;
					}
				}
			}
			if(check1==false)
			{
				for(var j=0; j<cafe.length; j++){
					if(this.parentNode.parentNode.parentNode.nextSibling.getElementsByClassName('name_')[0].innerText == cafe[j].name){
						list1.push(cafe[j]);
						list1[list1.length-1].sl = 1;
						check1 = true;
						break;
					}
				}
			}
			if(check1==false)
			{
				for(var j=0; j<fastfood.length; j++){
					if(this.parentNode.parentNode.parentNode.nextSibling.getElementsByClassName('name_')[0].innerText == fastfood[j].name){
						list1.push(fastfood[j]);
						list1[list1.length-1].sl = 1;
						check1 = true;
						break;
					}
				}
			}
			console.log(list1	);

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




