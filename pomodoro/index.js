$(document).ready(function() {

    var sessionL = parseInt($(".sessionL").text(), 10);
    var breakL = parseInt($(".breakL").text(), 10);

    $(".breakMinus").on("click", function() {
        breakL--;
        $(".breakL").text(breakL);
    });
    $(".breakPlus").on("click", function() {
        breakL++;
        $(".breakL").text(breakL);
    });
    $(".sessionMinus").on("click", function() {
        sessionL--;
        $(".sessionL").text(sessionL);
    });
    $(".sessionPlus").on("click", function() {
        sessionL++;
        $(".sessionL").text(sessionL);
    });
    $(".start").on("click", function() {
        $('.time').timer({
            countdown: true,
            duration: sessionL + "m",
            format: '%H:%M:%S'
        });
    });
    $(".stop").on("click", function() {
        $('.time').timer('pause');
    });
    $(".resume").on("click", function() {
        $('.time').timer('resume');
    });
    $(".reset").on("click", function() {
        $('.time').timer('remove');
        $('.time').text('00.00.00');
    });


});
