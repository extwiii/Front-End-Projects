$(document).ready(function() {
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "yoda", "tsm_bjergsen", "nl_kripp", "esl_dota2", "tsm_dyrus", "teamoxy", "rpglimitbreak", "supermcgamer", "brunofin", "comster404"];

    for (var i = 0; i < channels.length; i++) {
        getInfo(channels[i]);
    }

    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });

});


function getInfo(channel) {

    $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {
        var name, logo, status;
        // If User Online
        if (data.stream) {
            name = data.stream.channel.display_name;
            logo = data.stream.channel.logo;
            status = "Streaming";
            var html = '<div class="row">';
            html += '<div class="col-xs-3">';
            html += '<img  class="logo" alt="channel_image" src="' + logo + '">';
            html += '</div>';
            html += '<div class="col-xs-2 ">';
            html += "<a href='https://www.twitch.tv/" + name + "' target='_blank'><span><b>" + name + "</b></span></a>";
            html += '</div>';
            html += '<div class="col-xs-6 col-xs-offset-1 ">';
            html += status;
            html += '</div>';
            html += '</div>';
            $(".list").prepend(html);
            $(".online").prepend(html);

            //If User Offline
        } else if (data.stream === null) {
            $.getJSON(data._links.channel, function(data) {
                logo = data.logo,
                    name = data.name,
                    status = "Offline";
                var html = '<div class="row">';
                html += '<div class="col-xs-3">';
                html += '<img  class="logo" alt="channel_image" src="' + logo + '">';
                html += '</div>';
                html += '<div class="col-xs-2 ">';
                html += "<a href='https://www.twitch.tv/" + name + "' target='_blank'><span><b>" + name + "</b></span></a>";
                html += '</div>';
                html += '<div class="col-xs-6 col-xs-offset-1 ">';
                html += status;
                html += '</div>';
                html += '</div>';
                $(".list").append(html);
                $(".offline").prepend(html);
            });
        } else if (data.stream === undefined) {
            name = data.message.slice(9, -16);
            logo = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
            status = "Account Closed";
            var html = '<div class="row">';
            html += '<div class="col-xs-3">';
            html += '<img  class="logo" alt="channel_image" src="' + logo + '">';
            html += '</div>';
            html += '<div class="col-xs-2 ">';
            html += "<a href='https://www.twitch.tv/" + name + "' target='_blank'><span><b>" + name + "</b></span></a>";
            html += '</div>';
            html += '<div class="col-xs-6 col-xs-offset-1 ">';
            html += status;
            html += '</div>';
            html += '</div>';
            $(".list").append(html);
            $(".closed").prepend(html);
        }

    });

}
