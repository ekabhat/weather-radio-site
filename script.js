// Audio Elements
const weatherAudio = document.getElementById('weather-audio');
const lofiAudio = document.getElementById('lofi-audio');

// Play/Pause Button Elements
const playPauseBtn = document.getElementById('play-pause-btn');
const playPauseIcon = document.getElementById('play-pause-icon');

// Volume Control Sliders
const weatherVolume = document.getElementById('weather-volume');
const lofiVolume = document.getElementById('lofi-volume');

// Current Song Display
const songTitle = document.getElementById('song-title');

// Lofi Playlist
const lofiPlaylist = [
    { title: "Byakugan Vision - PandaBeats", src: "playlist/Byakugan Vision.mp3" },
    { title: "East Blue Skies - PandaBeats", src: "playlist/East Blue Skies.mp3" },
    { title: "Grand Line - PandaBeats", src: "playlist/Grand Line.mp3" },
    { title: "Spirited Away - PandaBeats", src: "playlist/Spirited Away.mp3" }
];

// Track the current song index
let currentSongIndex = 0;
let isPlaying = false; // Track whether audio is playing

// Load the current song from the playlist
function loadSong(index) {
    lofiAudio.src = lofiPlaylist[index].src; // Set the audio source
    songTitle.textContent = lofiPlaylist[index].title; // Update the displayed title
}

// Play the next song when the current one ends
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % lofiPlaylist.length; // Loop back to the start
    loadSong(currentSongIndex);
    lofiAudio.play();
}

// Attach the 'ended' event listener to play the next song
lofiAudio.addEventListener('ended', playNextSong);

// Initialize the playlist on page load
loadSong(currentSongIndex);

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (!isPlaying) {
        weatherAudio.play();
        lofiAudio.play();
        playPauseIcon.src = 'images/pauseicon.png'; // Change icon to "Pause"
        playPauseIcon.alt = 'Pause';
    } else {
        weatherAudio.pause();
        lofiAudio.pause();
        playPauseIcon.src = 'images/playicon.png'; // Change icon to "Play"
        playPauseIcon.alt = 'Play';
    }
    isPlaying = !isPlaying; // Toggle play state
});

// Adjust volume for weather audio
weatherVolume.addEventListener('input', (e) => {
    weatherAudio.volume = e.target.value;
});

// Adjust volume for lofi audio
lofiVolume.addEventListener('input', (e) => {
    lofiAudio.volume = e.target.value;
});

// Function to update the clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`; // Display time in HH:MM format
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();

// Select all sliders
const sliders = document.querySelectorAll('input[type="range"]');

// Function to update the slider's gradient based on its value
const updateSliderBackground = (slider) => {
    const value = (slider.value / slider.max) * 100; // Calculate percentage
    slider.style.background = `linear-gradient(to right, white ${value}%, rgba(0, 0, 0, 0.2) ${value}%)`; // Update gradient
};

// Attach event listener to dynamically update the background
sliders.forEach(slider => {
    // Initialize background on page load
    updateSliderBackground(slider);

    // Update background dynamically on input (thumb movement)
    slider.addEventListener('input', () => updateSliderBackground(slider));
});
