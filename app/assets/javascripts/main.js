$(document).ready(function(){	

    // loading transition effect
	$(".search-glass").click(function(event){

		$("#welcome-message").hide();
		$(".loader").show();

	});


	
	// nav
	$("nav[role='static']").click(				
		function(){
			
			// display
			$("#page-overlay, nav[role='active']").show();							
		                      
		        // toggle between login / register
		        $("#login-register").on('click', '.static-color', function() {
		            $('.active-color, .static-color').toggleClass("active-color static-color");
		            $("#login, #register").toggle();
		        });

			// hide
			$("#page-overlay").click(function() {
				$("nav[role='active'], #page-overlay").hide();
			});		

		}						
	);


	// continue reading (homepage)
	$(".underline-hover").click(				
		function(){
			$(".grey-text").hide();
			$("#continue-reading").show();

		}						
	);

		
	// search
	$(function () {
	    $('.search-form').on('keyup input', function () {

	        var length = this.value.length;
	        
	        if (length >= 20) {
	            $(this).css("width", "450px");

	            // reset
	            if (length <= 20) {
	            	$(this).css({"width":""});
	            }
	        }
	    });

});
});		