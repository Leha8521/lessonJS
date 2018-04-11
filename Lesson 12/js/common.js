$(function() {
 
  function substrateOverlay(event) {
       $('.overlay').fadeIn('slow');
       $('.modal').slideDown(900);
       
   };

   $('.main_btna').on('click', substrateOverlay);
   $('.main_btn').on('click', substrateOverlay);
   $('div.main_nav li:eq(1)').on('click', substrateOverlay);




   $('button.close').on('click', function() {
   	 	$('.modal').slideUp(900);
   	 	$('.overlay').fadeOut('slow');
   	
   });
  
   



});