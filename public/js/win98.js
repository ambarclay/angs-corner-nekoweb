// MINIMIZE AND MAXIMIZE
document.getElementById("minimizebtn").addEventListener("click", function () {
  document.getElementById("browser-window").classList.add("minimized");
  document.getElementById("blog-bottom-btn").classList.remove("pressed");
});

document.getElementById("minimizebtn2").addEventListener("click", function () {
  document.getElementById("music-player").classList.add("minimized");
  document.getElementById("player-bottom-btn").classList.remove("pressed");
});

document.getElementById("blog-bottom-btn").addEventListener("click", function () {
  document.getElementById("browser-window").classList.remove("minimized");
  document.getElementById("player-bottom-btn").classList.remove("pressed");
  document.getElementById("blog-bottom-btn").classList.add("pressed");
});

document.getElementById("player-bottom-btn").addEventListener("click", function () {
  document.getElementById("music-player").classList.remove("minimized");
  document.getElementById("blog-bottom-btn").classList.remove("pressed");
  document.getElementById("player-bottom-btn").classList.add("pressed");
});

// CLOSE
function pauseTrack() {
  document.getElementById("music").pause();
  isPlaying = false;

  // replace icon with the play icon
  playpause_btn.innerHTML = '<button class="player-button"><img src="/images/win98/play.png" class="controlimg"></button>';
}

document.getElementById("closebtn").addEventListener("click", function () {
  document.getElementById("browser-window").classList.add("display-none");
  document.getElementById("blog-bottom-btn").classList.add("display-none");
});

document.getElementById("internet-explorer").addEventListener("click", function () {
  document.getElementById("browser-window").classList.remove("display-none");
  document.getElementById("blog-bottom-btn").classList.remove("display-none");

  document.getElementById("player-bottom-btn").classList.remove("pressed");
  document.getElementById("blog-bottom-btn").classList.add("pressed");
});

document.getElementById("closebtn2").addEventListener("click", function () {
  document.getElementById("music-player").classList.add("display-none");
  document.getElementById("player-bottom-btn").classList.add("display-none");
  pauseTrack();
});

document.getElementById("cd-player").addEventListener("click", function () {
  document.getElementById("music-player").classList.remove("display-none");
  document.getElementById("player-bottom-btn").classList.remove("display-none");

  document.getElementById("player-bottom-btn").classList.add("pressed");
  document.getElementById("blog-bottom-btn").classList.remove("pressed");
});

// START MENU
document.getElementById("start-menu").classList.add("display-none");

document.getElementById("bottom-button-start").addEventListener("click", function () {
  if (document.getElementById("start-menu").classList.contains("display-none")) {
    document.getElementById("start-menu").classList.remove("display-none");
    document.getElementById("bottom-button-start").classList.add("pressed");
  } else {
    document.getElementById("start-menu").classList.add("display-none");
    document.getElementById("bottom-button-start").classList.remove("pressed");
  }
});
