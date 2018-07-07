
    var photoText =["Rocky Mountains", "The Green Swamp", "Redpick", "YoungLeaf", "Lonely Water", "Big Lake", "High Clouds", "West Virginia", "Great Plateau", "The Misty Trees"];

    var photo = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];


    var n=0;

    var OxyTime = 0.07;

    var EnyTime = 0.07;

    var cycles = 0;

    var xyz = 3;






function nightt() {



   if (xyz < 4) { 

     //document.getElementById("nightt").style.zIndex = "300"; cyclesN = 1;  alert(cyclesN); cyclesN = 2;

   

     document.getElementById("nightt").style.backgroundColor = "black"; 
     document.getElementById("nightt").style.zIndex = "300";  
     document.getElementById("leftview_back").style.opacity = "0.0"; 

    

      changetomore();




      

  }

  else {


    document.getElementById("nightt").style.backgroundColor = "rgba(0,0,0,0.0)"; 
      document.getElementById("nightt").style.zIndex = "-1";
       document.getElementById("leftview_back").style.opacity = "1.0";
     

     changetomore2();
  }

}


function changetomore () {

      xyz = 4;

}


function changetomore2 () {

      xyz = 3;

}





   // var OxyTime = 0.2;
    

function createcard() {

    document.getElementById("addchild").style.visibility = "hidden";

    var bio;

    function randomBio(min,max)
{
    bio = Math.floor(Math.random()*(max-min+1)+min);
}


   randomBio(0,9);


    n = n+1;
    var x = document.createElement("div");
    x.setAttribute("id", "div"+n);
    x.setAttribute("class", "child");
    document.getElementById('columns').appendChild(x);

    var x1 = document.createElement("div"); 
    x1.setAttribute("id", "specimen_container"+n);
    x1.setAttribute("class", "specimen_container");
    document.getElementById("div"+n).appendChild(x1);

    var x1_01 = document.createElement("div");
    x1_01.setAttribute("id", "round_go"+n);
    x1_01.setAttribute("class", "round_go");
    document.getElementById("specimen_container"+n).appendChild(x1_01);

    $("#round_go"+n).click(function(){
    move('OxyBar'+n,'OxyPer'+n, 'EnyBar'+n,'EnyPer'+n, 'div'+n, 'round_go'+n, 'card_img'+n);
    document.getElementById("addchild").style.visibility = "visible";
   });

    var x1_01_01 = document.createElement("div");
    x1_01_01.setAttribute("id", "triangle-up"+n);
    x1_01_01.setAttribute("class", "triangle-up");
    document.getElementById("round_go"+n).appendChild(x1_01_01);

    var x2 = document.createElement("div");
    x2.setAttribute("id", "card_img"+n);
    x2.setAttribute("class", "card_img");
    document.getElementById("specimen_container"+n).appendChild(x2);

    var x2_01 = document.createElement("img");
    x2_01.setAttribute("id", "img"+n);
    x2_01.setAttribute("class", "img");
    x2_01.setAttribute("src", "img/" +photo[bio]+ ".jpg");
    document.getElementById("card_img"+n).appendChild(x2_01);

    var x3 = document.createElement("div");
    x3.setAttribute("id", "card_text"+n);
    x3.setAttribute("class", "card_text");
    document.getElementById("specimen_container"+n).appendChild(x3); 

    var x3_01 = document.createElement("div");
    x3_01.setAttribute("id", "card_text_01"+n);
    x3_01.setAttribute("class", "card_text_01");
    document.getElementById("card_text"+n).appendChild(x3_01); 

    var x3_01_01 = document.createElement("p");
    x3_01_01.setAttribute("id", "card_text_01_position"+n);
    x3_01_01.setAttribute("class", "card_text_01_position");
    x3_01_01.innerHTML = photoText[bio];
    document.getElementById("card_text_01"+n).appendChild(x3_01_01); 

    var x3_02 = document.createElement("div");
    x3_02.setAttribute("id", "card_text_02"+n);
    x3_02.setAttribute("class", "card_text_02");
    document.getElementById("card_text"+n).appendChild(x3_02); 

    var x3_02_01 = document.createElement("div");
    x3_02_01.setAttribute("id", "card_text_02_oxygen"+n);
    x3_02_01.setAttribute("class", "card_text_02_");
    document.getElementById("card_text_02"+n).appendChild(x3_02_01);   

    var x3_02_01_01 = document.createElement("div");
    x3_02_01_01.setAttribute("id", "card_text_02_oxygen_text"+n);
    x3_02_01_01.setAttribute("class", "card_text_02_text");
    document.getElementById("card_text_02_oxygen"+n).appendChild(x3_02_01_01);   

    var x3_02_01_01_01 = document.createElement("p");
    x3_02_01_01_01.setAttribute("id", "card_text_02_text_position"+n);
    x3_02_01_01_01.setAttribute("class", "card_text_02_text_position");
    document.getElementById("card_text_02_oxygen_text"+n).appendChild(x3_02_01_01_01); 
    x3_02_01_01_01.innerHTML = "Oxygen";

    var x3_02_02 = document.createElement("div");
    x3_02_02.setAttribute("id", "card_text_02_oxygen_percentage"+n);
    x3_02_02.setAttribute("class", "card_text_02_percentage");
    document.getElementById("card_text_02_oxygen"+n).appendChild(x3_02_02);  

    var x3_02_02_01 = document.createElement("div");
    x3_02_02_01.setAttribute("id", "OxyPer"+n);
    x3_02_02_01.setAttribute("class", "card_text_02_percentage_position");
    x3_02_02_01.innerHTML = "0%";
    document.getElementById("card_text_02_oxygen_percentage"+n).appendChild(x3_02_02_01);  

     var x3_02_03 = document.createElement("div");
    x3_02_03.setAttribute("id", "card_text_02_oxygen_progressbar"+n);
    x3_02_03.setAttribute("class", "card_text_02_progressbar");
    document.getElementById("card_text_02_oxygen"+n).appendChild(x3_02_03); 

    var x3_02_03_01 = document.createElement("div");
    x3_02_03_01.setAttribute("id", "myProgress"+n);
    x3_02_03_01.setAttribute("class", "myProgress");
    document.getElementById("card_text_02_oxygen_progressbar"+n).appendChild(x3_02_03_01); 

    var x3_02_03_01_01 = document.createElement("div");
    x3_02_03_01_01.setAttribute("id", "OxyBar"+n);
    x3_02_03_01_01.setAttribute("class", "myBar");
    document.getElementById("myProgress"+n).appendChild(x3_02_03_01_01); 





    var x3_03_01 = document.createElement("div");
    x3_03_01.setAttribute("id", "card_text_02_energy"+n);
    x3_03_01.setAttribute("class", "card_text_02_");
    document.getElementById("card_text_02"+n).appendChild(x3_03_01);  





    var x3_03_01_01 = document.createElement("div");
    x3_03_01_01.setAttribute("id", "card_text_02_energy_text"+n);
    x3_03_01_01.setAttribute("class", "card_text_02_text");
    document.getElementById("card_text_02_energy"+n).appendChild(x3_03_01_01);

    var x3_03_01_01_01 = document.createElement("p");
    x3_03_01_01_01.setAttribute("id", "card_text_02_text_position"+n);
    x3_03_01_01_01.setAttribute("class", "card_text_02_text_position");
    document.getElementById("card_text_02_energy_text"+n).appendChild(x3_03_01_01_01);
    x3_03_01_01_01.innerHTML = "Energy";





    var x3_03_02_01 = document.createElement("div");
    x3_03_02_01.setAttribute("id", "card_text_02_energy_percentage"+n);
    x3_03_02_01.setAttribute("class", "card_text_02_percentage");
    document.getElementById("card_text_02_energy"+n).appendChild(x3_03_02_01);

    var x3_03_02_01_01 = document.createElement("p");
    x3_03_02_01_01.setAttribute("id", "EnyPer"+n);
    x3_03_02_01_01.setAttribute("class", "card_text_02_percentage_position");
    document.getElementById("card_text_02_energy_percentage"+n).appendChild(x3_03_02_01_01);
    x3_03_02_01_01.innerHTML = "%0";





    var x3_03_03_01 = document.createElement("div");
    x3_03_03_01.setAttribute("id", "card_text_02_energy_progressbar"+n);
    x3_03_03_01.setAttribute("class", "card_text_02_progressbar");
    document.getElementById("card_text_02_energy"+n).appendChild(x3_03_03_01);

    var x3_03_03_01_01 = document.createElement("p");
    x3_03_03_01_01.setAttribute("id", "myProgress"+n+1);
    x3_03_03_01_01.setAttribute("class", "myProgress");
    document.getElementById("card_text_02_energy_progressbar"+n).appendChild(x3_03_03_01_01);

    var x3_03_03_01_01_01 = document.createElement("p");
    x3_03_03_01_01_01.setAttribute("id", "EnyBar"+n);
    x3_03_03_01_01_01.setAttribute("class","myBar");
    document.getElementById("myProgress"+n+1).appendChild(x3_03_03_01_01_01);
    

    /*var y = document.createElement("IMG");
    y.setAttribute("src", photosStr[i]);*/

    /*var z = document.createElement("FIGCAPTION");
    z.innerHTML = '<span>text</span>'; */


   // x.appendChild(y);
    $("#addchild").insertAfter("#div"+n);
   // alert('ID number: ' + n);



}


 var OxyLev = parseFloat(0.7);  
 var EngLev = parseFloat(0.7);
var time=0;

function randomTime(min,max)
{
    time = Math.floor(Math.random()*(max-min+1)+min);
}






function removeOne(div) {

          var y = document.getElementById(div+'o');
          document.getElementById(div).removeChild(y);

      }





function move(bar1, per1, bar2, per2, card, button, addOnee) {

 document.getElementById(button).style.transform = "translateX(80px)";
 addOne(); 
 setTimeout(addOne,300); 

  var n = 0;
  var m = 0;

  moveprim(bar1, per1);

var increase = 0;
var increase2 = 0;

  function randomOxy()
{

  var max= 0.001;
  var min= 0.0007;
    increase = Math.random() * (max - min) + min;
    increase = increase.toFixed(4); 
}

function randomEng()
{
    var max= 0.001;
    var min= 0.0007;
    increase2 = Math.random() * (max - min) + min;
    increase2 = increase2.toFixed(4); 
}
  

function moveprim(bar1, per1) {
  
  randomTime(100,700); 


 
  var elem = document.getElementById(bar1);  
  var widthbar = 1;
  var idbar = setInterval(frame, time);
  function frame() {
    if (widthbar >= 100) {
      n = 1; checkLast();
      clearInterval(idbar); return;
    } else {
      widthbar++; randomOxy(); OxyTime = Number(OxyTime) + Number(increase); OxyTime.toFixed(2);  OxyLev = OxyLev + parseFloat(OxyTime); 
       document.getElementById("OxyLev").innerHTML = toFixed((OxyLev/10),2);  if (OxyTime > 1) { OxyTime = 0; cycles++;  document.getElementById("cycles").innerHTML = cycles;}
       changeprogress(OxyTime); 
      elem.style.width = widthbar + '%';
      document.getElementById(per1).innerHTML=widthbar + '%';
    }
  }
}


  movesec(bar2, per2);

function movesec(bar2, per2) {
  
  randomTime(40,300);
    
  var elem = document.getElementById(bar2);  
  var widthbar = 1;
  var idbar = setInterval(frame, time); 
  function frame() {
    if (widthbar >= 100) {
      m = 1; checkLast();
      clearInterval(idbar); return;
      
    } else {
      widthbar++; randomEng(); EnyTime = Number(EnyTime) + Number(increase2); EnyTime.toFixed(4); EngLev = EngLev + parseFloat(EnyTime); 
       document.getElementById("EngLev").innerHTML = toFixed((EngLev/10),2); if (EnyTime > 1) { EnyTime = 0; cycles++;  document.getElementById("cycles").innerHTML = cycles; }

       changeprogress1(EnyTime);
      elem.style.width = widthbar + '%';
      document.getElementById(per2).innerHTML=widthbar + '%';
      
    }
  }
}



function checkLast() {

if (n == 1 && m == 1) {


  // document.getElementById('specimen').effect( "bounce", { times: 3 }, 500 ); 

  // $("#round_go").effect( "shake", {times:3}, 1000 );

/*
  var times = 10;
for(var i=1; i < times; i++){

  updown();
  
} 
*/





removeOne(addOnee); removeOne(addOnee);


setInterval(


function updown() {

  document.getElementById(card).style.transform = "translateY(-10px)";

             


   setTimeout(function () {

  document.getElementById(card).style.transform = "translateY(0px)";

              },300);

 }, 600);



   setTimeout(function(){

   x = document.getElementById(card);
   document.getElementById('columns').removeChild(x);


 },7000);


   setTimeout(function(){

   x = document.getElementById(card);
   x.style.transform = "scale(0.1)";
   x.style.opacity = 0.0;

   }, 6700);

}

}


function addOne() {


    var x = document.createElement("div");
    x.setAttribute("id", addOnee+"o");
    x.setAttribute("class", "divo");
    document.getElementById(addOnee).appendChild(x);

    var addNr = 0;

    
    
    x.innerHTML = "+";
   // x.style.transform = "translate(20px,20px)";
   // x.style.transform="scale(0.6)";
   // x.style.opacity="0.2";
   

  
   

}





}










function toFixed(value, precision) {
    var precision = precision || 0,
        power = Math.pow(10, precision),
        absValue = Math.abs(Math.round(value * power)),
        result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

    if (precision > 0) {
        var fraction = String(absValue % power),
            padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
        result += '.' + padding + fraction;
    }
    return result;
}

















