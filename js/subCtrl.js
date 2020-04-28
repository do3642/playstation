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


    function pop(){
        $('.con1Sub span button').on('click',function(){
            $('.colorPop').addClass('active');
        });
        $('.colorPop button').on('click',function(){
            $('.colorPop').removeClass('active');
        });
    }
    pop()


    function changePage(){
        $('.sub_menu li').eq(0).on('click',function(){
            $('.con2').slideUp();
            $('.con3').slideUp();
            $('.con1').slideDown();
            $('.con1Sub video').trigger('play'); 
            $('.sub_menu li a').removeClass('active')
            $(this).find('a').addClass('active')
        });
        $('.sub_menu li').eq(1).on('click',function(){
            $('.con3').slideUp();
            $('.con1').slideUp();
            $('.con2').slideDown();
            $('.con1Sub video').trigger('pause'); 

            $('.sub_menu li a').removeClass('active')
            $(this).find('a').addClass('active')
           
        });
        $('.sub_menu li').eq(2).on('click',function(){
            
            $('.con1').slideUp();
            $('.con2').slideUp();
            $('.con3').slideDown();
            $('.con1Sub video').trigger('pause'); 
            $('.sub_menu li a').removeClass('active')
            $(this).find('a').addClass('active')

        });

      
    }
    changePage();

    function top(){
        var myTop;
        var wh=$(window).height();
        var offsetTop;
        $(window).on('scroll',function(){
            myTop=$(this).scrollTop();
            $('.top').css('top',wh+myTop-200);

            if(myTop >$('.container').offset().top){
                $('.top').css('transform','scale(1)')
                $('.visual video').trigger('pause');
            }else{
                $('.top').css('transform','scale(0)')
                $('.visual video').trigger('play');

            }
        });
        $('.top').on('click',function(){
            offsetTop=$('#wrap').offset().top;
            $('html').stop().animate({
                scrollTop:offsetTop
            },500);
        })
    }
    top();

    
})