$(document).ready(function(){
	var changeClass = function(name){
		$(name + ' .init-left').removeClass('init-left').addClass('done-left');
		$(name + ' .init-right').removeClass('init-right').addClass('done-right');
		$(name + ' .init-top').removeClass('init-top').addClass('done-top');
		$(name + ' .init-bottom').removeClass('init-bottom').addClass('done-bottom');
		$(name + ' .init-scale').removeClass('init-scale').addClass('done-scale');
	}
	var changeActive = function(index){
		$('.active').removeClass('active');
		$('.nav-item').eq(index).addClass('active');
	}
	var setInit = function(){
		$('.done-left').removeClass('done-left').addClass('init-left');
		$('.done-right').removeClass('done-right').addClass('init-right');
		$('.done-top').removeClass('done-top').addClass('init-top');
		$('.done-bottom').removeClass('done-bottom').addClass('init-bottom');
		$('.done-scale').removeClass('done-scale').addClass('init-scale');
	}
	

	$('.nav-item:nth-child(1)').click(function(){
		changeActive($(this).index());
		$("html").animate({scrollTop:0},500);
	})
	$('.nav-item:nth-child(2)').click(function(){
		changeActive($(this).index());
		$("html").animate({scrollTop:'900' + 'px'},500);
	})
	$('.nav-item:nth-child(3)').click(function(){
		changeActive($(this).index());
		$("html").animate({scrollTop:'1800' + 'px'},500);
	})
	$('.nav-item:nth-child(4)').click(function(){
		changeActive($(this).index());
		$("html").animate({scrollTop:'2700' + 'px'},500);
	})
	$('.nav-item:nth-child(5)').click(function(){
		changeActive($(this).index());
		$("html").animate({scrollTop:'4500' + 'px'},500);
	})
	changeActive(0);
	changeClass('.info');
	window.onscroll = function(){
		var Top = $(document.documentElement).scrollTop();
		if(Top >= 0 && Top <=900){
			changeActive(0);
			changeClass('.info');
			if(Top>150 + 250){
				$('.info').animate({
					bottom:Top - (150 + 250) + 'px',
					opacity: 0.7},
					5);
			}
			if(Top === 900)
				setInit();
		}
		if(Top>900 - 200 && Top <=900*2){
			changeActive(1);
			changeClass('.formation');
			if(Top> 900+150+250){
				$('.formation').animate({
				bottom:Top - (900+150+250) + 'px',
				opacity: 0.7},
				5);
			}
			if(Top === 900*2)
				setInit();
			
		}
		if(Top>900*2 - 200 && Top <=900*3){
			changeActive(2);
			changeClass('.experience');
			$('.earth').animate({
				bottom:Top-875*2-150 + 'px',
				opacity: 0.7},
				5);
			if(Top> 1800+150+250){
				$('.experience').animate({
				bottom:Top - (1800+150+250) + 'px',
				opacity: 0.7},
				5);
			}	
			if(Top === 900*3)
				setInit();	
		}
		if(Top>900*3 - 200 && Top <=900*4){
			changeActive(3);
			changeClass('.lang_info');
			if(Top> 2700+150+250){
				$('.lang_info').animate({
				bottom:Top - (2700+150+250) + 'px',
				opacity: 0.7},
				5);
			}
			if(Top === 900*4)
				setInit();
		}
		if(Top>900*4 - 200 && Top <=900*5){
			changeActive(3);
			changeClass('.table');
			if(Top> 3600+150+250){
				$('.table').animate({
				bottom:Top - (3600+150+250) + 'px',
				opacity: 0.7},
				5);
			}
			if(Top === 900*5)
				setInit();
			
		}
		if(Top>900*5 - 200){
			changeActive(4);
			changeClass('.autre');

		}
	};
})