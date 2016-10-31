$(function(){
	$('nav').on("click", "a", function(e){
		var action = event.target.dataset.action;
		$.ajax('/api?action={0}'.replace('{0}', action))
			.done(function(data){
				$('.main-content').html(data);
				$('body').addClass('active');

			})
			.fail(function(){

			});
			e.preventDefault();
	});
});

