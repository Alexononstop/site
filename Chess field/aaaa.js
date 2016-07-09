var main = function(){
	$('li').click(function(){
		$(this).toggleClass("active");
	});
	$('li').dblclick(function(){
$(this).fadeOut();
	});
	
}






$(document).ready(main);
