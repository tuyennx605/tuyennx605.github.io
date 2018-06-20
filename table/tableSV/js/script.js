var arrNhanVien = [];

function nhanvien(urlImage, name, gioitinh, email, sdt){
	this.urlImage = urlImage;
	this.name = name;
	this.gioitinh = gioitinh;
	this.email = email;
	this.sdt = sdt;
}

function main(){
	arrNhanVien = [];
	khoitao();
}
main();

function khoitao(){
	arrNhanVien.push(new nhanvien('1', 'nguyen van 1', 'nam', '1@gmail.com', '12364455555555'));
	arrNhanVien.push(new nhanvien('2', 'nguyen van 2', 'nam', '2@gmail.com', '12364455555555'));
	arrNhanVien.push(new nhanvien('3', 'nguyen van 3', 'nam', '3@gmail.com', '12344565555555'));
	arrNhanVien.push(new nhanvien('4', 'nguyen van 4', 'nu', '4@gmail.com', '12344565555555'));
	arrNhanVien.push(new nhanvien('5', 'nguyen van 5', 'nam', '5@gmail.com', '12344565555555'));
	arrNhanVien.push(new nhanvien('6', 'nguyen van 6', 'nam', '6@gmail.com', '123464555655555'));
	arrNhanVien.push(new nhanvien('7', 'nguyen van 7', 'nam', '7@gmail.com', '12344555575555'));
	arrNhanVien.push(new nhanvien('8', 'nguyen van 8', 'nu', '8@gmail.com', '1234455555555'));
	arrNhanVien.push(new nhanvien('9', 'nguyen van 9', 'nam', '9@gmail.com', '12344556555555'));
	arrNhanVien.push(new nhanvien('10', 'nguyen van 10', 'nam', '10@gmail.com', '12344655555555'));
}

$(function(){
	function gangiatri(){
		var html='';
		for(var i=0; i<arrNhanVien.length; i++)
		{
			console.log(arrNhanVien[i]['urlImage']);
			html += "<tr>";
					html+= "<td class='img1'><img src='img/" + arrNhanVien[i]['urlImage'] +".jpg'></td>"+
					"<td class='hoten'>"+ arrNhanVien[i]['name'] +"</td>"+
					'<td class="gioitinh">'+ arrNhanVien[i]['gioitinh'] +'</td>'+
					'<td class="email">'+ arrNhanVien[i]['email'] +'</td>'+
					'<td class="sdt1">'+ arrNhanVien[i]['sdt'] +'</td>'
			html += "</tr>";
		}

		console.log(html);

		$('#tabl').html(html);
	}
	gangiatri();

	function rs(){
		$('.title td').removeClass('sort-giam');
		$('.title td').removeClass('sort-tang');
	}
	rs();


	$('#name').click(function(){
		if($('#name').hasClass('sort-tang')==false)	//chua co class
		{
			rs();
			console.log("chua co class sort tang");
			$('#name').removeClass('sort-giam');
			$('#name').addClass('sort-tang');
			sort1_tang('name');
		}
		else
		{
			rs();
			$('#name').removeClass('sort-tang');
			$('#name').addClass('sort-giam');
			console.log("da co class sort");
			sort1_giam('name');
		}
	});


$('#sex').click(function(){
		if($('#sex').hasClass('sort-tang')==false)	//chua co class
		{
			rs();
			console.log("chua co class sort tang");
			$('#sex').removeClass('sort-giam');
			$('#sex').addClass('sort-tang');
			sort1_tang('gioitinh');
		}
		else
		{
			rs();
			$('#sex').removeClass('sort-tang');
			$('#sex').addClass('sort-giam');
			console.log("da co class sort");
			sort1_giam('gioitinh');
		}
	});


$('#mail').click(function(){
		if($('#mail').hasClass('sort-tang')==false)	//chua co class
		{
			rs();
			console.log("chua co class sort tang");
			$('#mail').removeClass('sort-giam');
			$('#mail').addClass('sort-tang');
			sort1_tang('email');
		}
		else
		{
			rs();
			$('#mail').removeClass('sort-tang');
			$('#mail').addClass('sort-giam');
			console.log("da co class sort");
			sort1_giam('email');
		}
	});

$('#sdt').click(function(){
		if($('#sdt').hasClass('sort-tang')==false)	//chua co class
		{
			rs();
			console.log("chua co class sort tang");
			$('#sdt').removeClass('sort-giam');
			$('#sdt').addClass('sort-tang');
			sort1_tang('sdt');
		}
		else
		{
			rs();
			$('#sdt').removeClass('sort-tang');
			$('#sdt').addClass('sort-giam');
			console.log("da co class sort");
			sort1_giam('sdt');
		}
	});

	function sort1_tang(value1){
		arrNhanVien.sort(function(a, b){
			return a[value1]>b[value1];
		});
		gangiatri();
	}

	function sort1_giam(value1){
		arrNhanVien.sort(function(a, b){
			return a[value1]<b[value1];
		});
		gangiatri();
	}
});