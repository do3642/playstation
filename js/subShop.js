$(function(){

function mobh(){
    var wh =$(window).height();
        $('#wrap .visual').css({
            height:wh
        });
}

function deskh(){
	$('#wrap .visual').css({
		height:'60vh'
	});
}

$( window ).resize(function(){
    var ww=$(window).width();
    if(ww < 600){
        $('.jang').slideUp();
    }else{
        $('.jang').slideDown();
    }
});



//비쥬얼 진입시 클래스 추가
function addvisual(){
    $('.visual_ani').on('mouseenter',function(){
        $(this).find('p').addClass('active');
        $(this).find('figcaption').addClass('active');
    });
}
addvisual()





//버거메뉴 색변경 및 네비 토클 
function bugger(){
    $('.bugger').on('click',function(){
        $(this).toggleClass('active')
        $('nav').toggleClass('active')
    });
    
    
    $(window).on('mousewheel',function(e){
        $('.bugger').removeClass('active')
        $('nav').removeClass('active')
    
    });
}
bugger();

//버거메뉴 스크롤시 색변경클래스
//우측 스파이더맨 트랜스폼클래스


function scrollani(){
    var myTop;
    $(window).on('scroll',function(){
        var contop =$('.container').offset().top;
        myTop= $(this).scrollTop();
        if(contop<myTop+200){
         $('.bugger').addClass('active2');
      
        
        }else{
            $('.bugger').removeClass('active2');
           
        }
        
    });
}
scrollani();

function media(){
    var m = window.matchMedia("screen and (max-width: 1200px)");
    
    var visualM = window.matchMedia("screen and (max-width:600px");

visualM.addListener(function(e){
    if(e.matches){
        mobh();
        
    }else{
        deskh();
    }
});

m.addListener(function(e){
if(e.matches){
    $('.visual_ani').find('p') .addClass('active');
    $('.visual_ani').find('figcaption') .addClass('active')
    
    
}else{
    
}
});



    var windowWidth = $( window ).width();
    if(windowWidth < 1200) {
    $('.visual_ani').find('p') .addClass('active');
    $('.visual_ani').find('figcaption') .addClass('active')
    
    }
    
  
   

   

}
media();

});