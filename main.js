var highlightedNumber = 0;

var circle = new ProgressBar.Circle('#progress', {
        color: 'rgb(77, 166, 255)',
        duration: 3,
        easing: 'easeInOut',
        trailColor: 'rgba(247, 247, 247, 0.6)',
        strokeWidth: 3
        
    });

var circle1 = new ProgressBar.Circle('#progress1', {
        color: 'rgb(153, 255, 153)',
        duration: 3,
        easing: 'easeInOut',
        trailColor: 'rgba(247, 247, 247, 0.6)',
        strokeWidth: 3
        
    });

var circle2 = new ProgressBar.Circle('#progress2', {
        color: 'rgb(38, 38, 38)',
        duration: 3000,
        easing: 'easeInOut',
        trailColor: 'rgba(247, 247, 247, 0.6)',
        strokeWidth: 0.5
        
    });




/*function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
        
    }); */

   function changeprogress(time) { 

    circle.animate(time);

   }


   function changeprogress1(time) { 

    circle1.animate(time);

   }

   function changeprogress2(time) {

     circle2.animate(time);

   }

   j = 1;

 




//setinterval(changeprogress2up,4000);


   changeprogress(0.07);

   changeprogress1(0.07);

   changeprogress2(0.5);

   setInterval(changeprogress2up,400);

   

   
   var cy = 0;

    function randomCy()
{
    var max= 0.9;
    var min= 0.1;
    cy = Math.random() * (max - min) + min;
    //cy = cy.toFixed(4); 
}







function changeprogress2up() { 

   
   randomCy(); 


   if (j % 4 == 0) {

     changeprogress2(cy); 
  }


   j++; 

   }



