$(document).ready(function() {
  $('.slider').slick({
    arrows:true,
    dots:true,
    slidesToShow:3,
  });
 // $('.slider').on('beforeChange', function(event, slick, 
   // currentSlide, nextSlide){
     //   console.log(currentSlide); //currentSlide
    //});

 //   $('.slider').on('afterChange', function(event, slick, 
   //     currentSlide, nextSlide){
     //       console.log(currentSlide); 
       // });

    $('.slider').slick('setPosition');

    $('.slider').slick('goTo', 2);

   // $('.link').click(function(event) {
        //$('.slider').slick('goTo', 3);
   // });

    $('.slider').slick('slickPrev');

     // $('.link').click(function(event) {
        //$('.slider').slick('slickPrev');
   // });

    $('.slider').slick('slickNext');

  $('.link_play').click(function(event) {
        $('.slider').slick('slickPrev');
   });
  // $('.link_play').click(function(event) {
    //$('.slider').slick('slickPause');
//});

$('.link_add').click(function(event) {
    $('.slider').slick('slickAdd','<div class="newslide">123</div>');
    return false;
});

$('.link_remove').click(function(event) {
    $('.slider').slick('slickRemove',0);
    return false;
});
    

var filtered = false;
$('.link_filter').on('click', function(){
    if (filtered === false) {
        $('.slider').slick ('slickFilter','.filter');
        $(this).text('Убрать фильтр');
        filtered = true;
    } else {
        $('.slider').slick('slickUnfilter');
        $(this).text('Фильтровать');
        filtered = false;
    }
    return false;
});


var s = $('.slider').slick('slickGetOption','slidesToShow');
console.log(s);

// $('.slider').slick('slickSetOption','slidesToShow', 2);


//$('.slider').slick('unslick');

});



  //adaptiveHeight: true,
    //slidesToScroll:1,
    //speed:500,
    //easing:'ease',
    //infinite:true,
    //initialSlide:1,
    //autoplay:false,
    //autoplaySpeed:1500,
    //pauseOnFocus:true,
    //pauseOnHover:true,
    //pauseOnDotsHover:true,
    //draggable:true,
    //swaip:true,
    //touchThreshold:5,
    //touchMove:true,
    //waitForAnimate: false,
    //centerMode:false,
    //variableWidth:false,
    //rows:1,
    //slidesPerRow:1,
    //vertical:false,
    //verticalSwiping:true,
    //asNavFor:".sliderbig",

    //responsive:[
      //  {
      //      breakpoint:1286,
      //      settings:{
      //      slidesToShow:2
      //     }
      //  },
      //  {
      //     breakpoint:914,
      //       settings:{
      //      slidesToShow:1
      //      }
      //  }
    //],
    //mobileFirst:false,
    //appendArrows:$('.content'),
    //appendDots:$('.content'),
  //});
  //$('.sliderbig').slick({
  //  arrows:false,
  //  fade:true,
  //  asNavFor:".slider"