$(document).ready(function() {
    var result = "";
    var calculation = "";
    $("button").on("click", function() {
        var text = $(this).text();
        calculation += text;
        $("input").val(calculation);
        if (text === "AC") {
            calculation = "";
            $("input").val("");
        } else if (text === "CE") {
            calculation = calculation.slice(0, -3);
            $("input").val(calculation);
        } else if (text === "=") {
            calculation = calculation.slice(0, -1);
            calculation = eval(calculation);
            $("input").val(calculation);
        }
    });

});
