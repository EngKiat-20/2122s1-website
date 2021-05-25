var errorColor;
var arrivalsColor;
var defaultColor = "#ff0000";

window.addEventListener("load", startup, false);
function startup() {
    errorColor = document.querySelector("#errorColor");
    errorColor.value = defaultColor;
    errorColor.addEventListener("input", updateFirst, false);
    errorColor.addEventListener("change", updateAll, false);
    errorColor.select();
  }

  function updateFirst(event) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }
  function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }