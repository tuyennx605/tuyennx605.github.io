var res = 0;
var diem = 0;
var isclick = true;

var cau1 = {
	cauhoi:"Câu 1: Máu trong cơ thể động vật có màu gì?",
	1: "a. Màu xanh",
	2: "b. Màu vàng",
	3: "c. Màu đen",
	4: "d. Màu đỏ",
	correc : 4
}
var cau2 = {
	cauhoi:"Câu 2: Quần áo của bé thường làm bằng chất liệu gì?",
	1: "a. Vải",
	2: "b. Giấy",
	3: "c. Gỗ",
	4: "d. Kính",
	correc:1
}
var cau3 = {
	cauhoi : "Câu 3: Đồ ăn nào sau đây có vị ngọt?",
	1: "a. Mỳ ống",
	2: "b. Bánh mỳ kẹp",
	3: "c. Mật ong",
	4: "d. Hạt lạc",
	correc:3
}
var cau4 = {
	cauhoi:"Câu 4: Loại quả nào sau đây có vị chua?",
	1: "a. Táo",
	2: "b. Chuối",
	3: "c. Dưa hấu",
	4: "d. Chanh",
	correc:4
}
var cau5 = {
	cauhoi:"Câu 5: Đồ vật nào có hơi nóng nhất?",
	1: "a. Ánh đèn bàn",
	2: "b. Ngọn lửa",
	3: "c. Đồ chơi có đèn",
	4: "d. Bé không có câu trả lời",
	correc:2
}
var cau6 = {
	cauhoi:"Cái gì lạnh nhất sau đây?",
	1: "a. Kem",
	2: "b. Nước lọc (không để trong tủ lạnh)",
	3: "c. Nước mưa",
	4: "d. Mặt kính",
	correc : 1
}

var background = ["#FF5722", "#FF8A65", "#607D8B", "#795548", "#FFC107", "#1B5E20"];

var quiz = [cau1, cau2, cau3, cau4, cau5, cau6];

function ganData(obj){
	var p1 = $("#cauhoi").html(obj["cauhoi"]);
	var traloi = $(".btn");
	for(var i=1; i<=traloi.length; i++)
	{
		traloi[i-1].innerText = obj[i+""];
	}
}

function press(index){
	console.log("click: "+ index + quiz[parseInt(res)]);
	if(isclick==false)
		return;
	if(index==quiz[parseInt(res)].correc)
	{
		diem++;
		console.log("tra loi dung va diem la: "+ diem);
	}

	if(res==5)	//het cau
	{
		if(diem==6)
		{
			window.location="ketqua.html";
		}
		else 	//hien va choi lai
		{
			isclick = false;
			$("#idkq").css("display", "block");
			$("#diem1").text("bạn được số điểm là:"+ diem + "/6. bạn có muốn chơi lại!!!");
		}
		return;
	}

	res++;
	console.log("res dang la : "+ res);
	ganData(quiz[res]);
}

function main(){
	isclick = true;
	diem = 0;
	res = 0;
	ganData(quiz[0]);
}
main();

function choilai(){
	main();
	$("#idkq").css("display", "none");
}

function changeBG(){
	$("body").css("background-color", background[Math.floor(Math.random() * background.length)]);
	$(".banner img").attr("src", 'img/quiz2.gif');
}