
console.log($('#register'));

$('#register').on('submit', function(){		// lang nghe su kien submit
	var check = true;

	if($('#name').val().trim()=='')
	{
		$('#name').next('span').text("name is empty");
		check = false;
	}
	else
	{
		$('#name').next('span').text("");
	}

	if($('#namsinh').val().match(/((\d{2})|(\d))\/((\d{2})|(\d))\/((\d{4})|(\d{2}))/)==null)	//kiem tra
	{
		$('#namsinh').next('span').text("invalid");
		check = false;
	}
	else
	{
		$('#namsinh').next('span').text("");
	}

	if($('#diachi').val().trim()=='')
	{
		$('#diachi').next('span').text("dia chi is empty");
		check = false;
	}
	else
	{
		$('#diachi').next('span').text("");
	}



	if($('#sdt').val().match(/(09|01[2|6|8|9])+([0-9]{8})\b/)==null)	//kiem tra
	{
		$('#sdt').next('span').text("invalid");
		check = false;
	}
	else
	{
		$('#sdt').next('span').text("");
	}

	if($('#email').val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)==null)	//kiem tra
	{
		$('#email').next('span').text("invalid");
		check = false;
	}
	else
	{
		$('#email').next('span').text("");
	}

	if($('#pwd').val().trim()=='')
	{
		$('#pwd').next('span').text("pass is empty");
		check = false;
	}
	else
	{
		$('#pwd').next('span').text("");
	}


	return check;

});