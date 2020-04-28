window.addEventListener('DOMContentLoaded',function(){

	//로딩창 디스플레이
	setTimeout(function() {
		$('#loading').addClass('active');
	},8000);

function mobh(){
	var wh =$(window).height();
	$('.scrollEvent').css({
		height:wh
	});
	$('.scrollEvent').eq(3).css({
		height:wh-91
	})
	$('#loading').css({
		height:wh+91
	})
}
function deskh(){

	$('.scrollEvent').css({
		height:'100vh'
	});
	$('.scrollEvent').eq(3).css({
		height:'91.5vh'
	})
}


var main = document.querySelector('#wrap');
var sec = main.querySelector('.visual');
var trd = main.querySelector('.con_gigi');
var five = main.querySelector('.con_game');
var six = main.querySelector('.con_res');
var fix = main.querySelector('.fix');
var p = fix.querySelectorAll('p');





// 모바일 데스크탑 나눠서 실행 하는 법
var m = window.matchMedia("screen and (max-width: 1200px)");

m.addListener(function(e){
if(e.matches){
   $('.figBox figure p video').removeClass('playvideo');
	$(video).get(0).pause();
	$(video).get(1).pause();
	player.pauseVideo();//일시정지
	player2.pauseVideo();//일시정지
	mobh();
}
else{
	deskh();
  $('.figBox figure p video').addClass('playvideo');
  
  
}

});

function stopmedia(){
	var windowWidth = $( window ).width();
if(windowWidth < 1200) {
		$('.figBox figure p video').removeClass('playvideo');
	$(video).get(0).pause();
	$(video).get(1).pause();
	//유튜브 정지는 유튜브js안에
	mobh();
	
	}else{
		$('.figBox figure p video').addClass('playvideo');
		deskh();
	}

}

 






	//좌측하단 dot 클릭시 페이지변경 및 액티브 클래스 추가하여 색 추가

	var visual = main.querySelectorAll('.figBox figure');
	//메인비쥬얼

	var dot = main.querySelectorAll('aside a p');
	//좌측하단 인디케이트
	var video = $('.figBox figure p video');
	var idxs=1;//자동배너 받는값
for(let idx=0;idx<visual.length;idx++){
	dot[idx].addEventListener('click',function(){
		banner();
	});	

	function banner(){
		for(let v=0;v<visual.length;v++){
			visual[v].style.opacity=0;
			visual[v].style.zIndex=-2;
			dot[v].classList.remove('active');
			if($('.figBox p video').hasClass('playvideo')){
				$(video).get(0).pause();
				$(video).get(1).pause();
				player.pauseVideo();//일시정지
				player2.pauseVideo();//일시정지
				
			}
			
			
		};// 포문 종료 모든비쥬얼,dot 투명도0,클래스제거,비디오정지
			
		idxs = idx;
		localStorage.tube=`${idxs}`
			
			if(idx ==0){
				if($('.figBox p video').hasClass('playvideo')){
					$(video).get(0).play();
					
				}
				
				visual[0].style.opacity='1';
				visual[0].style.zIndex='-1';
				dot[0].classList.add('active');
			}else if(idx ==1){
				if($('.figBox p video').hasClass('playvideo')){
					$(video).get(1).play();
					
				}
				visual[1].style.zIndex='-1';
				visual[1].style.opacity='1';
				dot[1].classList.add('active');
			}else if(idx ==2){
				if($('.figBox p video').hasClass('playvideo')){
					player.playVideo();
					
				}
				
				visual[2].style.zIndex='-1';
				visual[2].style.opacity='1';
				dot[2].classList.add('active');
			}
			else if(idx ==3){
				if($('.figBox p video').hasClass('playvideo')){
					player2.playVideo();
					
				}
				visual[3].style.zIndex='-1';
				visual[3].style.opacity='1';
				dot[3].classList.add('active');

			}//이프문 종료 해당비쥬얼 투명도 1 클래스active,비디오재생
	}
};


//위의 인덱스를 받아와서 자동 배너
var video = $('.figBox figure p video');
// var abcd =0;
//유튜브js안에 setTime선언돼있음 
setTime = function() {
	set =setInterval(function(){
	
		for(let v=0;v<visual.length;v++){
			visual[v].style.opacity=0;
			visual[v].style.zIndex='-2';
			dot[v].classList.remove('active');
			
			};
			
		
			visual[idxs].style.opacity='1'; 
			visual[idxs].style.zIndex='-1'; 
			dot[idxs].classList.add('active');

			
			if($('.figBox p video').hasClass('playvideo')){
				

				localStorage.tube=`${idxs}`
				// $(window).on('scroll',function(){
				// 	var a = $(this).scrollTop();
				// 	if(a <=500){
				// 		if(idxs==0){$(video).get(0).play();}
				// 		if(idxs==1){$(video).get(1).play();}
				// 		if(idxs==2){player.playVideo();}
				// 		if(idxs==3){player2.playVideo();}
						
				// 	}
				// });//스크롤이벤트
				abcd = idxs;
				// console.log(abcd);
	
				if(idxs==0){
					$(video).get(0).play();
					
				};if(idxs==1){
					
					$(video).get(1).play();
				};if(idxs==2){
				
						player.playVideo();
		
				
					
				};
				
				if(idxs==3){
				
						player2.playVideo();
				
					
					idxs=-1;
				};
				
			}
			if(idxs==3){
				idxs=-1;
			};
		
			idxs++;



			
},3500);
}
//위에 idx값을 받아서 클릭했을때도 되게끔+setinter를 통한 자동배너
setTime();








var bunzi;
//제이쿼리로 클릭시 스크롤이동
$('.fix p').on('click',function(){
	bunzi = $(this).index()-1;
	var offsetTop =$('.scrollEvent').eq(bunzi).offset().top;

	indi2(bunzi);
	$('html').stop().animate({
		scrollTop:offsetTop
	},500);

});

function indi2(idx){
	$('.fix p').removeClass('active');
		$('.fix p').eq(idx).addClass('active');
		$('.fix div').text(arr[idx]);
}





function wheelmove(){
	var bln=true;
	var move;
	
	$('.scrollEvent').on('mousewheel',function(e){
			var delta = e.originalEvent.wheelDelta;
			var idx =$(this).index();
			
		if(bln){
			bln=false;
			if(delta <0){
	
			// if(num < $('.scrollEvent').length-1){
			// 	num++
			// }// 증가
			if(idx != 3){move = $(this).next().offset().top;
				indi(idx,1);}
			$('.bugger').removeClass('active');
			$('header nav').removeClass('active');
	
			
			
		}
		else{
			$('.bugger').removeClass('active');
			$('header nav').removeClass('active');
			// if(num != 0){
			// 		num--
			// 	}//감소
	
			if(idx != 0){move = $(this).prev().offset().top;
				indi(idx,-1);}
			
			
	
		}//엘스문
		
	
		$('html,body').stop().animate({
			scrollTop:move
		},800,function(){bln=true;
	
		
		});//에니메이트를 통한 부드러운 움직임
	
	}// 블린 종료
	
	
	
	});//휠종료
}
// 마우스 휠 시 스크롤 이동 이벤트 


function indi(e,num){
	$('.fix p').removeClass('active');
		$('.fix p').eq(e+num).addClass('active');
		$('.fix div').text(arr[e+num]);
}


$('.bugger').on('click',function(){
	$(this).toggleClass('active');
	$('header nav').toggleClass('active');
});






  


// 기기class와 top10 클래스 페이지 스크롤시 css변경
		var sTop = 0;
		var arr =['01','02','03','04'];
		
	$(window).on('scroll',function(){
		sTop= $(this).scrollTop();//내가 스크롤하는 페이지의 높이

	$('.scrollEvent').each(function(i){
		var con = $('.scrollEvent').eq(i).offset().top;

		if(con-500< sTop){
			if(i == 1){
				$('.con_gigi figure').css({
					opacity:1,
					transform:'translateY(0)'
				});
			
			}//if문

	
			if(i ==3){
				$('.con_res > button').addClass('active')
				$('footer').addClass('active');
			}else{
				$('.con_res > button').removeClass('active')
				$('footer').removeClass('active');

			}//if문
	}// 큰 이프문 
	});//이치문
	
	});//스크롤이벤트
	
	//기기
	










//Game 페이지 호버시 배경변경
var fivefigure =five.querySelectorAll('div figure');

 for(let t=0;t<fivefigure.length;t++){
fivefigure[t].addEventListener('mouseover',function(){

	if(fivefigure[t]==fivefigure[0]){
		five.style.backgroundImage="url(img/witcher.jpg)";
	}
	else if(fivefigure[t]==fivefigure[1]){
		five.style.backgroundImage="url(img/skyrim.png)"
	}
	else if(fivefigure[t]==fivefigure[2]){
		five.style.backgroundImage="url(img/sekiro2.jpg)"
	}
	else if(fivefigure[t]==fivefigure[3]){
		five.style.backgroundImage="url(img/monster.png)"
	}
	else if(fivefigure[t]==fivefigure[4]){
		five.style.backgroundImage="url(img/fallout2.jpg)"
	}
	else{
		five.style.backgroundImage="url(img/lastofus.jpg)"
	}
});
}


// game 페이지에서 각 figure 호버시 나오는 게임제목

$(function(){
	$('.content .con_game div figure').hover(function(){
	 
	  $(this).find('figcaption').stop().slideDown();
	  $(this).find('figcaption').css({
			  display:'flex'
		  });
	  
	  $(this).on('mouseleave',function(){
		  $(this).find('figcaption').stop().slideUp();
		  
	  });
	});
});

// 사전예약 페이지 스크립트
var resInput =$('.con_res div input');
var resclick=0;
var resBack =$('.con_res .res_back span');

	$(resInput).eq(0).css({
		opacity:0,cursor:'default'
	})

	function res(){

	$(resInput).eq(1).on('click',function(){
	resclick++;
	update()
	nextbtn();
	});//next버튼

	$(resInput).eq(0).on('click',function(){
	resclick--;
	update();
	prevbtn();	
	});//prev버튼

}//함수끝


var resimg = $('.con_res p span img');
var resmain = $('.con_res div p img');

function update(){
	if(resclick >=$(resBack).length-1){
		$(resInput).eq(1).css({
			opacity:0,cursor:'default'
		});//버튼css
		resclick=2;
	}else if(resclick <$(resBack).length-1){
		$(resInput).eq(1).css({
			opacity:.5,cursor:'pointer'
		});//버튼css
	}//이프문 종료
	
	//첫번째 이미지 opacity1 되게끔
	$(resimg).css({
		opacity:.6
	});
	$(resimg).eq(0).css({
		opacity:1
	});


	if(resclick <=0){
		$(resInput).eq(0).css({opacity:0,cursor:'default'});
		resclick=0;
	}else{
		$(resInput).eq(0).css({
			opacity:.5,cursor:'pointer'
		});
	}
	if(resclick==0){
		$(resmain).attr('src','img/last1.jpg');
		$(resimg).eq(0).attr('src','img/last1.jpg');
		$(resimg).eq(1).attr('src','img/lastofus1111.jpg');
		$(resimg).eq(2).attr('src','img/lastofus3.jpg');
		$(resimg).eq(3).attr('src','img/lastofus4.jpg');
	}//이프문 종료

	if(resclick == 1){
		$(resmain).attr('src','img/resghost1.jpg');
		$(resimg).eq(0).attr('src','img/resghost1.jpg');
		$(resimg).eq(1).attr('src','img/resghost2.png');
		$(resimg).eq(2).attr('src','img/resghost3.png');
		$(resimg).eq(3).attr('src','img/resghost4.jpg');
	}//이프문 종료

	if(resclick == 2){
		$(resmain).attr('src','img/ironvr1.png');
		$(resimg).eq(0).attr('src','img/ironvr1.png');
		$(resimg).eq(1).attr('src','img/ironvr2.png');
		$(resimg).eq(2).attr('src','img/ironvr3.jpg');
		$(resimg).eq(3).attr('src','img/ironvr4.jpg');
	}
}

function nextbtn(){
	$(resBack).eq(resclick).css({
	left:0,zIndex:-1
	});//넥스트시 css
	$(resBack).eq(resclick-1).css({
	left:'-100%',zIndex:-2
	});//넥스트css
} //넥스트 함수끝

//prev함수 시작
 function prevbtn(){
	$(resBack).eq(resclick).css({
		left:0,zIndex:-1
		});//prevcss
		$(resBack).eq(resclick+1).css({
			left:'100%',zIndex:-2
			});//prevcss
}//prev함수끝

$(resimg).eq(0).css({
	opacity:1
});
	 res(); 

	 //con_res 아래이미지  클릭시 main src 변경
	 $(resimg).on('click',function(){
		var src =$(this).attr('src');
		$(resmain).attr('src',src);
		$(resimg).css({
			opacity:.6
		});
		
		$(this).css({
			opacity:1
		});
		
	
	 });


	
	 stopmedia();
	 wheelmove();
	
});