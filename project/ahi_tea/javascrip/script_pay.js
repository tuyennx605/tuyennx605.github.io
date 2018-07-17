var mangPay = [];
var tongtien1 = 0;

 for(var i=0; i<list1.length; i++)
 {
 	mangPay.push(list1[i]);
 }
 console.log(mangPay.length);

 function clickchange(input) {
	console.log(input.value);
	
	for(let i=0; i<mangPay.length; i++){
		if(mangPay[i].name == input.getAttribute("data-key"))
		{
			tongtien1-=(mangPay[i].giaSizeS*mangPay[i].sl);
			list1[i].sl = parseInt(input.value);
			mangPay[i].sl =  parseInt(input.value);
			updateGioHang();

			console.log(input.parentNode.parentNode.nextSibling.innerText);
			input.parentNode.parentNode.nextSibling.innerText = formatMoney((mangPay[i].sl*mangPay[i].giaSizeS));
				// console.log(this.previousSibling);
				// console.log(this.parentNode.nextSibling);
				
				tongtien1+=(mangPay[i].giaSizeS*mangPay[i].sl);
				tongtien.innerText = "Tổng Tiền: "+formatMoney(tongtien1)+"đ";
			break;
		}
	}
	
		
	

}



 document.addEventListener('DOMContentLoaded', function(){

	


 	var tabl = document.getElementById('tabl');
 	var tongtien = document.getElementById('tongtien');
	



	
 	

 	function loadList(){
 		var html1 = '';
 		
	 	for(var i=0; i<mangPay.length; i++){
	 		tongtien1+=(mangPay[i].giaSizeS*mangPay[i].sl);
	 		html1+= '<tr>'+
						'<td class="img1"><img src="'+mangPay[i].urlImage+'"></td>'+
						'<td class="tensp1"><a href="detail.html"  class="saveObj">'+mangPay[i].name+'</a></td>'+
						'<td class="dongia1">'+formatMoney(mangPay[i].giaSizeS)+'đ</td>'+
						// '<td class="soluong1">'+
						// 	'<input type="button" name="tru" value="-" class="tru">'+
						// 	'<span> '+mangPay[i].sl+' </span>'+
						// 	'<input type="button" name="cong" value="+" class="cong">'+
						// '</td>'+
						'<td class="soluong1"><div class="col"><input type="number" class="form1" name="quantity" value="'+mangPay[i].sl+'" min="0" title="Quantity" onchange="clickchange(this)" data-key = "'+mangPay[i].name+'"></div></td>'+
						// '<div class="col"><input type="number" class="form-control" name="quantity" value="1" min="0" title="Quantity" "></div>'+
						'<td class="thanhtien1">'+formatMoney((mangPay[i].sl*mangPay[i].giaSizeS))+'đ</td>'+
						'<td class="option1">'+
							'<input type="button" name="xoa" value="Xóa" class="xoa" data-keyxoa = "'+i+'">'+
						'</td>'+
					'</tr>';
	 	}
	 	tabl.innerHTML = html1;
	 	tongtien.innerText = "Tổng Tiền: "+formatMoney(tongtien1)+"đ";
 	}

 	loadList();
 	var congsp = document.getElementsByClassName('cong');
 	var trusp = document.getElementsByClassName('tru');
 	var xoasp = document.getElementsByClassName('xoa');

 	console.log(xoasp);

 	for(let i=0; i<congsp.length; i++)
 	{
 		congsp[i].addEventListener('click', function(){
 		// console.log(this.parentNode.previousSibling.previousSibling.innerText);

 		for(let j=0; j<mangPay.length; j++){
 			if(mangPay[j].name==this.parentNode.previousSibling.previousSibling.innerText){
 				mangPay[j].sl++;
 				this.previousSibling.innerText = mangPay[j].sl;
 				this.parentNode.nextSibling.innerText = formatMoney((mangPay[j].sl*mangPay[j].giaSizeS));
 				// console.log(this.previousSibling);
 				// console.log(this.parentNode.nextSibling);
 				tongtien1+=mangPay[j].giaSizeS;

 				tongtien.innerText = "Tổng Tiền: "+formatMoney(tongtien1)+"đ";
 				break;
 			}
 		}
 	});
 	}

 	for(let i=0; i<trusp.length; i++)
 	{
 		trusp[i].addEventListener('click', function(){
 		// console.log(this.parentNode.previousSibling.previousSibling.innerText);

 		for(let j=0; j<mangPay.length; j++){
 			if(mangPay[j].name==this.parentNode.previousSibling.previousSibling.innerText){
 				if(mangPay[j].sl==0)
 					return;
 				mangPay[j].sl--;
 				this.nextSibling.innerText = mangPay[j].sl;
 				this.parentNode.nextSibling.innerText = (mangPay[j].sl*mangPay[j].giaSizeS);
 				// console.log(this.previousSibling);
 				// console.log(this.parentNode.nextSibling);
 				tongtien1-=mangPay[j].giaSizeS;

 				tongtien.innerText = "Tổng Tiền: "+formatMoney(tongtien1)+"đ";
 				break;
 			}
 		}
 	});
 	}

 	for(let i=0; i<xoasp.length; i++)
 	{
 		xoasp[i].addEventListener('click', function(){
 		console.log(this.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText);
 		// 
 		// 
		 // 
 		for(let j=0; j<mangPay.length; j++){
 			if(mangPay[j].name==this.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText){
				
 				tongtien1-= (mangPay[j].sl*mangPay[j].giaSizeS);
 				tongtien.innerText = "Tổng Tiền: "+formatMoney(tongtien1)+"đ";
				 tabl.removeChild(this.parentNode.parentNode);
				 mangPay.splice(j, 1);
				list1.splice(j, 1);
				console.log(mangPay);
				updateGioHang();
 		// console.log(this.parentNode.parentNode);
 				break;
 			}
 		}
 		
 	});
	 }
	 




	 var saveObj = document.getElementsByClassName('saveObj');
	console.log(saveObj);

	for(var i=0; i<saveObj.length; i++){
		saveObj[i].addEventListener('click', function(){
			// this.querySelector('p');
			console.log(this.innerText);
			localStorage.setItem('detail', JSON.stringify(this.innerText));
		});
	}
 });