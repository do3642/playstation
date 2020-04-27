$(function(){
//start

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




//메인 컨텐츠 json 호출
function call(){

    $.ajax({//외부파일 호출 메소드
        url : 'figure.json',
        type : 'GET', //POST
        dataType : 'json',
        success :function(data){
            
    var imgSrc,txt,inner;
        $(data.subGame).each(function(i){
          
            imgSrc = data.subGame[i].jImg;
            txt = data.subGame[i].jtxt;
            txt2 = data.subGame[i].jtxt2;
            inner="<figure><img src="+imgSrc+"><img src='img/icn_ps4.gif'><figcaption><strong>"+txt+"</strong><small>"+txt2+"</small></figcaption></figure> "

            $('.content .figBox').append(inner);
        });
        
        


        }
    
    
    });
};

//json 함수 호출
call();




//장르 클릭시 밑에 호출
function jang(){

$('.find ul li ul li').on('click',function(e){
    var target = $(e.target).index();
    
    $(this).toggleClass('active');
    $('.find ul > li > span').eq(target).toggleClass('active');
    $('.find ul > li > span > span').eq(target).toggleClass('active');

  


});
$('.find ul li >span>span').on('click',function(e){
    var target=$(e.target).parents().index();
    $(this).removeClass('active');
    $('.find ul > li >span').eq(target).removeClass('active');
    $('.find ul li ul li').eq(target).removeClass('active');

});
};
jang();
//밑에 호출 클릭시 클래스제거

function mobjang(){
    $('.find .mob_jang').on('click',function(){
        $(this).toggleClass('active');
        $('.find .jang').slideToggle();
    });
}
mobjang();





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
function playmedia(){
    var windowWidth = $(window).width();
    if(windowWidth<600){
        mobh();
    }else{
        deskh();
    }
}
playmedia();



    function find(){
        $('.find input').keyup(function(){
            typing = $(this).val().toLowerCase();
            typing2 = $(this).val().toUpperCase();
            $('.figBox figure').hide();
            
            if(typing == "") {
                $('.figBox figure').show();
                
            }
            
            var title = $(".figBox figcaption strong:contains("+ typing + ")")
            var title2 = $(".figBox figcaption strong:contains("+ typing2 + ")")
          
            title.parent().parent().show()
            title2.parent().parent().show()




           
            
        })


        $('.find ul li ul li').on('click',function(){
            $('.figBox figure').hide();
            var jangtxt =$(this).text();
            console.log(jangtxt)
            var title = $(".figBox figcaption:contains("+ jangtxt + ")")
            console.log(title)
            if($(this).hasClass('active')){
                title.parent().show();
            }else{
                $('.figBox figure').show();
            }
            
            
        });
    }
find();



//end
});