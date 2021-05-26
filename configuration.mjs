import {charts} from './scripts/modules/charts.mjs';
import {DEFAULTS} from './scripts/commons.mjs'
var errorColor;
var errorDefaultColor = "#ff0000";
var arrivalsColor;
var arrivalsDefaultColor = "#00ff00";
var waitingColor;
var waitingDefaultColor = "#008000";

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

    waitingColor = document.querySelector("#waitingColor");
    waitingColor.value = waitingDefaultColor;
    waitingColor.addEventListener("input", setWaitingColor, false);
    waitingColor.select();
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

  function setWaitingColor(event) {
    var panelArray = document.getElementsByClassName("panel")
      panelArray[0].style.backgroundColor = event.target.value
      panelArray[1].style.backgroundColor = event.target.value
      panelArray[2].style.backgroundColor = event.target.value
      panelArray[3].style.backgroundColor = event.target.value
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

function hide() {
  var showButton = document.getElementById('showButton');
  var hideButton = document.getElementById('hideButton');
  var configTabs = document.getElementById('config-tabs');
  showButton.style.display = 'inline';
  hideButton.style.display = 'none'
  configTabs.style.display = 'none';

}

function show() {
  var showButton = document.getElementById('showButton');
  var hideButton = document.getElementById('hideButton');
  var configTabs = document.getElementById('config-tabs');
  showButton.style.display = 'none';
  hideButton.style.display = 'inline';
  configTabs.style.display = 'inline-block';
}

document.getElementById("showButton").addEventListener("click", show);
document.getElementById("hideButton").addEventListener("click", hide);