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
    
    function addvisual(){
        $('.visual_ani').on('mouseenter',function(){
            $(this).find('p').addClass('active');
            $(this).find('figcaption').addClass('active');
        });
    }
    addvisual();
   

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
        function playmedia(){
                var windowWidth = $(window).width();
                if(windowWidth<600){
                    mobh();
                }else{
                    deskh();
                }
        }
        playmedia();

        //ZVR1 시리즈 json 호출
function call(){


    $.ajax({//외부파일 호출 메소드
        url : '../json/spec.json',
        type : 'GET', //POST
        dataType : 'json',
        success :function(data){
            
    var txt,inner,idx;
    
        $(data.event).each(function(i){
          
    
            txt = data.event[i].ptxt;
            txt2 = data.event[i].ptxt2;
            inner="<span><strong>"+txt+"</strong>"+txt2+"</span>"

            $('.specTxt').append(inner);
          idx =i;
         
        });
         
      
        $('.spec').css('height',$('.spec').height())
    
        $('.specTxt span').hide().fadeIn();
        
    
            
        }
       
    });
   
    
};
$( window ).resize( function() {
    $('.spec').css('height','auto');
    $('.specTxt').css('height','auto');
});


//ZVR2 시리즈 json 호출
function call2(){

    $.ajax({//외부파일 호출 메소드
        url : '../json/spec.json',
        type : 'GET', //POST
        dataType : 'json',
        success :function(data){
            
    var txt,inner;
        $(data.event2).each(function(i){
          
    
            txt = data.event2[i].ptxt;
            txt2 = data.event2[i].ptxt2;
            inner="<span><strong>"+txt+"</strong>"+txt2+"</span>"

            $('.specTxt').append(inner);
        });
        $('.spec').css('height',$('.spec').height())
        // $('.specTxt').css('height',$('.specTxt').height());
       
        $('.specTxt span').hide().fadeIn();
        }
    });
};

    function jsonCall(){
        var bln=false;
        $('.btn button').eq(0).on('click',function(e){
            e.preventDefault();
            
            if(bln){
              
                $('.specTxt p').text('CUH-ZVR1 시리즈\n 전체 사양');
                $('.specTxt p').slideUp(0);
                $('.specTxt p').slideDown(500);
              
                
                $('.specTxt').find('span').stop().remove();
                call();
               
               
               
               
                
                bln=false;
            }
            
        });
        $('.btn button').eq(1).on('click',function(e){
            e.preventDefault();
            if(!bln){
                
                $('.specTxt p').text('CUH-ZVR2 시리즈\n 전체 사양');
                $('.specTxt p').slideUp(0);
                $('.specTxt p').slideDown(500);
              
                
                $('.specTxt').find('span').stop().remove(); 
                call2();
                
                
               
                
                bln=true;
            }
        });
    }
    call();
    jsonCall();
})