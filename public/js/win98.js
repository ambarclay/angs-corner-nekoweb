// VARIABLES
let browserWindow = document.getElementById("browser-window");
let browserMinimizeBtn = document.getElementById("minimizebtn");
let browserCloseBtn = document.getElementById("closebtn");
let browserBottomBtn = document.getElementById("blog-bottom-btn");

let musicPlayerWindow = document.getElementById("music-player");
let playerMinimizeBtn = document.getElementById("minimizebtn2");
let playerCloseBtn = document.getElementById("closebtn2");
let playerBottomBtn = document.getElementById("player-bottom-btn");

let chatWindow = document.getElementById("chat-window");
let chatMinimizeBtn = document.getElementById("minimizebtn3");
let chatCloseBtn = document.getElementById("closebtn3");
let chatBottomBtn = document.getElementById("chat-bottom-btn");

let ieIcon = document.getElementById("internet-explorer");
let cdPlayerIcon = document.getElementById("cd-player");
let chatIcon = document.getElementById("documents-chat");

let startMenu = document.getElementById("start-menu");
let startBtn = document.getElementById("bottom-button-start");

// MINIMIZE
browserMinimizeBtn.addEventListener("click", function () {
  browserWindow.classList.add("minimized");
  browserBottomBtn.classList.remove("pressed");
});

playerMinimizeBtn.addEventListener("click", function () {
  musicPlayerWindow.classList.add("minimized");
  playerBottomBtn.classList.remove("pressed");
});

chatMinimizeBtn.addEventListener("click", function () {
  chatWindow.classList.add("minimized");
  chatBottomBtn.classList.remove("pressed");
});

// MAXIMIZE
browserBottomBtn.addEventListener("click", function () {
  browserWindow.classList.remove("minimized");
  playerBottomBtn.classList.remove("pressed");
  chatBottomBtn.classList.remove("pressed");
  browserBottomBtn.classList.add("pressed");
});

playerBottomBtn.addEventListener("click", function () {
  musicPlayerWindow.classList.remove("minimized");
  browserBottomBtn.classList.remove("pressed");
  chatBottomBtn.classList.remove("pressed");
  playerBottomBtn.classList.add("pressed");
});

chatBottomBtn.addEventListener("click", function () {
  chatWindow.classList.remove("minimized");
  chatBottomBtn.classList.add("pressed");
  playerBottomBtn.classList.remove("pressed");
  browserBottomBtn.classList.remove("pressed");
});

// CLOSE
function pauseTrack() {
  document.getElementById("music").pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<button class="player-button"><img src="/images/win98/play.png" class="controlimg"></button>';
}

browserCloseBtn.addEventListener("click", function () {
  browserWindow.classList.add("display-none");
  browserBottomBtn.classList.add("display-none");
});

playerCloseBtn.addEventListener("click", function () {
  musicPlayerWindow.classList.add("display-none");
  playerBottomBtn.classList.add("display-none");
  pauseTrack();
});

chatCloseBtn.addEventListener("click", function () {
  chatWindow.classList.add("display-none");
  chatBottomBtn.classList.add("display-none");
});

// OPEN
ieIcon.addEventListener("click", function () {
  browserWindow.classList.remove("display-none");
  browserBottomBtn.classList.remove("display-none");

  playerBottomBtn.classList.remove("pressed");
  browserBottomBtn.classList.add("pressed");
  chatBottomBtn.classList.remove("pressed");
});

cdPlayerIcon.addEventListener("click", function () {
  musicPlayerWindow.classList.remove("display-none");
  playerBottomBtn.classList.remove("display-none");

  playerBottomBtn.classList.add("pressed");
  browserBottomBtn.classList.remove("pressed");
  chatBottomBtn.classList.remove("pressed");
});

chatIcon.addEventListener("click", function () {
  chatWindow.classList.remove("display-none");
  chatBottomBtn.classList.remove("display-none");

  chatBottomBtn.classList.add("pressed");
  playerBottomBtn.classList.remove("pressed");
  browserBottomBtn.classList.remove("pressed");
});

// START MENU
startMenu.classList.add("display-none");

startBtn.addEventListener("click", function () {
  if (startMenu.classList.contains("display-none")) {
    startMenu.classList.remove("display-none");
    startBtn.classList.add("pressed");
  } else {
    startMenu.classList.add("display-none");
    startBtn.classList.remove("pressed");
  }
});

// GET TIME
window.addEventListener("load", function () {
  clock();
  function clock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    let timeDisplay = document.getElementById("time");
    timeDisplay.innerHTML = timeString;
    setTimeout(clock, 1000);
  }
});

// document.getElementById("minimizebtn").addEventListener("click", function () {
//   document.getElementById("browser-window").classList.add("minimized");
//   document.getElementById("blog-bottom-btn").classList.remove("pressed");
// });
