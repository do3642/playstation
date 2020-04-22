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


//메인 컨텐츠 json 호출
function call(){

    $.ajax({//외부파일 호출 메소드
        url : 'figure.json',
        type : 'GET', //POST
        dataType : 'json',
        success :function(data){
            
    var imgSrc,txt,inner;
        $(data.subVr).each(function(i){
          
            imgSrc = data.subVr[i].jImg;
            txt = data.subVr[i].jtxt;
            
            inner="<figure><p><img src="+imgSrc+"></p><figcaption>"+txt+"</figcaption></figure> "

            $('.conGame .figBox').prepend(inner);
        });
        }
    
    
    });
    

};

//json 함수 호출
call();


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






var i =0;
    function vrmove(){
        $('.btn button').eq(0).on('click',function(){
           
            i--
            if(i==-1){
                i=3;
               }
            $('.moveBox').css({
                left : i*-100+'%'
            });
           
            videoBox();
           
           
        });
        $('.btn button').eq(1).on('click',function(){
            
                i++
                if(i==4){
                    i=0;
                   }
                $('.moveBox').css({
                    left : i*-100+'%'
                });
            videoBox();
            
           
        });


    }
    vrmove();


    function videoBox(){
        var src;
        var videoBox = $('.vrCon div video');
       
                if(i ==0){
                    src ='https://media.playstation.com/is/content/SCEA/explore/playstation-vr/us/overview/videos/playstation-vr-industry-design-01-us-14march19.mp4'
                   
                }
                if(i ==1){
                    src ='https://media.playstation.com/is/content/SCEA/explore/playstation-vr/us/overview/videos/playstation-vr-industry-design-02-us-14march19.mp4'
                }
                if(i ==2){
                    src='https://media.playstation.com/is/content/SCEA/explore/playstation-vr/us/overview/videos/playstation-vr-industry-design-03-us-14march19.mp4'
                }
                if(i ==3){
                    src='https://media.playstation.com/is/content/SCEA/explore/playstation-vr/us/overview/videos/playstation-vr-industry-design-04-us-14march19.mp4'
                }
                videoBox.attr('src',src);
    }
    var bln =true;
    $(window).on('scroll',function(){
        var wTop =$(this).scrollTop();
        var vr = $('.hard').offset().top;

        
        
        if(wTop > $('.container').offset().top){
            $('.figBox button').addClass('active');
        }
        if(wTop > $('.container').offset().top-500){
            $('.textBox h3').addClass('active');
            $('.textBox span').addClass('active');
            if(wTop> $('.container').offset().top-400){
                $('.conGame .figBox figure').addClass('active');
               
            }
        }

        if(wTop >vr-100 && bln){
            $('.vrCon div video').get(0).play();
            bln=false;
        }

        if(wTop > vr-600){
            $('.hard h5').addClass('active')
            if(wTop> vr-500){
                $('.vrCon figure').addClass('active');
                $('.vrCon > div').addClass('active');
                $('.btn_css').eq(0).find('button').addClass('active');

            }
        }

        if(wTop > $('.control').offset().top-500){
            $('.control h6').addClass('active');
            $('.conImg figure').addClass('active');
            $('.conImg > p').addClass('active');
        }
        
        if(wTop > $('.conImg2').offset().top-500){
            $('.conImg2 figure').addClass('active');
            $('.conImg2 > p').addClass('active');
        }
        if(wTop > $('.conImg2').offset().top-400){
            $('.btn_css').eq(1).find('button').addClass('active');
           
        }

        if(wTop> $('.conImg2').offset().top+100){
            $('.vrBox figure').addClass('active');
            $('.vr h4').addClass('active');
        }
    });

setTimeout(function() {
function changeImg(){
    var fig = $('.conGame .figBox figure');
    console.log(fig);
    $('.conGame .figBox figure').on('mouseover',function(){
        var src = $(this).find('img').attr('src');
        console.log(src);
        
        $('.conBack').css({
            backgroundImage: 'url('+src+')'
        });
    });
}

changeImg();
},3000);





});