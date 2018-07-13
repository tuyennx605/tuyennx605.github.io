
var cards = ["1", "2",  "3",  "4",  "5",  "6",  "7",  "8","9", "10", "11", "12" ];
var current = null;		//luu quan bai nguoi dung lat len
var count = 0;
var remainingTime = 50;
var timemax = 50;
var run;


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


function toggleClick(typeclick)
{
	$('.card').css('pointer-events', typeclick); //cho phep click hay ko
	// console.log($('.card'));
	$('.noneClick').css('pointer-events', 'none');
}

function flip(card){
	document.getElementById('click-music').play();

	$(card).toggleClass('flipped');
	toggleClick("none");

	if(!current){
		current = $(card);
		toggleClick("auto");
		current.css('pointer-events', "none");
	}
	else
	{
		console.log("data: " + current.attr('data-name') + " vs " + $(card).attr('data-name'));
		if(current.attr('data-name') != $(card).attr('data-name'))
		{
			setTimeout(function(){		// sau 0.5s thi no lam cai function kia
				document.getElementById('ko-an-music').play();
				console.log('khac nhau');
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');

				toggleClick("auto");

				current = null;
				
			}, 500);
			
		}
		else
		{
			count++;
			console.log("leng " + cards.length);
			if(count == cards.length/2)
			{
				clearInterval(run);	//dung thoi gian
				toggleClick("none");
				document.getElementById('win-music').play();
				$('#start_Game').css('display', 'block');
				$('#start_Game p').html("win!!!");
				$('#start_Game button').html("chơi Tiếp!");
			}


			console.log("dem so lan chon dung: "+ count);
			document.getElementById('an-music').play();
			setTimeout(function(){		// sau 0.5s thi no lam cai function kia
				console.log("giong nhau");
				
				current.css('opacity', '0');
				$(card).css('opacity', '0');

				current.addClass("noneClick");
				$(card).addClass("noneClick");
				toggleClick("auto");
				current = null;
			}, 300);
			
		}
	}

}

function batdau(){
	console.log("vao day");
	//nhan doi mang
	cards = cards.concat(cards);
	//daovitri
	cards = shuffle(cards);

	//chen noi dung
	var html = "";

	var dem = 0;
	for(var i=0; i<cards.length/8; i++)
	{
		html+= '<div class="grid">'
		for(var j=0; j<8; j++)
		{
			html+= '<div class="card" data-name="'+ cards[dem] + '" onclick="flip(this)">'+
				'<div class="mat_truoc"><img src="img/0.png"></div>'+
				'<div class="mat_sau"> <img src="img/'+cards[dem]+'.png"></div>'+
				'</div>'
			dem++;
		}
		html+='</div>';

		// html+= '<div class="grid">'+
		// 		'<div class="card" data-name="'+ cards[i] + '" onclick="flip(this)">'+
		// 		'<div class="mat_truoc"><img src="img/0.png"></div>'+
		// 		'<div class="mat_sau"> <img src="img/'+cards[i]+'.png"></div>'+
		// 		'</div> </div>';
	};
	$('.content').html(html);


	function main1(){
		console.log("vao main");
		toggleClick("none");
		$('#start_Game').slideDown();
	}

	main1();

}

$(function(){
	batdau();
});

function startGame(){
	var remainingTime = timemax;
	run = setInterval(function(){
	remainingTime--;
	console.log(remainingTime);
	$('.time1').css('width', ''+(remainingTime*100/timemax)+'%');

		if(remainingTime==0){
			clearInterval(run);	//dung thoi gian
			toggleClick("none");
			document.getElementById('lose-music').play();
			$('#start_Game').css('display', 'block');
			$('#start_Game p').html("lose !! " + count +" / " + cards.length/2);
			$('#start_Game button').html("chơi lại!");
		}
	}, 1000);
	$('.time1').css('width', '100%');
	cards = ["1", "2",  "3",  "4",  "5",  "6",  "7",  "8","9", "10", "11", "12" ];
	batdau();
	toggleClick("auto");
	$('#start_Game').css('display', 'none');
	console.log("click");

}