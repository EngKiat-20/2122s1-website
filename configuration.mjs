import {charts} from './scripts/modules/charts.mjs';
var errorColor;
var errorDefaultColor = "#ff0000";
var arrivalsColor;
var arrivalsDefaultColor = "#00ff00";

window.addEventListener("load", startup, false);
function startup() {
    errorColor = document.querySelector("#errorColor");
    errorColor.value = errorDefaultColor;
    errorColor.addEventListener("input", setErrorColor, false);
    errorColor.addEventListener("change", updateErrorColor, false);
    errorColor.select();
  }

  function setErrorColor(event) {
    var errorChart = charts.errorRate.options.colors[0];
    
    console.log(errorChart)
    if (errorChart) {
      errorChart = event.target.value;
    }
  }