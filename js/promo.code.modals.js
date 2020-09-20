// PROMO CODE MODAL TRIGGERS

(function () {

  myHTMLInclude();

  function myHTMLInclude() {
    var z, i, a, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      if (z[i].getAttribute("w3-include-html")) {
        a = z[i].cloneNode(false);
        file = z[i].getAttribute("w3-include-html");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            a.removeAttribute("w3-include-html");
            a.innerHTML = xhttp.responseText;
            z[i].parentNode.replaceChild(a, z[i]);
            myHTMLInclude();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }

})();

function copyPromoCode(elem) {
  var targetElementID = elem.getAttribute("data-target");
  var copyText = document.getElementById(targetElementID);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("promoCodeTooltip");
  tooltip.innerHTML = "Promo copied!";
}

function outFunc() {
  var tooltip = document.getElementById("promoCodeTooltip");
  tooltip.innerHTML = "Copy promo code";
}

$(document).ready(function () {
  if (window.location.href.indexOf('?offer=splendid-spoon') > -1) {
    $('#splendidSpoonPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=purple-carrot') > -1) {
    $('#purpleCarrotPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=freshly') > -1) {
    $('#freshlyPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=gobble') > -1) {
    $('#gobblePromo').modal('show');
  }
});
