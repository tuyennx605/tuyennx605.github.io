window.SpeechRecogition = window.SpeechRecogition||window.webkitSpeechRecognition;
const recognition = new SpeechRecogition();
recognition.interimResults = true;

recognition.addEventListener('result', e=>{
	const transcript = Array.from(e.result)
			.map(result=>result[0])
			.map(result=>result.transcript)
			.join('');

	console.log(transcript);
});

recognition.start();