function changeFontSize(x)	/*thay doi kich thuoc font 3 doan*/
{
	var arr = document.querySelectorAll(".wraper p");
	console.log(arr.length);
	for(var i=0; i<arr.length; i++)
	{
		arr[i].style.fontSize = ""+x+"px";
		console.log(arr[0].innerText);
	}
}

function increaseFontSize(para)
{
	console.log(para);
	if(para>3 || para<=0)
		return;
	var arr = document.querySelectorAll(".wraper p");
	if(parseInt(arr[para-1].style.fontSize.substring(0, arr[para-1].style.fontSize.length-2))>=30)
		return;
	arr[para-1].style.fontSize=""+(parseInt(arr[para-1].style.fontSize.substring(0, arr[para-1].style.fontSize.length-2))+1)+"px";
	console.log(arr[para-1].style.fontSize.substring(0, arr[para-1].style.fontSize.length-2));
}

function decreaseFontSize(para)
{
	console.log(para);
	if(para>3 || para<=0)
		return;
	var arr = document.querySelectorAll(".wraper p");
	console.log(arr.length);
	var size1 = parseInt(arr[para-1].style.fontSize.substring(0, arr[para-1].style.fontSize.length-2));
	if(size1<=10)
		return;
	size1--;
	arr[para-1].style.fontSize = size1 + "px";
}

function changeColor()
{
	var arr = document.querySelectorAll(".wraper p");
	var color1 = ["green", "Yellow", "red"];
	console.log(arr.length);
	for(var i=0; i<arr.length; i++)
	{
		arr[i].style.color = color1[i];
	}
}

function changeBgColor(color)
{
	var arr = document.getElementsByClassName("wraper")[0];
	arr.style.backgroundColor = color;
}

function copyContent(paragraph1, paragraph2)
{
	if(paragraph1>3 || paragraph1<=0 || paragraph2>3 || paragraph2<=0)
		return;
	console.log(paragraph1 + " " + paragraph2);
	var arr = document.querySelectorAll(".wraper p");
	arr[paragraph1-1].innerText = arr[paragraph2-1].innerText;
}