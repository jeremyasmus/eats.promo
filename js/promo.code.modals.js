// PROMO CODE MODAL TRIGGERS

function copyPromoCode() {
  var copyText = document.getElementsByClassName('modal-promo-code-input');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  var tooltip = document.getElementsByClassName('promo-code-copy-button');
  tooltip.innerHTML =  "Promo copied!";
}

function outFunc() {
  var tooltip = document.getElementsByClassName('promo-code-copy-button');
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
  }
});