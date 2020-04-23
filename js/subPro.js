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
            $(this).find('p').slideDown(500);
            src= $(this).find('img').attr('src');
           
            var Idx =src.lastIndexOf('.')-1;
            var i=src.substr(Idx,1);
            var j=i+'_change';
            var re=src.replace(i,j);
            $(this).find('img').attr('src',re);
           
            
        },function(){ //마우스리브
            $(this).find('p').slideUp(500);
            $(this).find('img').attr('src',src);
        })
    }
    detail();

})