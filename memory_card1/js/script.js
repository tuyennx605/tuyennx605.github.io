var cards = ["1", "2",  "3",  "4",  "5",  "6",  "7",  "8","9", "10", "11", "12" ];
var curr

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

function flip(card){
	$(card).toggleClass('flipped');
	
	$(card).find(".mat_sau")[0].style.transform = "rotateY(0deg)";
	$(card).find(".mat_truoc")[0].style.transform = "rotateY(180deg)";
	console.log(tam);

}

$(function(){
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
});