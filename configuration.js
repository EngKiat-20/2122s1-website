var errorColor;
var arrivalsColor;
var errorDefaultColor = "#ff0000";
var arrivalsDefaultColor = "#00ff00";

window.addEventListener("load", startup, false);
function startup() {
    errorColor = document.querySelector("#errorColor");
    errorColor.value = errorDefaultColor;
    errorColor.addEventListener("input", updateFirst, false);
    errorColor.select();
  }

  function updateFirst(event) {
    var x = document.querySelector("div#configuration");
  
    if (x) {
      x.style.color = event.target.value;
    }
  }