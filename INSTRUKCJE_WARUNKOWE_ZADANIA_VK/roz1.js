document.addEventListener("DOMContentLoaded", function() {
    
    var inputA = document.getElementById("display");
    var inputB = document.getElementById("display1");
    var inputX = document.getElementById("display2");

    var obliczButton = document.getElementById("oblicz");
    obliczButton.addEventListener("click", function() {
        var valueA = parseFloat(inputA.value);
        var valueB = parseFloat(inputB.value);
        
        if (valueB === 0) {
            alert("Nie wolno dzielić na 0!");
        } else {
            var result = valueA / valueB;
            inputX.value = result;
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
});