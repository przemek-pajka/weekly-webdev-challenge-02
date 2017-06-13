(function() {
// Select all links with hashes // SMOOTH SCROLLING SCRIPT
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/* Scroll spy */
		
    $(function () {
        var sectionsToWatch = [];
        var menuItems = $('.navbar__ul').eq(0).find('li');
        $(menuItems).each(function () {          sectionsToWatch.push($(this).find('a').attr('href').replace('#', ''));
        });
 
        $(document).scroll(function () {
            var $nav = $(".top-wrapper");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
 
            var scrollTopOffset = $(document).scrollTop();
 
            $(sectionsToWatch).each(function (k, v) {
                if ($('#' + v).length && scrollTopOffset >= $('#' + v).offset().top - $('.top-wrapper').height()) {
                    $('.navbar__ul li').removeClass('active');
                    var x = $('.navbar__ul li').find('a[href="#' + v + '"]');
                    x.parent('li').addClass('active');
                }
            }); 
        });
    });

    /* Gallery lightbox */
		
	$(function() {
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
	});

    jQuery(document).ready(function ($) {
        $('.toggle-menu').jPushMenu();
    });

    $('.toggle-menu').click(function() {
        $('header .top-wrapper .top-wrapper__nav').toggleClass('open');
    });
    $('body').click(function() {
        $('header .top-wrapper .top-wrapper__nav').removeClass('open');
    });


    $('#show-hide-btn1').click(function() {
       $(this).html($(this).text() == 'Show less' ? 'View more' : 'Show less');
        $('#show-hide1').slideToggle('slow');
       
        if ($('#show-hide1').is(':visible'))
        $('#show-hide1').css('display','flex');
    });

 $('#show-hide-btn2').click(function() {
       $(this).html($(this).text() == 'Show less' ? 'View more' : 'Show less');
        $('#show-hide2').slideToggle('slow');
       
        if ($('#show-hide2').is(':visible'))
        $('#show-hide2').css('display','flex');
    });



   
})();
