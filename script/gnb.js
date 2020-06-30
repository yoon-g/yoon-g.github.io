$(function(){
	var gnbA =$('#gnb>li');
	var sub = $('#gnb>li>ul');

	var headerMin = $('#headerBox').height()
	var headerMax = sub.innerHeight()+headerMin;

	var state =false;
	var speed =150;

	gnbA.mouseenter(function(){
		if(!state){
			$('#headerBox').stop().animate({height:headerMax},speed,function(){ //변수이기때문에 ''안씀:headerMax
				sub.stop().fadeIn(speed);	
				//stop:.stop() 함수는 현재 동작하는 애니메이션에 대해서만 동작을 중단하기 때문에
			});
			state=true;
		}
		$(this).addClass('on');// li.on {background-color: #fff;color:#000}
		$(this).find(sub).addClass('on');
	});//mouseenter end
	
	//마우스 아웃
	gnbA.mouseleave(function(){
		$(this).removeClass('on');
		$(this).find(sub).removeClass('on');
	});
	//마우스 아웃 주메뉴 벗어날때 페이드 효과와 높이 제어
	$('#gheader').mouseleave(function(){ //부드럽게 올려주는 것
		sub.stop().fadeOut(speed,function(){
			$('#headerBox').stop().animate({height:headerMin},speed)
		});
		state=false;
	});	


});