const weatherAudio = document.getElementById('weather-audio');
const lofiAudio = document.getElementById('lofi-audio');

const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const weatherVolume = document.getElementById('weather-volume');
const lofiVolume = document.getElementById('lofi-volume');

// Play and pause functionality for both audio streams
playBtn.addEventListener('click', () => {
    weatherAudio.play();
    lofiAudio.play();
});

pauseBtn.addEventListener('click', () => {
    weatherAudio.pause();
    lofiAudio.pause();
});

// Adjust volume for each audio stream
weatherVolume.addEventListener('input', (e) => {
    weatherAudio.volume = e.target.value;
});

lofiVolume.addEventListener('input', (e) => {
    lofiAudio.volume = e.target.value;
});
