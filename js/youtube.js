  // 2. This code loads the IFrame Player API code asynchronously.
 
  
  var tag = document.createElement('script');
  var set,setTime,blen=false;
  var subbln=true;



  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 플레이어변수 설정
  var player;
  var player2;
  
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
          
          videoId: 'UB7lcAQnp4c',
          playerVars: {
              autoplay:1,
              mute:1,
              rel: 0,
              loop:1,
              playlist:'UB7lcAQnp4c',
              origin:'https://127.0.0.1:5500'
             },//추천영상 안보여주게 설정
          events: {
            'onReady': onPlayerReady, //로딩할때 이벤트 실행
            'onStateChange': onPlayerStateChange //플레이어 상태 변화시 이벤트실행
          }
      });//player셋팅
      player2 = new YT.Player('player2', {
         
          videoId: 'hHt30e-r-G8',
          playerVars: {
            autoplay:1,
            mute:1,
            rel: 0,
            loop:1,
            playlist:'UB7lcAQnp4c',
            origin:'https://127.0.0.1:5500'
             },
          events: {
            'onReady': onPlayerReady, //로딩할때 이벤트 실행
            'onStateChange': onPlayerStateChange //플레이어 상태 변화시 이벤트실행
          }
      });//player셋팅
  }
  
  function onPlayerReady(event) {
       event.target.pauseVideo();//자동재생
 
      //로딩할때 실행될 동작을 작성한다.
  }
  
  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        //플레이어가 재생중일때 작성한 동작이 실행된다.
        var video = $('.figBox figure p video');
        
        $(window).on('scroll',function(){
        var a = $(this).scrollTop();
        
        if( a <=500){
          
         
            
          if($('.figBox p video').hasClass('playvideo')){
            if(localStorage.tube == 0){$(video).get(0).play()};
            if(localStorage.tube == 1){$(video).get(1).play()};
            if(localStorage.tube == 2){player.playVideo()};
            if(localStorage.tube == 3){player2.playVideo()};
        //     $(video).get(0).play();
        // $(video).get(1).play();
        // player.playVideo();
        // player2.playVideo();
        subbln=true;
      
          }
           
        
    
    
        if(blen) {
            blen=false;
            setTime();
            
         

        };
        


    }else{
      
      if(subbln){
        
        subbln=false;

        if($('.figBox p video').hasClass('playvideo')){
          
          $(video).get(0).pause();
          $(video).get(1).pause();
          player.pauseVideo();//일시정지
          player2.pauseVideo();//일시정지
          
        }
        
      }
     
    
    
    
    clearInterval(set);
    blen=true;
    
    
    }
    });

``

      }

      
    }
   
 
  $(document).ready(function () {
      $(".playvideo").on("click", function () {
        setTime();
      });
     
      $(".pausevideo").on("click", function () {
      
        
          player.pauseVideo();//일시정지
          player2.pauseVideo();//일시정지
      });
  });