document.addEventListener("DOMContentLoaded", function() {
    
    var inputA = document.getElementById("display");
    var inputX = document.getElementById("display2");
    
    var obliczButton = document.getElementById("oblicz");
    obliczButton.addEventListener("click", function() {
        var valueA = parseFloat(inputA.value);
        
        if (valueA%2 === 0) {
            inputX.value = "TAK";
        } else {
            inputX.value = "NIE";
        }
    });

    var knopkiA = document.querySelectorAll(".knopka");
    for (var i = 0; i < knopkiA.length; i++) {
        knopkiA[i].addEventListener("click", function() {
            if (this.id !== "oblicz") {
                if (this.id === "ac") {
                    inputA.value = "";
                } else if (this.id === "de") {
                    inputA.value = inputA.value.slice(0, -1);
                } else {
                    inputA.value += this.textContent;
                }
            }
        });
    }

});