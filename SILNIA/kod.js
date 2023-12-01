document.addEventListener("DOMContentLoaded", function() {
    var inputA = document.getElementById("display");

    var obliczButton = document.getElementById("knopka1");
    obliczButton.addEventListener("click", function() {
        var valueA = parseInt(inputA.value);

        if (isNaN(valueA) || valueA < 0) {
            alert("Please enter a non-negative integer for factorial calculation.");
        } else {
            var result = calculateFactorial(valueA);
            inputA.value = result;
        }
    });

    var knopkiA = document.querySelectorAll(".knopka");
    for (var i = 0; i < knopkiA.length; i++) {
        knopkiA[i].addEventListener("click", function() {
            if (this.id === "ac") {
                inputA.value = "";
            } else if (this.id === "de") {
                inputA.value = inputA.value.slice(0, -1);
            } else if (this.id !== "knopka1") {
                inputA.value += this.textContent;
            }
        });
    }

    function calculateFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }
});
