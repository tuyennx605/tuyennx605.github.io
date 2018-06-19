$(function(){
	var diachi = window.location.href;
	console.log(diachi);

	var url = new URL(diachi);
	var c = url.searchParams.get("name");
	
	$('.name').html("Name la: "+ url.searchParams.get("name"));
	$('.ngaythangnamsinh').html("ngày tháng năm sinh la: "+ url.searchParams.get("ngaythangnamsinh"));
	$('.gioitinh').html("Giới Tính la: "+ url.searchParams.get("gioitinh"));
	$('.diachi').html("dia chi la: "+ url.searchParams.get("diachi"));
	$('.sdt').html("sdt la: "+ url.searchParams.get("sdt"));
	$('.email').html("email la: "+ url.searchParams.get("mail"));
	$('.pass').html("pass la: "+ url.searchParams.get("pwd"));
});