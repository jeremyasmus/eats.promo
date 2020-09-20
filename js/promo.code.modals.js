// PROMO CODE MODAL TRIGGERS

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function copyPromoCode(elem) {
  var targetElementID = elem.getAttribute("data-target");
  var copyText = document.getElementById(targetElementID);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("promoCodeTooltip");
  tooltip.innerHTML =  "Promo copied!";
}

function outFunc() {
  var tooltip = document.getElementById("promoCodeTooltip");
  tooltip.innerHTML = "Copy promo code";
}

$(document).ready(function() {
  if (window.location.href.indexOf('?offer=pipcorn') > -1) {
    $('#pipcornPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=splendid-spoon') > -1) { 
	$('#splendidSpoonPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=purple-carrot') > -1) { 
	$('#purpleCarrotPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=freshly') > -1) { 
	$('#freshlyPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=gobble') > -1) { 
	$('#gobblePromo').modal('show');
  }
});