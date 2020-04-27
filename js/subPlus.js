$(function(){

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

    function addvisual(){
        $('.visual_ani').on('mouseenter',function(){
            $(this).find('p').addClass('active');
            $(this).find('figcaption').addClass('active');
        });
        var wh =$(window).width();
        if(wh <993){
            $('.visual figure figcaption').addClass('active');
        }
    }
    addvisual();


  


    
    function scrollE(){
        var wTop;
        $(window).on('scroll',function(){
            wTop= $(this).scrollTop();
            var ticketS= $('.ticket').offset().top;
            if(wTop>ticketS-800){
                $('.ticket figure').eq(0).find('figcaption').addClass('active');
                $('.ticket figure').eq(1).find('figcaption').slideDown(1000);
                $('.ticket figure').eq(2).find('figcaption').slideDown(1500);
                $('.ticket figure').eq(3).find('figcaption').slideDown(2000);
            }
            if(wTop > $('.container').offset().top-100){
                $('.bugger').addClass('active2');
            }else{
                $('.bugger').removeClass('active2'); 
            }
            
        })
    }
    scrollE();

    function trans(){
        var idx=0;
        $('.con1 .btn_css button').eq(0).on('click',function(){
            
            idx--;
            if(idx ==-2){
               idx=-1;
            }
            if(idx ==-1){
                $('.con1 figure').addClass('active');
            }
           
            stopClass();
            
        });
        $('.con1 .btn_css button').eq(1).on('click',function(){
            idx++;
            if(idx ==2){
                idx =1;
            }
            if(idx ==1){
                $('.con1 figure').addClass('active2');
            }
           
            stopClass();

        });
        function stopClass(){
            if(idx == 0){
                $('.con1 figure').removeClass('active');
                $('.con1 figure').removeClass('active2');
            }
        }
       
      
    }
    trans()


    function textSlide(){
            var src = ['../img/subPlus/rewards1.jpg','../img/subPlus/rewards2.jpg','../img/subPlus/rewards.png','../img/subPlus/rewards4.png'];
        $('.rewards .textBox div').on('click',function(e){
            $('.rewards .textBox div div').removeClass('active');
            $('.rewards .textBox div').removeClass('active');
            $(this).find('div').addClass('active');
            $(this).addClass('active');

            if($('.textBox >div').eq(0).hasClass('active')){
               $('.rewards span img').attr('src',src[0]);
            }
            if($('.textBox >div').eq(1).hasClass('active')){
                $('.rewards span img').attr('src',src[1]);

             }
             if($('.textBox >div').eq(2).hasClass('active')){
                $('.rewards span img').attr('src',src[2]);
             }
             if($('.textBox >div').eq(3).hasClass('active')){
                 $('.rewards span img').attr('src',src[3]);
              

              }
            

            
        })
      
    }
    textSlide();

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

});