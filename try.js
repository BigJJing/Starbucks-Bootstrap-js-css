window.onload=function(){
  var obox1=document.getElementById('box1');;
  var obox2=document.getElementById('box2');
  var obtn1=document.getElementById('btn1');
  var obtn2=document.getElementById('btn2');
  var boxindex=1;
  console.log(obtn1);
  obtn1.onclick=function(){
    boxindex++;
    obox2.style.zIndex=boxindex+'';
    obox1.style.opacity='0';
    obox2.style.opacity='1';

  }
  obtn2.onclick=function(){
    boxindex++;
    obox1.style.zIndex=boxindex+'';
    obox1.style.opacity='1';
    obox2.style.opacity='0';

  }
}
