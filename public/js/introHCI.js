'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(likeClicked);
}

function likeClicked(e){
	e.preventDefault();
	console.log("Like button clicked")
	ga("send", "event", "like", "click");
}
