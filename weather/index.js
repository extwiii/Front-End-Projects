$(document).ready(function() {
    var lat, lon;
    var api = "http://api.openweathermap.org/data/2.5/weather?";
    var units = "&units=metric";
    var appid = "&APPID=18bdc68210824e61d3df69e496c54c5e";
    var isFahrenheit = false;

    $.getJSON('https://ipinfo.io', function(data) {

        var res = data.loc.split(",");
        lat = res[0];
        lon = res[1];

        var link =  api + "lat=" + lat + "&lon=" + lon + units + appid ;
        console.log(link)

        $.get(link, function(weather) {
          console.log(123)
            $('.city').html(weather.name + " , " + weather.sys.country);
            $('.icon').attr('src', 'https://openweathermap.org/img/w/' +
                weather.weather[0].icon + '.png');
            $('.temp').html(weather.main.temp);
            $('.sky').html(weather.weather[0].main + " , " + weather.weather[0].description);


            $("#js-toggle-unit").click(function(ev) {
                isFahrenheit = !isFahrenheit;
                if (isFahrenheit) {
                    $(".temp-unit").html("F");
                    if (ev) {
                        ev.target.innerHTML = 'Celsius';
                    }
                    $(".temp").html(Math.round(weather.main.temp * 1.8 + 32));
                } else {
                    $(".temp-unit").html('&deg;C');
                    if (ev) {
                        ev.target.innerHTML = 'Fahrenheit';
                    }
                    $(".temp").html(weather.main.temp);
                }
            });

        });

    });



});
