function calculate() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);

    if (validateInput(sideA, sideB, sideC)) {
        var luas = calculateLuas(sideA, sideB, sideC);
        var keliling = calculateKeliling(sideA, sideB, sideC);

        document.getElementById("luasResult").innerText = luas.toFixed(2);
        document.getElementById("kelilingResult").innerText = keliling.toFixed(2);
    } else {
        alert("Invalid input. Please make sure all sides are positive and form a valid triangle.");
    }
}

function validateInput(a, b, c) {
    return a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && c + a > b;
}

function calculateLuas(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function calculateKeliling(a, b, c) {
    return a + b + c;
}
