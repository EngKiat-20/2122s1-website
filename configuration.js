var errorColor;
var arrivalsColor;
var errorDefaultColor = "#ff0000";
var arrivalsDefaultColor = "#00ff00";

window.addEventListener("load", startup, false);
function startup() {
    errorColor = document.querySelector("#errorColor");
    errorColor.value = errorDefaultColor;
    errorColor.addEventListener("input", updateErrorColor, false);
    errorColor.select();
  }

  function updateErrorColor(event) {
    var errorChart = document.querySelector("div#error-rate.chart");
  
    if (errorChart) {
      errorChart.color = event.target.value;
    }
  }