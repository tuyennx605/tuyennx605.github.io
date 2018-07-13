// $(function(){

// 	var d = new Date();
// 	var h = d.getHours();
// 	h=h%12;
// 	if(h==0)
// 		h=12;
// 	var p = d.getMinutes();
// 	if(p==0)
// 		p=60;
// 	var g = d.getSeconds();
// 	if(g==0)
// 		g=60;
// 	console.log(""+h + " "+p+" "+g);

// 	var deg_kimgiay = parseInt((g*6+270)%360);
// 	var deg_kimphut = parseInt((p*6+270)%360) + parseInt((deg_kimgiay+90)%360/60);
// 	var deg_kimgio = parseInt((h*30+270)%360) + parseInt((deg_kimphut+90)%360/12);

// 	console.log(""+ deg_kimgiay + " "+deg_kimphut+" "+deg_kimgio);

// 	$('.w_kimgiay').css('transform', "translate(-50%, -50%) rotate("+deg_kimgiay+"deg)");
// 	$('.w_kimphut').css('transform', "translate(-50%, -50%) rotate("+deg_kimphut+"deg)");
// 	$('.w_kimgio').css('transform', "translate(-50%, -50%) rotate("+deg_kimgio+"deg)");

// 	var deg_giaytrc = deg_kimgiay - 60 + deg_kimgiay%60;
// 	var deg_phuttrc = deg_kimphut - 12 + deg_kimphut%12;

// 	var a = setInterval(function(){
// 		deg_kimgiay+=6;
// 		// console.log(deg_kimgiay);
		
// 		if(deg_kimgiay - deg_giaytrc >= 60)
// 		{
// 			deg_kimphut++;
// 			if(deg_kimgiay>=360)
// 				deg_kimgiay=0;
// 			deg_giaytrc = deg_kimgiay;
// 			console.log("kim phut: " + deg_kimphut);

// 			if(deg_kimphut - deg_phuttrc >= 12)
// 			{
// 				deg_kimgio++;
// 				console.log("kim gio: " + deg_kimgio);
// 				if(deg_kimphut>=360)
// 					deg_kimphut=0;
// 				deg_phuttrc=deg_kimphut;

// 				if(deg_kimgio>=360)
// 					deg_kimgio=0;
// 				$('.w_kimgio').css('transform', "translate(-50%, -50%) rotate("+deg_kimgio+"deg)");
// 			}

// 			$('.w_kimphut').css('transform', "translate(-50%, -50%) rotate("+deg_kimphut+"deg)");
// 		}
// 		$('.w_kimgiay').css('transform', "translate(-50%, -50%) rotate("+deg_kimgiay+"deg)");

// 	}, 1000);

// });