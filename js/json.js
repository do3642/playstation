

    function call(a){

        $.ajax({//외부파일 호출 메소드
            url : 'figure.json',
            type : 'GET', //POST
            dataType : 'json',
            success :function(data){
                
        var imgSrc,txt,inner;
            $(data.event).each(function(i){
              
                imgSrc = data.event[i].jImg;
                txt = data.event[i].jtxt;
                inner="<figure><p><img src="+imgSrc+"></p><figcaption>"+txt+"</figcaption></figure> "
    
                $('.top_left .json').append(inner);
            });
            
            a();
    
    
    
            }
        
        
        });
    };
   