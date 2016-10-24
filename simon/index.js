$(document).ready(function() {
    var onOff = $(".toggle"),
        led = $(".led"),
        start = $(".start-button"),
        green = $(".green"),
        red = $(".red"),
        yellow = $(".yellow"),
        blue = $(".blue"),
        strict = $(".strict-button"),
        light = $(".light"),
        random,
        index = $(".buttons div"),
        count = 0,
        score = 1,
        steps = [],
        userSteps = [];

    $(".switch").on("click", function() {
        onOff.toggleClass("toggle-on");
        led.toggleClass("led-on");
        if (onOff.hasClass("toggle")) {
            led.text("--");
            steps = [];
            score = 1;
            count = 0;
            userSteps = [];
        }
    });

    start.on("click", function() {
        if (onOff.hasClass("toggle-on")) {
            steps = [];
            score = 1;
            count = 0;
            userSteps = [];
            led.text("--");
            led.toggleClass("led-on");
            setTimeout(function() {
                led.toggleClass("led-on");
            }, 250);
            setTimeout(function() {
                led.toggleClass("led-on");
            }, 500);
            setTimeout(function() {
                led.toggleClass("led-on");
            }, 750);
            setTimeout(function() {
                led.text("01");
                random = Math.floor((Math.random() * 4));
                steps.push(random);
                game();
            }, 1000);
        }
    });

    index.on("click", function() {
        if (onOff.hasClass("toggle-on") && steps.length > 0) {
            userSteps.push(index.index(this));
            playSound(index.index(this) + 1);
            if (userSteps[count] === steps[count]) {
                count++;
                if (count === steps.length) {
                    random = Math.floor((Math.random() * 4));
                    steps.push(random);
                    game();
                    userSteps = [];
                    count = 0;
                    score++;
                    if (score < 10) {
                        led.text(0 + "" + score);
                    } else {
                        led.text(score);
                    }
                    if (score > 20) {
                        alert("Congratulations");
                        led.text("--");
                        steps = [];
                        score = 1;
                        count = 0;
                        userSteps = [];
                    } else {
                        game();
                    }

                }
            } else {
                var buttonSound = new Audio("http://kristarling.com/publicassets/fail.wav").play();

                setTimeout(function() {
                    led.text("!!");
                    led.toggleClass("led-on");
                }, 500);
                setTimeout(function() {
                    led.toggleClass("led-on");
                }, 1000);
                setTimeout(function() {
                    led.toggleClass("led-on");
                }, 1500);
                setTimeout(function() {
                    led.toggleClass("led-on");
                    if (score < 10) {
                        led.text("0" + score);
                    } else {
                        led.text(score);
                    }

                    count = 0;
                    userSteps = [];
                    if (light.hasClass("light-on")) {
                        steps = [];
                        score = 1;
                        random = Math.floor((Math.random() * 4));
                        steps.push(random);
                        led.text("01");
                    }
                    game();
                }, 2000);

            }
        }
    });

    function game() {
        if (score < 21)
            for (var i = 0; i < steps.length; i++) {
                if (steps[i] == 0) {
                    setTimeout(function() {
                        playSound(1);
                        green.addClass("green-light");
                    }, (i + 1) * 500);
                    setTimeout(function() {
                        green.removeClass("green-light");
                    }, (i + 2) * 480);
                }
                if (steps[i] == 1) {
                    setTimeout(function() {
                        playSound(2);
                        red.addClass("red-light");
                    }, (i + 1) * 500);
                    setTimeout(function() {
                        red.removeClass("red-light");
                    }, (i + 2) * 480);
                }
                if (steps[i] == 2) {
                    setTimeout(function() {
                        yellow.addClass("yellow-light");
                        playSound(3);
                    }, (i + 1) * 500);

                    setTimeout(function() {
                        yellow.removeClass("yellow-light");
                    }, (i + 2) * 480);
                }
                if (steps[i] == 3) {
                    setTimeout(function() {
                        blue.addClass("blue-light");
                        playSound(4);
                    }, (i + 1) * 500);

                    setTimeout(function() {
                        blue.removeClass("blue-light");
                    }, (i + 2) * 480);
                }
            }
    }

    strict.on("click", function() {
        if (onOff.hasClass("toggle-on")) {
            light.toggleClass("light-on");
        }
    });

    function playSound(boxID) {
        var buttonSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + boxID + '.mp3');
        buttonSound.play();
    }

});
