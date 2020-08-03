$(function() {
    //scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var navH = $('.nav').height();
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - navH
        }, 800);
        return false;
        }
        }
    });
	$('.btn_enter > img,.title').fadeIn();

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 60) {
            $('.map > img').css("opacity","0.4");
            $('.top_bar').css('opacity','0.95');
            $('.gotop , .left_menu ,.head ,.bear_04').addClass('scrool-action');
        } else {
            $('.map > img').css("opacity","0.0");
            $('.top_bar').css('opacity','1.0');
            $('.gotop , .left_menu , .head ,.bear_04').removeClass('scrool-action');
        }
    });
	
	$(window).resize(function() {
        var wdth=$(window).width();
		if ( wdth < 768) {
            $('.bear_01 > img').attr("src", "img/m_bear_01.png");
			$('.bear_02 > img').attr("src", "img/m_bear_02.png");
			$('.bear_03 > img').attr('src','img/m_buddy.png');
            $('.head > img').attr('src','img/m_bear_head.png');
        } else {
			$('.bear_01 > img').attr("src", "img/bear_01.png");
			$('.bear_02 > img').attr("src", "img/bear_02.png");
			$('.bear_03 > img').attr('src','img/buddy.png');
            $('.head > img').attr('src','img/bear_head.png');
        }
        var wdth=$(window).width();
        if ( wdth < 770) {
            $('.map > img').attr('src','img/m_foot.gif');
          
        } else {
            $('.map > img').attr('src','img/foot.gif');
    }
		
    });
	var wdth=$(window).width();
		if ( wdth < 768) {
            $('.bear_01 > img').attr("src", "img/m_bear_01.png");
			$('.bear_02 > img').attr("src", "img/m_bear_02.png");
			$('.bear_03 > img').attr('src','img/m_buddy.png');
            $('.map > img').attr('src','img/m_foot.gif');
            $('.head > img').attr('src','img/m_bear_head.png');
          
        } else {
			$('.bear_01 > img').attr("src", "img/bear_01.png");
			$('.bear_02 > img').attr("src", "img/bear_02.png");
			$('.bear_03 > img').attr('src','img/buddy.png');
            $('.map > img').attr('src','img/foot.gif');
            $('.head > img').attr('src','img/bear_head.png');
    }
        if ( wdth < 770) {
            $('.map > img').attr('src','img/m_foot.gif');
          
        } else {
            $('.map > img').attr('src','img/foot.gif');
    }
	
    //event
    $('.event > div > div.btn_more').click(function(){
       $('.cont').fadeOut(300).removeClass('now');
       $(this).next().fadeIn(300).addClass('now');
    });

    $('.cont').click(function(){
        $(this).fadeOut(300).removeClass('now');
    });
	
	$('.event_01').click(function(){
		$('.event > div.text_01').addClass('now');
	});
	$('.event_02').click(function(){
		$('.event > div.text_02').addClass('now');
	});
	$('.event_03').click(function(){
		$('.event > div.text_03').addClass('now');
	});
	$('.event_04').click(function(){
		$('.event > div.text_04').addClass('now');
	});
	$('.btn_close').click(function(){
		$('.event > div').removeClass('now');
	});

    //pop
    $('.btn_map').click(function(){
        $('.mask,.img_map').fadeIn();
        $('.img_map').scrollTop(0);
        $('html').css('overflow-y','hidden');
    });
    $('.btn_close').click(function(){
        $('.mask,.img_map').fadeOut();
        $('html').css('overflow-y','scroll');
    });

})


