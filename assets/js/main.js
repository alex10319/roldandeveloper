$(function(){


	$('.portfolio__item--img').on('click',function(){
		alt=$(this).find('img').attr("alt");
		src=$(this).find('img').attr("src");

		$('.portfolio__img--show').addClass('portfolio__img--show-active');
		$('.portfolio__img--show').find('div').html(`<img src="${src}" alt="${alt}">`);
	});

	$('.close-portfolio--img').on('click',function(){
		$('.portfolio__img--show').removeClass('portfolio__img--show-active');
		$('.portfolio__img--show').find('div').html("");
	});

	$('.questions__item--title').on('click',function(){
		$(this).next().toggleClass('questions__item--answer-active');
		$(this).find('i').toggleClass('icon-rotate');
		$(this).toggleClass('border-bottom-100');
	});

	$('#form-next').on('click',function(){
		if($('#form-phone').val()==''){
			$('#form-phone').addClass('border-red');
		}
		if($('#form-email').val()==''){
			$('#form-email').addClass('border-red');
		}
		if($('#form-name').val()==''){
			$('#form-name').addClass('border-red');
		}
	});

	$('.form-value').on('click',function(){
		if($(this).hasClass('border-red')){
			$(this).removeClass('border-red');
		}
	});
});


window.addEventListener('load',function(){
    document.querySelector('#loader').classList.toggle('exit-loader');
});