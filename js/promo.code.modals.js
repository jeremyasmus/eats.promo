// PROMO CODE MODAL TRIGGERS

$(function(){
  $("#homepagePromoCodeModals").load("../includes/homepage-promo-code-modals.html"); 
});

function copyPromoCode(elem) {
  var targetElementID = elem.getAttribute("data-target");
  var copyText = document.getElementById(targetElementID);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  //var copyText = document.getElementById("promoCode");
  //copyText.select();
  //copyText.setSelectionRange(0, 99999);
  //document.execCommand("copy");
  
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
  }
});