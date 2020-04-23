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
           
            if(wTop > $('.container').offset().top-100){
                $('.bugger').addClass('active2');
            }else{
                $('.bugger').removeClass('active2'); 
            }
            
            if(wTop > $('.remote').offset().top-200){
                $('.remoteImg span').addClass('active');
            }


        })
    }
    scrollE();


    //클릭시 팝업 이미지 변경
    function intro(){
        $('.con1 p').on('click',function(){
            $('.con1 p').removeClass('active');
            $(this).addClass('active');


            $('.popCon1 figure').removeClass('active');
            setTimeout(function(){
                $('.popCon1 figure').addClass('active');
            },500)


            var src= $(this).find('img').attr('src');
            var txt= $(this).find('span').text();
            var Idx =src.lastIndexOf('.')-1;
            var i=src.substr(Idx,1);
            var j=i+'_pop';
            var aa= src.replace(i,j);
           
            $('.popCon1 figure p img').attr('src',aa);
            $('.popCon1 figure figcaption small').text(txt);
            
        });
    }
    intro();


    //추가 기능 표시
    function introduce(){
        $('.figBox button').on('click',function(){
            $(this).toggleClass('hasClass');
            if($(this).hasClass('hasClass')){
                $('.intro ').slideDown(1000);
            }else{
                $('.intro ').slideUp();

            }
           
        });
    }
    introduce();

    function introTxt(){
        //데스크탑 팝업 텍스트 복붙
        var span1;
        $('.popCon1 figure figcaption small').text();
        $('.popCon2 small').eq(0).text(span1);
        for(let i =0;i<$('.con1').find('span').length;i++){
            span1=$('.con1').find('span').eq(i).text();
            $('.popCon2 small').eq(i).text(span1);
        }



    }
    introTxt();


    //모바일 환경에 나오는 pop2 무한슬라이드
    function conSlide(){
        var i=1;
        $('.popCon2 button').eq(0).on('click',function(){
            i--
            $('.popCon2 .moveBox').css({
                transform:'translateX('+i*-100+'%)'
            })
           
            slideshow();
            bar();
        });
        $('.popCon2 button').eq(1).on('click',function(){
            i++
            $('.popCon2 .moveBox').css({
                transform:'translateX('+i*-100+'%)'
            })
           
            slideshow();
            bar();
           
        });
        
        // 무브박스 움직임
        function slideshow(){
            if(i==0){
                setTimeout(function(){
                    $('.popCon2 .moveBox').css({
                        transition:'0s'
                    })
                    $('.popCon2 .moveBox').css({
                        transform:'translateX(-600%)'
                    })
                    
                },500)
                i=6 
            }
            if(i==7){
                setTimeout(function(){
                    $('.popCon2 .moveBox').css({
                        transition:'0s'
                    })
                    $('.popCon2 .moveBox').css({
                        transform:'translateX(-100%)'
                    })
                    
                },500)
                i=1
            }
            $('.popCon2 .moveBox').css({
                transition:'.5s'
            })

        }
        //밑에 네비바
        function bar(){
           
            $('.navBar small').css({
                width: 100/6*i+'%'
            })
            $('.navBar strong').text(i);
           
        }
        
        
    }
    conSlide();

    //앞뒤 클론생성
    function clone(){
        var cloneElements = $('.figBox2 .moveBox figure').eq(0).clone();
        var cloneElements6 = $('.figBox2 .moveBox figure').eq(5).clone();
        cloneElements.appendTo('.figBox2 .moveBox');
        cloneElements6.prependTo('.figBox2 .moveBox');
    }
    clone();





    //반응형 js
    function media(){
        var m = window.matchMedia("screen and (max-width: 993px)");
        m.addListener(function(e){
            if(e.matches){
               $('.intro').slideUp();
               $('.visual_ani').find('p') .addClass('active');
               $('.visual_ani').find('figcaption') .addClass('active')
            }else{
            }
            });
    }
    media();


})