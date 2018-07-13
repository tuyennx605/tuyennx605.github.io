//get element
	const player = document.querySelector('.player');

	const video = player.querySelector('.viewer');
	const progress = player.querySelector('.progress');
	const progressbar = player.querySelector('.progress__filled');
	const toggle = player.querySelector('.toggle');					//cai nut play hay ko ay
	const skipButtons = player.querySelectorAll('[data-skip]');
	const ranges = player.querySelectorAll('.player__slider');

////
	function togglePlay(){ //phats hoac dung lai
		if(video.paused)
			video.play();
		else
			video.pause();
	}


	function updateButton(){
		console.log(this);
		if(this.paused==true)
		{
			console.log("thay doi button thanh pause");
			toggle.textContent = "pause";
		}
		else
		{
			toggle.textContent = "play";
			console.log("thay doi button thanh play");
		}
	}

	function skip(){
		// console.log(this.dataset);
		video.currentTime += parseFloat(this.dataset.skip);
	}

	function handleTangeUpadate(){
		console.log(this.value);
		console.log(this.name);

		video[this.name] = this.value;

	}

	function handleProgress(){
		const percent = (video.currentTime/video.duration)*100;
		progressbar.style.width = ""+percent+"%";
		// console.log(progressbar.style.width);
	}

	function scrub(e){
		console.log(e);
		const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
		video.currentTime = scrubTime;
	}

//
	video.addEventListener('click', togglePlay);
	video.addEventListener('play', updateButton);
	video.addEventListener('pause', updateButton);
	video.addEventListener('timeupdate', handleProgress);

	//nut play hay pause
	toggle.addEventListener('click', togglePlay);
	console.log(skipButtons);
	//nut tang nhanh
	skipButtons.forEach(button => button.addEventListener('click', skip));
	//2 thanh keo
	ranges.forEach(range=>range.addEventListener('change', handleTangeUpadate));
	ranges.forEach(range=>range.addEventListener('mousemove', handleTangeUpadate));

	let mousedown = false;
	progress.addEventListener('click', scrub);
	progress.addEventListener('mousemove', (e)=>{
		if(mousedown==true)
			scrub(e);
	});
	progress.addEventListener('mousedown', ()=>mousedown=true);
	progress.addEventListener('mouseup', ()=>mousedown=false);