document.addEventListener("DOMContentLoaded", function() {
    var inputA = document.getElementById("display");

    var obliczButton = document.getElementById("knopka1");
    obliczButton.addEventListener("click", function() {
        var valueA = parseFloat(inputA.value);
        var result = (valueA * 9/5) + 32;
        inputA.value = result.toFixed(2) + ' F';
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
});
