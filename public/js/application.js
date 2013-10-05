

function homeCarousel() {
	$('#backstretch').backstretch([
      "./images/Andrew_AAred.jpg"
    , "./images/brown1.JPG"
    , "./images/brown2.JPG"
  ], {duration: 5000, fade: 1000});
}

function contentView() {

	$(".link").on('mouseover', function(){
		$(".link").css('font-weight', 'normal');
		$(this).css('font-weight', 'bold');
		$(".container").hide();
		var linkToShow = $(this).attr('href');
		$(linkToShow).show();
	})
}


$(document).ready(function() {

		$(".container").hide();
	  homeCarousel();
	  contentView();
})