$(document).ready(function() {

    var userInput = prompt("Please enter a number in the box below.", "Only whole numbers please");

    userInput = parseInt(userInput);
    userInput = userInput - (userInput % 1);

    userInput = +userInput;


    var response = "";

    function display(input) {
        var p = document.createElement("p");
        p.innerHTML = input;
        $(".container").append(p);

    };

    var p = document.createElement("p");


    for (var i = 1; i < userInput + 1; i++) {


        if (i % 3 == 0 && i % 5 == 0) {

            display("fizz buzz");

        } else if (i % 3 == 0) {
            display("fizz");
        } else if (i % 5 == 0) {

            display("buzz");
        } else {

            display(i);
        }



    };

});
