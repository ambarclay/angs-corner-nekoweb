function switchCSS() {
  let themeLink = document.getElementById("theme-stylesheet");
  let currentTheme = localStorage.getItem("theme") || "/styles/light.css";

  let newTheme = currentTheme === "/styles/light.css" ? "/styles/dark.css" : "/styles/light.css";

  themeLink.setAttribute("href", newTheme);

  localStorage.setItem("theme", newTheme);
}
