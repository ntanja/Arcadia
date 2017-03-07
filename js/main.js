$(document).ready(function () {

    //home page - left dropdown navigation
    $('div.dropdown').each(function () {
        var $dropdown = $(this);

        $("a.dropdown-link", $dropdown).click(function (e) {
            e.preventDefault();
            $div = $("div.dropdown-container", $dropdown);
            $div.toggle();
            $("div.dropdown-container").not($div).hide();
            return false;
        });
    });

    $('div.dropdown').click(function () {
        $("div.dropdown-container").hide();
    });

    //products page - toggle aside menu
    $('.all-products .see-more').click(function () {
        $('.aside').toggle();
    });

    //products page - left navigation bar
    $('.alcohol').click(function () {
        $('.alc-check').toggle();
    });
    $('.tea').click(function () {
        $('.tea-check').toggle();
    });
    $('.beer').click(function () {
        $('.beer-check').toggle();
    });
    $('.juice').click(function () {
        $('.juice-check').toggle();
    });
    $('.vine').click(function () {
        $('.vine-check').toggle();
    });

    //products page - show single product popUp 
    $('.single-popup-show').click(function () {
        $('.single-popup').fadeIn();
    });

    //products page - hide single product popUp 
    $('.close').click(function () {
        $('.single-popup').fadeOut();
    });

    //products page - price range slider start
    $("#slider").slider({
        range: "min",
        animate: true,
        value: 1,
        min: 1500,
        max: 9000,
        step: 10,
        slide: function (event, ui) {
            update(1, ui.value); //changed
        }
    });

    //Added, set initial value.
    $("#amount").val(0);
    $("#amount-label").text(0);

    update();

    //changed. now with parameter
    function update(slider, val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1 ? val : $("#amount").val();

        /* commented
         $amount = $( "#slider" ).slider( "value" );
         $duration = $( "#slider2" ).slider( "value" );
         */

        $("#amount").val($amount);
        $("#amount-label").text($amount);

        $('#slider a').html('<label>' + $amount + '</label><div class="ui-slider-label-inner"></div>');
    }
    //price range slider end

});

