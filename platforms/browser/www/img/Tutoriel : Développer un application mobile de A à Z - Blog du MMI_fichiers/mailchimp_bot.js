(function($) {
	$(document).ready(function() {

		$("#subscribe-newsletter-form").submit(function() {

			$.ajax({
			  type: 'POST',
			  dataType: 'json',
			  url: '/wp-content/plugins/mailchimp_bot/mailchimp_bot_controller.php',
			  data: { email: $("#subscribe-newsletter-form input[type='email']").val() },
			  beforeSend:function(){
			    $("#subscribe-newsletter-form .cloud").fadeIn(200);
			    $("#loader-icon").fadeIn(200);

			  },
			  success:function(data){
			    console.log(data);
			    $("#loader-icon").fadeOut(200);

			    $(".message-newsletter").text(data.message);

			    if(data.isError == true) {
			    	$("#subscribe-newsletter-form .cloud").fadeOut(200);
			    }

			    else {
			    	$("#subscribe-newsletter-form div").slideUp(200);
			    	$("#subscribe-newsletter-form input").slideUp(200);
			    }
			  },
			  error:function(){
			    alert('true error');
			    $("#loader-icon").fadeOut(200);
			    $("#subscribe-newsletter-form .cloud").fadeOut(200);
			  }
			});

			return false;

		});

		$(".subscribe-newsletter-form").submit(function() {

			$.ajax({
			  type: 'POST',
			  dataType: 'json',
			  url: '/wp-content/plugins/mailchimp_bot/mailchimp_bot_controller.php',
			  data: { email: $(".subscribe-newsletter-form input[type='email']").val() },
			  beforeSend:function(){
			    $(".subscribe-newsletter-form .cloud").fadeIn(200);
			    $("#loader-icon-sc").fadeIn(200);

			  },
			  success:function(data){
			    console.log(data);
			    $("#loader-icon-sc").fadeOut(200);

			    $(".message-newsletter-sc").text(data.message);

			    if(data.isError == true) {
			    	$(".subscribe-newsletter-form .cloud").fadeOut(200);
			    }

			    else {
			    	$(".subscribe-newsletter-form div").slideUp(200);
			    	$(".subscribe-newsletter-form input").slideUp(200);
			    }
			  },
			  error:function(){
			    alert('true error');
			    $("#loader-icon-sc").fadeOut(200);
			    $(".subscribe-newsletter-form .cloud").fadeOut(200);
			  }
			});

			return false;

		});

	});
})(jQuery);

