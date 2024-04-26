
function addNumber() {
    var num1 = parseFloat(document.getElementById("First").value);
    var num2 = parseFloat(document.getElementById("Second").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}