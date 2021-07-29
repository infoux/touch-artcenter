


$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();




    $('ul.list').niceScroll({
        emulatetouch:true
      });

    var swiper = new Swiper(".main-slider", {
        autoplay: {
            delay: 4000,
        },
        speed: 500,
        loop:true,
        spaceBetween: 80,
        centeredSlides: true,
        slidesPerView: "auto",
        effect: "coverflow",
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    });



    var keypadtarget = $("input:focus").attr("id");

    
    $("input.forkeypad").on("click", function(){
        keypadtarget = $(this).attr("id");

    });


    $("article.keypad button").on("click", function(){
        $("input#" + keypadtarget).focus();

        if ($(this).hasClass("back")) {

            $("input#" + keypadtarget).val($("input#" + keypadtarget).val().slice(0,-1));

        } else if ($(this).hasClass("del")) {

            $("input#" + keypadtarget).val("");

        } else {
            $("input#" + keypadtarget).val($("input#" + keypadtarget).val() + $(this).text());
        }
    });

});
