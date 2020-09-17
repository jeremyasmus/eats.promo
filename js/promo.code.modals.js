// PROMO CODE MODAL TRIGGERS

$(document).ready(function() {
  if (window.location.href.indexOf('?offer=pipcorn') > -1) {
    $('#pipcornPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=platejoy') > -1) { 
	$('#platejoyPromo').modal('show');
  }
});