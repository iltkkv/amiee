
$(function() {
	//chrome
	if (!!window.chrome) $('.load-outer').removeClass('for-ios');
	
	//列表popup
	$(".btn_go_list").on("click",function(){
		//$('html,body').css('overflow-y','hidden');
   		$('.popup-box').fadeIn(300);
   	});

	$(".over-mask,.btn-close").on("click",function(){
		$('html').css('overflow-y','scroll');
   		$('.popup-box').fadeOut(300);
   	});

   	//扭蛋中獎資訊popup
	$(".btn_enter,.btn-close-m,.msg-over-mask").on("click",function(){
		//$('html').css('overflow-y','scroll');
		$('.img-egg-out').hide().removeClass('move');
   		$('.msg').fadeOut(300);
		$('.msg-box').removeClass('after');
   	});
	
	//扭蛋動畫
	$("#btn-turn").on("click",function(){

		//金幣動畫
		$('#btn-turn').hide();
		$('.img-coin').addClass('move');

		//轉軸動畫
		setTimeout(function(){ 	
			$('.turn').addClass('move');
			$('.egg-out').fadeIn();
		}, 500);

		//轉蛋動畫
		setTimeout(function(){
			$('.e_01,.e_02,.e_03,.e_04,.e_05,.e_06,.e_07,.e_08').addClass('move');
		}, 700);


		setTimeout(function(){
			$('.img-egg-out').fadeIn().addClass('move');
		},2000);

		setTimeout(function(){ 	
			//$('html').css('overflow-y','hidden');
   			$('.msg').fadeIn(300);
			$('.msg-box').addClass('after'); 
		}, 3000);

		setTimeout(function(){
			$('.turn,.img-coin,.e_01,.e_02,.e_03,.e_04,.e_05,.e_06,.e_07,.e_08').removeClass('move');
			$('.egg-out').fadeOut();
			$('#btn-turn').show();
		}, 3000);
   	});	
});