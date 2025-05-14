// LOAD THEME
(function () {
  let savedTheme = localStorage.getItem("theme") || "/styles/light.css";
  document.write(`<link id="theme-stylesheet" rel="stylesheet" type="text/css" media="all" href="${savedTheme}">`);
})();

//TOGGLE MOBILE NAVIGATION BAR
function toggleMobileNav() {
  let myLinks = document.getElementById("myLinks");

  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}

//PAGE SELECT/ SWITCHER
function aboutSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "block";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#about").load("about-test.html");
}

function busSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "block";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#bus").load("bus-test.html");
}

function camerasSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "block";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#cameras").load("cameras-test.html");
}

function collectionsSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "block";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#collections").load("collections-test.html");
}

function homeSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "block";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";
}

function resourcesSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "block";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#resources").load("resources-test.html");
}

function shrinesSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "block";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#shrines").load("shrines-test.html");
}

function shrinesSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "block";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#shrines").load("shrines-test.html");
}

function stwabewwySwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "block";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#stwabewwy").load("stwabewwy-test.html");
}

function blinkiesSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "block";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#blinkies").load("/collections/blinkies-test.html");
}

function buttonsSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "block";
  gifs.style.display = "none";
  stamps.style.display = "none";

  $("#buttons").load("/collections/buttons-test.html");
}

function gifsSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "block";
  stamps.style.display = "none";

  $("#gifs").load("/collections/gifs-test.html");
}

function stampsSwitch() {
  let about = document.getElementById("about");
  let bus = document.getElementById("bus");
  let cameras = document.getElementById("cameras");
  let collections = document.getElementById("collections");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");
  let shrines = document.getElementById("shrines");
  let stwabewwy = document.getElementById("stwabewwy");

  let blinkies = document.getElementById("blinkies");
  let buttons = document.getElementById("buttons");
  let gifs = document.getElementById("gifs");
  let stamps = document.getElementById("stamps");

  about.style.display = "none";
  bus.style.display = "none";
  cameras.style.display = "none";
  collections.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";
  shrines.style.display = "none";
  stwabewwy.style.display = "none";

  blinkies.style.display = "none";
  buttons.style.display = "none";
  gifs.style.display = "none";
  stamps.style.display = "block";

  $("#stamps").load("/collections/stamps-test.html");
}
