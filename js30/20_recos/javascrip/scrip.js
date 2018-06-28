window.SpeechRecogition = window.SpeechRecogition||window.webkitSpeechRecognition;
const recognition = new SpeechRecogition();
recognition.interimResults = true;

recognition.addEventListener('result', e=>{
	console.log(e.results);
	const transcript = Array.from(e.results)
			.map(result=>result[0])
			.map(result=>result.transcript)
			.join('');

	console.log(transcript);
});

recognition.start();