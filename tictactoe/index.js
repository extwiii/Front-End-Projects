$(document).ready(function() {
    var topLeft = $(".top .left"),
        topMiddle = $(".top .middle"),
        topRight = $(".top .right"),
        centerLeft = $(".center .left"),
        centerMiddle = $(".center .middle"),
        centerRight = $(".center .right"),
        bottomLeft = $(".bottom .left"),
        bottomMiddle = $(".bottom .middle"),
        bottomRight = $(".bottom .right"),
        square = $('div.game > div div'),
        winner = [],
        random = 4,
        count = 0,
        player = "X",
        computer = "O";

    $("#OButton").on("click", function() {
        player = 'O';
        computer = player === 'X' ? 'O' : 'X';

    });
    $("#XButton").on("click", function() {
        player = 'X';
        computer = player === 'X' ? 'O' : 'X';
    });

    square.on('click', function() {
        $(this).text(player).addClass("game");
        checkWinner(player);
        AI();
        checkWinner(computer);
        checkTie();
    });

    function checkWinner(par) {
        if (check(par)) {
            for (var i = 0; i < square.length; i++) {
                square.eq(i).text("");
            }
        }
    }

    function check(win) {
        for (var i = 0; i < square.length; i++) {
            winner[i] = (square.eq(i).text());
        }
        if (winner[0] == win && winner[1] == win && winner[2] == win ||
            winner[3] == win && winner[4] == win && winner[5] == win ||
            winner[6] == win && winner[7] == win && winner[8] == win ||
            winner[0] == win && winner[3] == win && winner[6] == win ||
            winner[1] == win && winner[4] == win && winner[7] == win ||
            winner[2] == win && winner[5] == win && winner[8] == win ||
            winner[0] == win && winner[4] == win && winner[8] == win ||
            winner[2] == win && winner[4] == win && winner[6] == win) {
            alert(win + " is won");
            return true;
        }
        return false;
    };

    function checkTie() {
        if (winner[0] != "" && winner[1] != "" && winner[2] != "" && winner[3] != "" &&
            winner[4] != "" && winner[5] != "" && winner[6] != "" && winner[7] != "") {
            alert("Draw");
            for (var i = 0; i < square.length; i++) {
                square.eq(i).text("");
            }
        }
    }


    function AI() {

        while (random === 4) {
            random = Math.floor(Math.random() * 8);
        };

        if (winner[4] == player) {
            square.eq(random).text(computer).addClass("game");
        }

        if (winner[1] == player && winner[2] == player ||
            winner[4] == player && winner[8] == player ||
            winner[3] == player && winner[6] == player) {
            square.eq(0).text(computer).addClass("game");
        }
        if (winner[0] == player && winner[2] == player ||
            winner[4] == player && winner[7] == player) {
            square.eq(1).text(computer).addClass("game");
        }
        if (winner[0] == player && winner[1] == player ||
            winner[5] == player && winner[8] == player ||
            winner[4] == player && winner[6] == player) {
            square.eq(2).text(computer).addClass("game");
        }
        if (winner[0] == player && winner[6] == player ||
            winner[4] == player && winner[5] == player) {
            square.eq(3).text(computer).addClass("game");
        }
        if (winner[4] == "" ||
            winner[0] == player && winner[8] == player ||
            winner[1] == player && winner[7] == player ||
            winner[2] == player && winner[6] == player ||
            winner[3] == player && winner[5] == player) {
            square.eq(4).text(computer).addClass("game");
        }
        if (winner[2] == player && winner[8] == player ||
            winner[3] == player && winner[4] == player) {
            square.eq(5).text(computer).addClass("game");
        }
        if (winner[0] == player && winner[3] == player ||
            winner[2] == player && winner[4] == player ||
            winner[7] == player && winner[8] == player) {
            square.eq(6).text(computer).addClass("game");
        }
        if (winner[1] == player && winner[4] == player ||
            winner[6] == player && winner[8] == player) {
            square.eq(7).text(computer).addClass("game");
        }
        if (winner[0] == player && winner[4] == player ||
            winner[2] == player && winner[5] == player ||
            winner[6] == player && winner[7] == player) {
            square.eq(8).text(computer).addClass("game");
        }

    }

});
