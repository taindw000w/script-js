$(function(){
		$('#container_info').on('submit', function( event ){
			event.preventDefault();
			let name = $('.text').val();
				text = $('.message').val();			
				if (name.length !== 0 && text.length !==0) {
					$('.text').removeClass('error');
					$('.message').removeClass('error');

					$('li.par').hide();

					$('.left_block').prepend(`

						<div class="left__block__info">
				            <li class="first_message">${name}<img class="image" src="clear-button.png"></li>
				              <img class="list" src="str.png">
				              <div class="border"></div>
				            <li class="second_message">${text}</li> 
			        	</div>
						`);
					name = $('.text').val('');
					text = $('.message').val('');
				}
				else {
					 $('.text').addClass('error');
					 $('.message').addClass('error');
				}
		});
			function deleteComment(block_info) {
				block_info.remove();
			};

			$('body').on('click','.image', function (event){
				event.preventDefault();

				let block_info = $(this).parents('.left__block__info');

				deleteComment(block_info);

				let blocks = $('.left__block__info');

					if (blocks.length == 0) {
						$('li.par').fadeIn(400);
					}

			});	

			$(document).on('click','.list', function() {
				let parent = $(this).closest('.left__block__info');
					parent.find('.second_message').slideToggle()	
			});
});
 	
	