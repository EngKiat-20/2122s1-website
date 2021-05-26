import {charts} from './scripts/modules/charts.mjs';
import {DEFAULTS} from './scripts/commons.mjs'
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
    if (charts.errorRate.options.colors[0]) {
      charts.errorRate.options.colors[0] = event.target.value;
    }
  }

  function setArrivalsColor(event) {
    if (charts.arrivalRate.options.colors[0]) {
      charts.arrivalRate.options.colors[0] = event.target.value;
    }
  }

document.getElementById("refreshRate").addEventListener("input", setRefreshRate);
document.getElementById("duration").addEventListener("input", setDuration);
document.getElementById("bucketSize").addEventListener("input", setBucketSize);

  function setRefreshRate() {
    var newRefreshRate = document.getElementById("refreshRate").value;
    newRefreshRate = parseInt(newRefreshRate);
    DEFAULTS.refreshRate = newRefreshRate
    console.log(DEFAULTS.refreshRate)
  }

  function setDuration() {
    var newDuration = document.getElementById("duration").value;
    newDuration = parseInt(newDuration);
    DEFAULTS.duration = newDuration
    console.log(DEFAULTS.duration)
  }

  function setBucketSize() {
    var newBucketSize = document.getElementById("bucketSize").value;
    newBucketSize = parseInt(newBucketSize);
    DEFAULTS.bucketSize = newBucketSize
    console.log(DEFAULTS.bucketSize)
  }

  