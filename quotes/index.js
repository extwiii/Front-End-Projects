$(document).ready(function() {
    getQuote();

    function getQuote() {
        $.ajax({
            headers: {
                "X-Mashape-Key": "2t41OiUsKhmsh1QRwKSbPdH3tgdCp1hL8FXjsnQOecslVsW5zK",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
            type: 'POST',
            datatype: 'json',
            success: function(data) {
                var obj = jQuery.parseJSON(data);
                console.log(obj);
                var quot = 'https://twitter.com/intent/tweet?text=' + obj.quote + ' -- ' + obj.author;
                $(".twitter-share-button").attr("href", quot);
                $('h3').empty();
                $('h4').empty();
                $('h3').append("\"" + obj.quote + "\"");
                $('h4').append("-" + obj.author);
            },
            error: function(err) {
                alert(err);
            }

        });

    }

    $(window).keypress(function(e) {
        if (e.keyCode === 0 || e.keyCode === 32) {
            e.preventDefault(); // don't scroll down
            getQuote();
        }
    });

    $('#quote').click(function() {

        getQuote();
    });
});
