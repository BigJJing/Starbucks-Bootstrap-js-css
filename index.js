window.onload=function(){
  var oplay=document.getElementById('autoplay');
  var oleft=document.getElementById('sleft_btn');
  var oright=document.getElementById('sright_btn');
  var obox=document.getElementById('scrollbox');
  var onav1=document.getElementsByClassName('nav1')[0];
  var onav2=document.getElementsByClassName('nav2')[0];
  var obtn1=document.getElementById('imgbtn1');
  var obtn2=document.getElementById('imgbtn2');
  var timer=null;
  var oli=oplay.getElementsByTagName('li');
  var speed=(oli[0].offsetWidth+70)/(10*4);
  //单击菜单的变量
  var boxindex=1;
  oplay.style.width=oli[0].offsetWidth*oli.length+240+'px';
  hide_left();

  //rigth_btn
  oright.onclick=function(){

    if(oplay.offsetLeft> -360){
      var clock=0;
      timer=setInterval(function(){
        oplay.style.left=oplay.offsetLeft-20+'px';
        clock++;
        if(clock>=speed){
          clearInterval(timer);
          hide_left();
          }
      },3);
    }
  }
  //left_btn
  oleft.onclick=function(){
    if(oplay.offsetLeft<0){
      var clock=0;
      timer=setInterval(function(){
        oplay.style.left=oplay.offsetLeft+20+'px';
        clock++;
        if(clock>=speed){
          clearInterval(timer);
          hide_left();
          }
      },3);
      }
  }
  //隐藏left_btn
  function hide_left(){

    if(oplay.offsetLeft>=0){
      oleft.style.display='none';
    }
    else{
      oleft.style.display='block';
    }
  }

  //点击菜单
  obtn1.onclick=function(){
    boxindex++;
    onav2.style.zIndex=boxindex+'';
    onav1.style.opacity='0';
    onav2.style.opacity='1';
  }
  obtn2.onclick=function(){
    boxindex++;
    onav1.style.zIndex=boxindex+'';
    onav1.style.opacity='1';
    onav2.style.opacity='0';
  }
}
