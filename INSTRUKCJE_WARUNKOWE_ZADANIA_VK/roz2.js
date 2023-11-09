document.addEventListener("DOMContentLoaded", function() {
    
    alert("UWAGA! C a D są poniżej");

    var inputA = document.getElementById("display");
    var inputB = document.getElementById("display1");
    var inputX = document.getElementById("display2");
    var inputC = document.getElementById("display3");
    var inputD = document.getElementById("display4");
    
    var obliczButton = document.getElementById("oblicz");
    obliczButton.addEventListener("click", function() {
        var valueA = parseFloat(inputA.value);
        var valueB = parseFloat(inputB.value);
        var valueC = parseFloat(inputC.value);
        var valueD = parseFloat(inputD.value);
        
        if (valueB === 0 || valueD ===0) {
            alert("Nie wolno dzielić na 0!");
        } else {
            var result1 = valueA / valueB;
            var result2 = valueC / valueD;
            inputX.value = result1 + result2;
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

    var knopkiD = document.querySelectorAll(".knopka4");
    for (var i = 0; i < knopkiD.length; i++) {
        knopkiD[i].addEventListener("click", function() {
            if (this.id !== "oblicz") {
                if (this.id === "ac4") {
                    inputD.value = "";
                } else if (this.id === "de4") {
                    inputD.value = inputD.value.slice(0, -1);
                } else {
                    inputD.value += this.textContent;
                }
            }
        });
    }
});