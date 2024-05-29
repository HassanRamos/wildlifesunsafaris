
(function ($) {
  'use strict';



jQuery(document).ready(function($) {

      //menu active
      jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'
      });


      var testimonials = $('.testimonials');
      testimonials.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        items:1,
        navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>']
      });


      var welcome__slider__img = $('.welcome__slider__img');

      welcome__slider__img.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        smartSpeed:1000,
        items:1,
        autoplay:false,
        
      })

      var client__carousel = $('.client__carousel');

      client__carousel.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        smartSpeed:1000,
        items:1,
        autoplay:false,
        navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>']

        
      })

      var portfolio__carousels = $('.portfolio__carousels');
      portfolio__carousels.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        smartSpeed:1000,
        items:2,
        margin:30,
        autoplay:true,
        navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>'],
      })


     //==welcome_area animation==\\
    welcome__slider__img.on('translate.owl.carousel', function() {
        $('.welcome__slider__img .welcome__slider__card').removeClass('fadeInRight animated').hide();
    });
    welcome__slider__img.on('translated.owl.carousel', function() {
        $('.owl-item.active .welcome__slider__card').addClass('fadeInRight animated').show();
    });



      //modal video button active
     var cbtn2__video1 = $(".cbtn2__video1, .video2__btn, .servie__play__icon");
     cbtn2__video1.modalVideo();

    //wow animations active here
    new WOW().init();

    //current class adding
    var navbarmneuclass = $('.navbarmneuclass'); 
    navbarmneuclass.onePageNav();
    var counter = $('.counter');
    counter.counterUp({
            delay: 10,
            time: 1000
        });


    });

    

     //jquery load function start
    jQuery(window).on("load", function() {
        
    });


}(jQuery));



//active plugins js main file end......