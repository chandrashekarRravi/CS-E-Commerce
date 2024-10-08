 window.addEventListener('scroll',reveal);
  
 function reveal(){
    var reveas =document.querySelectorAll('.reveal');

    for(var i=0;i<reveal.length; i++){
        var windowheight =window.innerHeight;
        var revealtop =reveal[i].getBoundingClientRect().top;
        var revealpoint =150;

        if(revealtop < windowheight -revealpoint){
            reveal[i].classList.add('active');
        }else{
            reveal[i].classList.remove('active');
        }

    }
 }