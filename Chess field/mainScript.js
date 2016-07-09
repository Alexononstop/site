var fun = function(){

}
$(document).ready(function(){
$('li').click(function(){
		$(this).toggleClass("pewkab");
});
$('.play').click(function()
{
	if ($('li').hasClass("pewkab")) 
	{
	$('li').removeClass("pewkab");
	}
	$('li').each(function(i,elem){
	 if (i>47 && i<64) 
		{
		$(this).addClass("pewkab").delay(1000);
		}
});
	$('li').each(function(i,elem){
	 if (i>-1 && i<16) 
		{
		$(this).addClass("pewkaw").delay(1000);
		}
});



});














});




		