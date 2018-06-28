var url = "https://rawgit.com/tuyennx605/tuyennx605.github.io/master/js30/6_docjsontrenmang/docjsontrenmang/file_json.json";
const arr=[];

// fetch(url, function(data){
// 	console.log(data);
// })
// console.log(fetch(url));

// fetch(url).then(blob=> blob.json())
// 			.then(data=>console.log(data));
fetch(url).then(function(blob){
	return blob.json();
}).then(function(data){
	// console.log(data.data);
	// arr.push(...data.data);
	for(var i=0; i<data.data.length; i++)
	{
		console.log(data.data[i]['ag']);
		// console.log(data.data[i].ag);
	}
});


