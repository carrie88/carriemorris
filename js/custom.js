$(document).ready(function(){


    $(".section").height($(window).height());
        $(window).resize(function(){
            $(".section").height($(window).height());
    });


		var $containerRelated = $('.image-grid__container').imagesLoaded( function() {
       $containerRelated.isotope({
         // options
         itemSelector: '.portfolio-item',
         layoutMode: 'masonry'
       });
     });

});
