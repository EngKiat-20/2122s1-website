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
    errorColor.select();

    arrivalsColor = document.querySelector("#arrivalsColor");
    arrivalsColor.value = arrivalsDefaultColor;
    arrivalsColor.addEventListener("input", setArrivalsColor, false);
    arrivalsColor.select();
  }

  function setErrorColor(event) {
    var errorChart = charts.errorRate.options.colors[0];
    
    console.log(errorChart)
    if (errorChart) {
      errorChart = event.target.value;
    }
  }

  function setArrivalsColor(event) {
    var arrivalsChart = charts.arrivalRate.options.colors[0];
    
    console.log(arrivalsChart)
    if (arrivalsChart) {
      arrivalsChart = event.target.value;
    }
  }