import {charts} from './scripts/modules/charts.mjs';
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
    var errorChart = charts;
  
    console.log(errorChart)
    /*if (errorChart) {
      errorRate.options.colors[0] = event.target.value;
    }*/
  }