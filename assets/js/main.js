(function($){
    "use strict";

        // Menu JS
        $('.navbar .navbar-nav li a, .navbar .start-Learn-btn, .navbar-brand, .hero-content .btn').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
        
        $('.navbar .navbar-nav li a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
        
        // Header Sticky
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-light').addClass("is-sticky");
                $('.navbar-brand img').attr('src', 'assets/img/logo-black.png');
            }
            else{
                $('.navbar-light').removeClass("is-sticky");
                $('.navbar-brand img').attr('src', 'assets/img/logo.png');
            }

            // Go to Top
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').fadeIn('slow');
            if (scrolled < 300) $('.go-top').fadeOut('slow');

        });

        //Click event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });


        //  Newsletter Subscribe
        $('#mc-form').ajaxChimp({
            url: 'https://xyz.us15.list-manage.com/subscribe/post?u=a26d8d38db8b11ffd3352f889&amp;id=d60b8b0444'
            /* Replace Your AjaxChimp Subscription Link */
        });        
        
        // Hero Slides
        $(".hero-slides").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            touchDrag: false,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            navText: [
            "<i class='icofont-rounded-left'></i>",
            "<i class='icofont-rounded-right'></i>"
            ]
        });

        // testimonial  
        var testimonialCarousel = $('.testimonial-carousel');
            testimonialCarousel.owlCarousel({
            loop:true,
            dots:true,
            nav:false,
            responsive : {
                0 : {
                    items: 1
                },
                768 : {
                    items: 1
                },
                960 : {
                    items: 1
                },
                1200 : {
                    items: 1
                },
                1920 : {
                    items: 1
                }
            }
        }); 

        // Blog Slider
        if ($(".blog-slider").length) {
            $(".blog-slider").owlCarousel({
                autoplay:true,
                smartSpeed: 300,
                margin: 30,
                loop:true,
                autoplayHoverPause:true,
                dots: false,
                responsive: {
                    0 : {
                        items: 1
                    },
                    550 : {
                        items: 2
                    },
                    992 : {
                        items: 3
                    },
                    1200 : {
                        items: 4
                    },
                    1600 : {
                        items: 5
                    }
                }
            });
        }

        // Tabs
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
           
        // Counter
        $(".count").counterUp({
            delay: 20,
            time: 1500
        });
                
        // Popup Gallery
        $('.popup-btn').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });
        
        // Popup Video
        $('.popup-video').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        
        //preloader
        $(".book_preload").delay(2000).fadeOut(200);
        $(".book").on('click', function() {
             $(".book_preload").fadeOut(200);
        })


}(jQuery));