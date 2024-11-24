const audio = document.getElementById('custom-audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volumeSlider = document.getElementById('volume-slider');

playBtn.addEventListener('click', () => audio.play());
pauseBtn.addEventListener('click', () => audio.pause());
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});
