$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();






    var $mainSlider = $("section.main-slider div.slider");
    $mainSlider.slick({
        arrows:false,
        autoplay:true,
        speed: 1000,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    
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
