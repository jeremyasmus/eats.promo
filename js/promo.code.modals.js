// PROMO CODE MODAL TRIGGERS

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
  if (window.location.href.indexOf('?offer=freshly') > -1) {
    $('#freshlyPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=splendid-spoon') > -1) {
    $('#splendidSpoonPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=purple-carrot') > -1) {
    $('#purpleCarrotPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=gobble') > -1) {
    $('#gobblePromo').modal('show');
  } else if (window.location.href.indexOf('?offer=hellofresh') > -1) {
    $('#helloFreshPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=blue-apron') > -1) {
    $('#blueApronPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=green-chef') > -1) {
    $('#greenChefPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=hungryroot') > -1) {
    $('#hungryrootPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=platejoy') > -1) {
    $('#plateJoyPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=everyplate') > -1) {
    $('#everyPlatePromo').modal('show');
  } else if (window.location.href.indexOf('?offer=postmates') > -1) {
    $('#postmatesPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=marley-spoon') > -1) {
    $('#marleySpoonPromo').modal('show');
  }
});