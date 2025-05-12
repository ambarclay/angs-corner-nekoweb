(function () {
  let savedTheme = localStorage.getItem("theme") || "/styles/light.css";
  document.write(`<link id="theme-stylesheet" rel="stylesheet" type="text/css" media="all" href="${savedTheme}">`);
})();

function showMobileNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function about() {
  let about = document.getElementById("about");
  let home = document.getElementById("home");

  home.style.display = "none";
  about.style.display = "block";
}

function home() {
  let about = document.getElementById("about");
  let home = document.getElementById("home");

  home.style.display = "block";
  about.style.display = "none";
}

function aboutTest() {
  let about = document.getElementById("about");
  let home = document.getElementById("home");

  home.style.display = "none";
  about.style.display = "block";
  $("#about").load("/about-test.html");
}

function homeTest() {
  let about = document.getElementById("about");
  let home = document.getElementById("home");

  home.style.display = "block";
  about.style.display = "none";
}
