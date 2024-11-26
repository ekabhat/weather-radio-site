// Audio Elements
const weatherAudio = document.getElementById('weather-audio');
const lofiAudio = document.getElementById('lofi-audio');

// Play/Pause Button Elements
const playPauseBtn = document.getElementById('play-pause-btn');
const playPauseIcon = document.getElementById('play-pause-icon');
const skipBtn = document.getElementById('skip-btn');


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
    songTitle.textContent = lofiPlaylist[index].title ; // Update the displayed title
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
        playPauseIcon.src = 'images/pauseiconfill.png'; // Change icon to "Pause"
        playPauseIcon.alt = 'Pause';
    } else {
        weatherAudio.pause();
        lofiAudio.pause();
        playPauseIcon.src = 'images/playiconfill.png'; // Change icon to "Play"
        playPauseIcon.alt = 'Play';
    }
    isPlaying = !isPlaying; // Toggle play state
});

skipBtn.addEventListener('click', () => {
    playNextSong(); // Call the playNextSong function
    if (!isPlaying) {
        // If playback isn't active, start playback
        lofiAudio.play();
        weatherAudio.play();
        playPauseIcon.src = 'images/pauseiconfill.png'; // Change icon to "Pause"
        playPauseIcon.alt = 'Pause';
        isPlaying = true; // Update the playback state
    }
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
const clock = document.getElementById('clock');

// Track mouse movement to update `--mouse-x` and `--mouse-y` CSS variables
document.addEventListener('mousemove', (e) => {
    const rect = clock.getBoundingClientRect(); // Get the clock's position
    const x = e.clientX - rect.left; // X position relative to the clock
    const y = e.clientY - rect.top; // Y position relative to the clock

    // Set custom properties for CSS
    clock.style.setProperty('--mouse-x', `${x}px`);
    clock.style.setProperty('--mouse-y', `${y}px`);
});

// Update the clock text dynamically
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}`;
    clock.setAttribute('data-time', `${hours}:${minutes}`); // For chromatic effect
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize on page load




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

// Array of radio channels
const radioChannels = [
    { name: "Phoenix, AZ - KEC94", src: "https://wxradio.org/AZ-Phoenix-KEC94" },
    { name: "Arab, AL - WNG642", src: "https://wxradio.org/AL-ARAB-WNG642" },
    { name: "Mobile, AL - KEC61", src: "https://radio.weatherusa.net/NWR/KEC61_2.mp3" },
    { name: "Payson/Mt. Ord, AZ - WWG41", src: "https://wxradio.org/AZ-PaysonGilaCountyN-WWG41-alt1" },
    { name: "Signal Peak, AZ - WWG42", src: "https://wxradio.org/AZ-Globe-WWG42" },
    { name: "Yuma, AZ - WXL87", src: "https://radio.weatherusa.net/NWR/WXL87.mp3" },
    { name: "Coachella, CA - KIG78", src: "https://radio.weatherusa.net/NWR/KIG78_2.mp3" },
    { name: "Fresno, CA - KIH62", src: "https://radio.weatherusa.net/NWR/KIH62.mp3" },
    { name: "Los Angeles, CA - KWO37", src: "https://wxradio.org/CA-LosAngeles-KWO37" },
    { name: "Monterey Marine, CA - WWF64", src: "https://radio.weatherusa.net/NWR/WWF64.mp3" },
    { name: "Sacramento, CA - KEC57", src: "https://radio.weatherusa.net/NWR/KEC57.mp3" },
    { name: "San Francisco Bay, CA - KEC49", src: "https://radio.weatherusa.net/NWR/KEC49.mp3" },
    { name: "Santa Ana, CA - WWG21", src: "https://radio.weatherusa.net/NWR/WWG21.mp3" },
    { name: "Hartford, CT - WXJ41", src: "https://radio.weatherusa.net/NWR/WXJ41.mp3" },
    { name: "Dover, DE - WXK97", src: "https://radio.weatherusa.net/NWR/WXK97.mp3" },
    { name: "Cape Coral, FL - WXK83", src: "https://radio.weatherusa.net/NWR/WXK83.mp3" },
    { name: "Miami, FL - KHB34", src: "https://radio.weatherusa.net/NWR/KHB34.mp3" },
    { name: "Orlando, FL - KIH63", src: "https://radio.weatherusa.net/NWR/KIH63.mp3" },
    { name: "Princeton, FL - WNG663", src: "https://radio.weatherusa.net/NWR/WNG663.mp3" },
    { name: "Tallahassee, FL - KIH24", src: "https://radio.weatherusa.net/NWR/KIH24.mp3" },
    { name: "Tampa Bay, FL - KHB32", src: "https://radio.weatherusa.net/NWR/KHB32.mp3" },
    { name: "Athens, GA - WXK56", src: "https://radio.weatherusa.net/NWR/WXK56.mp3" },
    { name: "Buchanan, GA - WWH23", src: "https://radio.weatherusa.net/NWR/WWH23.mp3" },
    { name: "Maui, HI - WWG75", src: "https://radio.weatherusa.net/NWR/WWG75.mp3" },
    { name: "Milford, IA - KZZ80", src: "https://radio.weatherusa.net/NWR/KZZ80.mp3" },
    { name: "Sioux City, IA - WXL62", src: "https://radio.weatherusa.net/NWR/WXL62.mp3" },
    { name: "St Ansgar, IA - KXI68", src: "https://radio.weatherusa.net/NWR/KXI68.mp3" },
    { name: "Boise, ID - WXK68", src: "https://radio.weatherusa.net/NWR/WXK68.mp3" },
    { name: "Champaign, IL - WXJ76", src: "https://radio.weatherusa.net/NWR/WXJ76.mp3" },
    { name: "Crystal Lake, IL - KXI41", src: "https://radio.weatherusa.net/NWR/KXI41.mp3" },
    { name: "Dixon, IL - KZZ55", src: "https://radio.weatherusa.net/NWR/KZZ55.mp3" },
    { name: "Galesburg, IL - KZZ66", src: "https://radio.weatherusa.net/NWR/KZZ66.mp3" },
    { name: "Kankakee, IL - KZZ58", src: "https://radio.weatherusa.net/NWR/KZZ58.mp3" },
    { name: "Marion, IL - WXM49", src: "https://radio.weatherusa.net/NWR/WXM49.mp3" },
    { name: "Peoria, IL - WXJ71", src: "https://radio.weatherusa.net/NWR/WXJ71.mp3" },
    { name: "Plano, IL - KXI58", src: "https://radio.weatherusa.net/NWR/KXI58.mp3" },
    { name: "Rockford, IL - KZZ57", src: "https://radio.weatherusa.net/NWR/KZZ57.mp3" },
    { name: "Springfield, IL - WXJ75", src: "https://radio.weatherusa.net/NWR/WXJ75.mp3" },
    { name: "Indianapolis, IN - KEC74", src: "https://radio.weatherusa.net/NWR/KEC74.mp3" },
    { name: "South Bend, IN - WXJ57", src: "https://radio.weatherusa.net/NWR/WXJ57.mp3" },
    { name: "Topeka, KS - WXK91", src: "https://radio.weatherusa.net/NWR/WXK91.mp3" },
    { name: "Frankfort, KY - WZ2523", src: "https://radio.weatherusa.net/NWR/WZ2523.mp3" },
    { name: "Owenton, KY - KZZ48", src: "https://radio.weatherusa.net/NWR/KZZ48.mp3" }]
 


// Select the dropdown and audio element
const channelSelect = document.getElementById("channel-select");
const radioAudio = document.getElementById("weather-audio");

// Populate the dropdown menu
radioChannels.forEach((channel, index) => {
    const option = document.createElement("option");
    option.value = index; // Use the index to identify the channel
    option.textContent = channel.name; // Display the channel name
    channelSelect.appendChild(option);
});

// Function to change the radio channel
function changeChannel(index) {
    const selectedChannel = radioChannels[index];
    if (selectedChannel) {
        radioAudio.src = selectedChannel.src; // Update the audio source
    }

    if (isPlaying) {
        // If playback isn't active, start playback
        lofiAudio.play();
        weatherAudio.play();
        playPauseIcon.src = 'images/pauseiconfill.png'; // Change icon to "Pause"
        playPauseIcon.alt = 'Pause';
        isPlaying = true; // Update the playback state
    }
}

// Listen for selection changes
channelSelect.addEventListener("change", (e) => {
    changeChannel(e.target.value);
});

// Initialize the first channel
changeChannel(0); // Default to the first channel


