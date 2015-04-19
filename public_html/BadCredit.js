/**
 * Checks if credit card number has the correct checksum (is divisible by 10) according to Luhn's algorithm.
 * Based on CS50's BadCheck problem.
 */

function checkNumber() {
    var number = document.getElementById("cc-num").value.replace(/ |-/g, '');
    if (luhns(number)) {
        document.getElementById("validity").innerHTML = "VALID";
        document.getElementById("brand").innerHTML = getBrandName(number);
        document.getElementById("validity").style.color = "green";
        document.getElementById("brand").style.color = "blue";
    } else {
        document.getElementById("validity").innerHTML = "INVALID";
        document.getElementById("brand").innerHTML = "";
        document.getElementById("validity").style.color = "red";
    }
}

function getBrandName(num) {
    var firstNum = Number(num.charAt(0));
    var secNum = Number(num.charAt(1));
    if (firstNum === 4) {
        //4x
        return "VISA";
    } else if (firstNum === 3 && (secNum === 4 || secNum === 7)) {
        //34, 37
        return "AMEX";
    } else if (firstNum === 5 && (secNum >= 1 && secNum <= 5)) {
        //51, 52, 53, 54, 55
        return "MC";
    }
    return "UNKNOWN";
}

function luhns(num) {
    var sum = 0;
    for (var i = num.length - 1; i >= 0; i = i - 2) {
        sum += Number(num.charAt(i));
    }
    for (var i = num.length - 2; i >= 0; i = i - 2) {
        var tmpNum = Number(num.charAt(i)) * 2;
        while (tmpNum > 0) {
            sum += tmpNum % 10;
            tmpNum = ~~(tmpNum / 10);
        }
    }
    return (sum % 10 === 0);
}