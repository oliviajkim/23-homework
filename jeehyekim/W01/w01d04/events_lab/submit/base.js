console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

	$( "form" ).submit(function( event ) {
 		 event.preventDefault();
});
});