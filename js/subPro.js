$(function(){

    //버거
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
    
    //비쥬얼화면 호버
    function addvisual(){
        $('.visual_ani').on('mouseenter',function(){
            $(this).find('p').addClass('active');
            $(this).find('figcaption').addClass('active');
        });
        var wh =$(window).width();
        if(wh <993){
            $('.visual figure p').addClass('active');
        }
    }
    addvisual();

    //스크롤 이벤트
    function scrollE(){
        var wTop;
        $(window).on('scroll',function(){
            wTop= $(this).scrollTop();
           
            if(wTop > $('.container').offset().top-100){
                $('.bugger').addClass('active2');
            }else{
                $('.bugger').removeClass('active2'); 
            }
            if(wTop > $('.con1').offset().top-400){
                $('.textBox').eq(0).addClass('active');
            }
            if(wTop > $('.con2').offset().top-400){
                $('.textBox').eq(1).addClass('active');
            }
            if(wTop > $('.con3').offset().top-400){
                $('.textBox').eq(2).addClass('active');
            }
            if(wTop > $('.con4').offset().top-400){
                $('.textBox').eq(3).addClass('active');
            }
        //    $('.container >div').each(function(i){
        //     var con= $('.container>div').eq(i).offset().top-400;
        //    });
        //    if(wTop > con){
        //        $('.textBox').eq(i).addClass('active')
        //    }

        })
    }
    scrollE();

    //반응형 js
    function media(){
        var m = window.matchMedia("screen and (max-width: 993px)");
        m.addListener(function(e){
            if(e.matches){
               $('.visual_ani').find('p') .addClass('active');
               $('.visual_ani').find('figcaption') .addClass('active')
            }else{
            }
            });
    }
    media();



    function detail(){
        var src;
      
        $('.detail .detailBox div').hover(function(){//마우스엔터

            $(this).find('p').stop().slideDown(500);
            src= $(this).find('img').attr('src');
            var Idx =src.lastIndexOf('.')-1;
            var i=src.substr(Idx,1);
            var j=i+'_change';
            var re=src.replace(i,j);    
            $(this).find('img').attr('src',re);

        },function(){ //마우스리브

            $(this).find('p').stop().slideUp(500);
            $(this).find('img').attr('src',src);

        })

       
    }

    //json이 호출되고 인식하도록 settime
    setTimeout(function(){
        detail();
    },1000)
    


    //메인 컨텐츠 json 호출
function call(){

    $.ajax({//외부파일 호출 메소드
        url : '../json/detail.json',
        type : 'GET', //POST
        dataType : 'json',
        success :function(data){
            
    var imgSrc,txt,inner;
        $(data.event).each(function(i){
          
            imgSrc = data.event[i].jImg;
            txt = data.event[i].jtxt;
            txt2 = data.event[i].jtxt2;
            inner="<div><span><img src="+imgSrc+"></span><strong>"+txt+"</strong><p>"+txt2+"</p></div> "

            $('.detail .detailBox').append(inner);
        });
        
        


        }
    
    
    });
};
//json 함수 호출
call();



})