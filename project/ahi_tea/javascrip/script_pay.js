var mangPay = [trasua[0], trasua[1], trasua[5], cafe[5], cafe[2], fastfood[10]];
 mangPay[0].sl = 5;
 for(var i=0; i<mangPay.length; i++)
 {
 	mangPay[i].sl = Math.floor(Math.random()*3 + 1);
 }

 document.addEventListener('DOMContentLoaded', function(){
 	var tabl = document.getElementById('tabl');
 	var tongtien = document.getElementById('tongtien');
	var tongtien1 = 0;


 	

 	function loadList(){
 		var html1 = '';
 		
	 	for(var i=0; i<mangPay.length; i++){
	 		tongtien1+=(mangPay[i].giaSizeS*mangPay[i].sl);
	 		html1+= '<tr>'+
						'<td class="img1"><img src="'+mangPay[i].urlImage+'"></td>'+
						'<td class="tensp1">'+mangPay[i].name+'</td>'+
						'<td class="dongia1">'+mangPay[i].giaSizeS+'</td>'+
						'<td class="soluong1">'+
							'<input type="button" name="tru" value="-" class="tru">'+
							'<span> '+mangPay[i].sl+' </span>'+
							'<input type="button" name="cong" value="+" class="cong">'+
						'</td>'+
						'<td class="thanhtien1">'+(mangPay[i].sl*mangPay[i].giaSizeS)+'</td>'+
						'<td class="option1">'+
							'<input type="button" name="xoa" value="Xóa" class="xoa">'+
						'</td>'+
					'</tr>';
	 	}
	 	tabl.innerHTML = html1;
	 	tongtien.innerText = "Tổng Tiền: "+tongtien1+"đ";
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
 				this.parentNode.nextSibling.innerText = (mangPay[j].sl*mangPay[j].giaSizeS);
 				// console.log(this.previousSibling);
 				// console.log(this.parentNode.nextSibling);
 				tongtien1+=mangPay[j].giaSizeS;

 				tongtien.innerText = "Tổng Tiền: "+tongtien1+"đ";
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

 				tongtien.innerText = "Tổng Tiền: "+tongtien1+"đ";
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
 				tongtien.innerText = "Tổng Tiền: "+tongtien1+"đ";
 				tabl.removeChild(this.parentNode.parentNode);
 		// console.log(this.parentNode.parentNode);
 				break;
 			}
 		}
 		
 	});
 	}
 });