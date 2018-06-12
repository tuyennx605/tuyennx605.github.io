var kq ="0";
var kqtrc = "0";
var kqsau = "0";
var changeKqsau = false;
var typeDau = -1;	//1 la cong, 2 la tru, 3 la nhan, 4 la chia, 5 %
var rs = false;

function setValueInput()
{
	document.getElementById("input1").value = kq;
}

function press(key1){
	console.log("key: "+ key1);
	switch(key1)
	{
		case -1:
			onClickRS();	//ac
			break;
		case 0:
			onClick0();
			break;
		case 1:
			onClick1();
			break;
		case 2:
			onClick2();
			break;
		case 3:
			onClick3();
			break;
		case 4:
			onClick4();
			break;
		case 5:
			onClick5();
			break;
		case 6:
			onClick6();
			break;
		case 7:
			onClick7();
			break;
		case 8:
			onClick8();
			break;
		case 9:
			onClick9();
			break;
		case 10: 	//bang
			rs = true;
			changeKqsau = false;
			onClickBang();
			break;
		case 11: 		//cong
			onClickADD();
			break;
		case 12: 		//tru
			onClickTru();
			break;
		case 13: 		//nhan
			onClickNhan();
			break;
		case 14: 		//chia
			onClickChia();
			break;
		case 15: 		//phay
			onClickPhay();
			break;
		case 16: 		//%
			onClickChiaDu();
			break;
		case 17: 		//can
			onClickSQRT();
			break;
		case 18: 		//mu~
			onClickMu();
			break;
		case 19: 		//giaithua
			onClickGiaiThua();
			break;
	}
}

function onClickRS(){
	kq ="0";
	kqtrc = "0";
	kqsau = "0";
	changeKqsau = false;
	setValueInput();
}

function returnkq()
{
	switch(typeDau)
	{
		case -1:
			return "";
		case 1: 	//cong
			return kqtrc + " + " + kqsau;
		case 2: 	
			return kqtrc + " - " + kqsau;
		case 3: 	
			return kqtrc + " * " + kqsau;
		case 4: 	
			return kqtrc + " / " + kqsau;
		case 5: 	
			return kqtrc + " % " + kqsau;
	}
}

function addNumResul(num1){
	if(rs==true)
	{
		rs = false;
		kq = "" + num1;
		kqtrc = kq;
		kqsau = "0";
		changeKqsau = false;
		typeDau = -1;
		setValueInput();
		return;
	}
	if(num1==".")
	{	
		if(changeKqsau==false){
			if(parseInt(kqtrc)!=kqtrc)
			{
				console.log("da phay roi!!!");
				return;
			}
			kqtrc = kqtrc + ".";
			kq = kqtrc;
		}
		else
		{
			if(parseInt(kqsau)!=kqsau)
			{
				console.log("da phay roi!!!");
				return;
			}
			kqsau = kqsau + num1;
			kq = returnkq();
		}
		setValueInput();
		return;
	}
	if(num1==0)
	{
		if(changeKqsau==false)
		{
			if(kqtrc=="0")
				return;
			else
			{
				kqtrc=kqtrc + "0";
				kq = kqtrc;
			}
		}
		else
		{
			if(kqsau=="0")
			{

			}
			else
			{
				kqsau = kqsau+ "0";
			}
			kq = returnkq();
		}
	}
	else
	{
		if(changeKqsau==false)
		{
			if(kqtrc=="0")
				kqtrc=""+num1;
			else
				kqtrc = kqtrc + num1;
			kq = kqtrc;
		}
		else
		{
			if(kqsau=="0")
				kqsau = ""+num1;
			else
				kqsau = kqsau + num1;
			kq = returnkq();
		}
		
	}
	setValueInput();
}

function onClick0(){
	addNumResul(0);
}
function onClick1(){
	addNumResul(1);
}
function onClick2(){
	addNumResul(2);
}
function onClick3(){
	addNumResul(3);
}
function onClick4(){
	addNumResul(4);
}
function onClick5(){
	addNumResul(5);
}
function onClick6(){
	addNumResul(6);
}
function onClick7(){
	addNumResul(7);
}
function onClick8(){
	addNumResul(8);
}
function onClick9(){
	addNumResul(9);
}
function onClickBang(){
	switch(typeDau)
	{
		case -1:
			kq = kqtrc;
			break;
		case 1: 	//cong
			kq ="" + ( Number(kqtrc) + Number(kqsau));
			kqtrc =  kq;
			kqsau = "0";
			break;
		case 2: 
			kq ="" + ( Number(kqtrc) - Number(kqsau));
			kqtrc =  kq;
			kqsau = "0";
			break;
		case 3: 	
			kq ="" + ( Number(kqtrc) * Number(kqsau));
			kqtrc =  kq;
			kqsau = "0";
			break;
		case 4: 	
			kq ="" + ( Number(kqtrc) / Number(kqsau));
			kqtrc =  kq;
			kqsau = "0";
			break;
		case 5: 	
			kq ="" + ( Number(kqtrc) % Number(kqsau));
			kqtrc =  kq;
			kqsau = "0";
			break;
	}
	typeDau = -1;
	//changeKqsau = false;
	setValueInput();
}
function onClickADD(){
	rs = false;
	
	if(changeKqsau==false)
	{
		changeKqsau = true;
		kq = kq + " +";
	}
	else
	{
		onClickBang()
		kq = kq + " +";
	}
	setValueInput();
	typeDau = 1;
}

function onClickTru(){
	rs = false;
	if(changeKqsau==false)
	{
		changeKqsau = true;
		kq = kq + " -";
	}
	else
	{
		onClickBang()
		kq = kq + " -";
	}
	setValueInput();
	typeDau = 2;
}

function onClickNhan(){
	rs = false;
	if(changeKqsau==false)
	{
		changeKqsau = true;
	}
	else
	{
		onClickBang()
	}
	kq = kq + " *";
	setValueInput();
	typeDau = 3;
}

function onClickChia(){
	rs = false;
	if(changeKqsau==false)
	{
		changeKqsau = true;
	}
	else
	{
		onClickBang()
	}
	kq = kq + " /";
	setValueInput();
	typeDau = 4;
}
function onClickPhay(){
	addNumResul(".");
}

function onClickChiaDu(){
	rs = false;
	
	if(changeKqsau==false)
	{
		changeKqsau = true;
		kq = kq + " %";
	}
	else
	{
		onClickBang()
		kq = kq + " %";
	}
	setValueInput();
	typeDau = 5;
}

function onClickSQRT(){
	if(changeKqsau==false)
	{
		console.log(" "+ kqtrc);
		if(Number(kqtrc)<0)
		{
			console.log("kq am!!!");
			return;
		}
		kqtrc = Math.sqrt(kqtrc);
		kq = kqtrc;
		rs = true;
	}
	else
	{
		console.log(" "+ kqsau);
		if(Number(kqsau)<0)
		{
			console.log("kq am!!!");
			return;
		}
		kqsau = Math.sqrt(kqsau);
		kq = returnkq();
		rs = false;
	}

	setValueInput();
}

function onClickMu(){
	if(changeKqsau==false)
	{
		if(Number(kqtrc)==0)
			return;
		kqtrc = Math.pow(Number(kqtrc), 2)+"";
		kq = kqtrc;
		rs = true;
	}
	else
	{
		if(Number(kqsau)==0)
			return;
		kqsau = Math.pow(Number(kqsau), 2) + "";
		kq = returnkq();
		rs = false;
	}

	setValueInput();
}

function onClickGiaiThua(){
	onClickBang()
	var n = parseInt(kq);
	if(n<=0)
		return;
	var k = 1;
	for(var i=1; i<=n; i++)
		k=k*i;
	kq = "" + k;
	kqtrc = kq;
	rs = true;
	setValueInput();
}