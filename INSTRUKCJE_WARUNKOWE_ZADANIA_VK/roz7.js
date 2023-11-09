document.addEventListener("DOMContentLoaded", function() {
   
    alert("UWAGA! C jest poniżej");

    var inputA = document.getElementById("display");
    var inputB = document.getElementById("display1");
    var inputX = document.getElementById("display2");
    var inputC = document.getElementById("display3");
    
    var obliczButton = document.getElementById("oblicz");
    obliczButton.addEventListener("click", function() {
        var valueA = parseFloat(inputA.value);
        var valueB = parseFloat(inputB.value);
        var valueC = parseFloat(inputC.value);
        
        var maxVal;
        var resultText;
        
        if (valueA > valueB && valueA > valueC) {
            maxVal = valueA;
            resultText = "A = " + maxVal;
        } else if (valueB > valueA && valueB > valueC) {
            maxVal = valueB;
            resultText = "B = " + maxVal;
        } else if (valueC > valueA && valueC > valueB) {
            maxVal = valueC;
            resultText = "C = " + maxVal;
        } else if (valueA > valueB && valueA == valueC) {
            resultText = "A i C";
        } else if (valueB > valueA && valueB == valueC){
            resultText = "B i C";
        } else if (valueA > valueC && valueA == valueB){
            resultText = "A i B";
        } else {
            resultText = "Wszystkie liczby są równe";
        }
        
        inputX.value = resultText;
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

    var knopkiB = document.querySelectorAll(".knopka1");
    for (var i = 0; i < knopkiB.length; i++) {
        knopkiB[i].addEventListener("click", function() {
            if (this.id !== "oblicz") {
                if (this.id === "ac1") {
                    inputB.value = "";
                } else if (this.id === "de1") {
                    inputB.value = inputB.value.slice(0, -1);
                } else {
                    inputB.value += this.textContent;
                }
            }
        });
    }

    var knopkiC = document.querySelectorAll(".knopka3");
    for (var i = 0; i < knopkiC.length; i++) {
        knopkiC[i].addEventListener("click", function() {
            if (this.id !== "oblicz") {
                if (this.id === "ac3") {
                    inputC.value = "";
                } else if (this.id === "de3") {
                    inputC.value = inputC.value.slice(0, -1);
                } else {
                    inputC.value += this.textContent;
                }
            }
        });
    }
});
