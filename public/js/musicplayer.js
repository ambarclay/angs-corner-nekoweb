// initiate variables
let track_name = document.querySelector(".songtitle");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// create new audio element
let curr_track = document.getElementById("music");

//
// DEFINE YOUR SONGS HERE!!!!!
// MORE THAN FOUR SONGS CAN BE ADDED!!
// JUST ADD ANOTHER BRACKET WITH NAME AND PATH
// CATBOX.MOE IS RECOMMENDED FOR UPLOADING MP3 FILES
let track_list = [
  {
    name: "Slow Moon - Streets of Rage 2 OST",
    path: "https://files.catbox.moe/nkfoek.mp3",
  },
  {
    name: "It Means Everything - OMORI OST",
    path: "https://files.catbox.moe/nak2ki.mp3",
  },
  {
    name: "Song of the Ancients - Nier Replicant",
    path: "https://files.catbox.moe/dmi5nq.mp3",
  },
  {
    name: "Beneath the Mask (Instrumental) - Persona 5 OST",
    path: "https://files.catbox.moe/ax9w8r.mp3",
  },
  {
    name: "Snowy - Undertale OST",
    path: "https://files.catbox.moe/b35nlk.mp3",
  },
  {
    name: "Casino Night Zone - Sonic the Hedgehog 2 OST",
    path: "https://files.catbox.moe/baf7gn.mp3",
  },
  {
    name: "Dreamer - Streets of Rage 2 OST",
    path: "https://files.catbox.moe/1lww7h.mp3",
  },
  {
    name: "Iwatodai Dorm -Reload- - Persona 3 Reload OST",
    path: "https://files.catbox.moe/o5x7n0.mp3",
  },
  {
    name: "Sanctuary Guardians - Earthbound OST",
    path: "https://files.catbox.moe/ekla59.mp3",
  },
  {
    name: "Amusement Park - Nier: Autumata OST",
    path: "https://files.catbox.moe/u4mp88.mp3",
  },
  {
    name: "See In Your Fantasy - OMORI OST",
    path: "https://files.catbox.moe/vimay3.mp3",
  },
  {
    name: "The Days When My Mother Was There - Persona 5 OST",
    path: "https://files.catbox.moe/enfpqt.mp3",
  },
  {
    name: "Fallen Down - Undertale OST",
    path: "https://files.catbox.moe/aew4sx.mp3",
  },
  {
    name: "When the Moon's Reaching Out Stars -Reload- - Persona 3 Reload OST",
    path: "https://files.catbox.moe/4ygsrp.mp3",
  },
  {
    name: "Snow in Summer - Nier Replicant OST",
    path: "https://files.catbox.moe/qnm2as.mp3",
  },
];

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  // load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  // update details of the track
  track_name.textContent = "playing " + (track_index + 1) + " of " + track_list.length + ": " + track_list[track_index].name;

  // set an interval of 1000 milliseconds for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // move to the next track if the current one finishes playing
  curr_track.addEventListener("ended", nextTrack);
}

// reset values
function resetValues() {
  curr_time.textContent = "0:00";
  total_duration.textContent = "0:00";
  seek_slider.value = 0;
}

// checks if song is playing
function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

// plays track when play button is pressed
function playTrack() {
  curr_track.play();
  isPlaying = true;

  // replace icon with the pause icon
  playpause_btn.innerHTML = '<button class="player-button"><img src="/images/win98/pause.png" class="controlimg"></i></button>';
}

// pauses track when pause button is pressed
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;

  // replace icon with the play icon
  playpause_btn.innerHTML = '<button class="player-button"><img src="/images/win98/play.png" class="controlimg"></button>';
}

// moves to the next track
function nextTrack() {
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

// moves to the previous track
function prevTrack() {
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

// seeker slider
function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function seekUpdate() {
  let seekPosition = 0;

  // check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // adding a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// load the first track in the tracklist
loadTrack(track_index);
