
(function ($) {
  'use strict';


jQuery(document).ready(function($) {

	    function stickyNav() {
        //fixed nav bar active
        window.onscroll = function () {
            myFunction()
        };
        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
    stickyNav();

    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    handlePreloader();


    var chat__btn = $('#chat');
    var form__popup = $('.form__popup');
    var close__btn = $('.close__btn');
	chat__btn.on('click', function(){
		form__popup.addClass('active');
	});
	close__btn.on('click', function(){
		form__popup.removeClass('active');
	})






 });



    

     //jquery load function start
    jQuery(window).on("load", function() {
        
    });


}(jQuery));


