$(document).ready(function() {
    $("#search").keyup(function(e) {
        if (e.keyCode === 13) {
            var title = $("#search").val();

            if (title === '') {
                return;
            }

            $.ajax({
                url: 'http://en.wikipedia.org/w/api.php?action=query&list=search&prop=images&format=json&srsearch=' + title + '&srnamespace=0&srprop=snippet&srlimit=15&imlimit=1',
                type: 'POST',
                dataType: "jsonp",
                success: function(data) {
                    console.log(data);
                    if (data.query.search.length > 0) {
                        var str = '';

                        data.query.search.forEach(function(i) {
                            str += '<a href="http://www.wikipedia.org/wiki/' + i.title + '" target="_blank"><div class="result-item">';
                            str += '<h2>' + i.title + '</h2>';
                            str += '<h4>' + i.snippet + '</h4>';
                            str += '</div></a>';
                        })
                        $('#result').html(str);
                    }
                }
            });
            $("#search").val("");
        }
    });









});
