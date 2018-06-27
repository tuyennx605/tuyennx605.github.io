var url = "https://tuyennx605.github.io/js30/6_docjsontrenmang/docjsontrenmang/file_json.json";
const arr=[];

// fetch(url, function(data){
// 	console.log(data);
// })
// console.log(fetch(url));
fetch(url).then(blob=> blob.json())
			.then(data=>console.log(data));