function encrypt() {
    var plain = document.getElementById('plain-text').value;
    if (document.getElementById('allUpper').checked) {
        plain = plain.toUpperCase();
    }
    if (document.getElementById('noSpaces').checked) {
        plain = plain.replace(/ /g, '');
    }
    document.getElementById('enc-text').value = vig(plain, document.getElementById('key').value.toUpperCase());
}

function vig(plain, key) {
    var enc = '';
    for (var i = 0, encIndex = 0; i < plain.length; i++) {
        var pChar = plain.charAt(i);
        var eChar;
        if ((pChar >= 'a' && pChar <= 'z') || (pChar >= 'A' && pChar <= 'Z')) {
            eChar = encryptChar(pChar, key.charAt(encIndex % key.length));
            encIndex++;
        } else {
            eChar = pChar;
        }
        enc += eChar;
    }
    return enc;
}

function encryptChar(pChar, kChar) {
    if (pChar >= 'a' && pChar <= 'z') {
        return String.fromCharCode((((pChar.charCodeAt() - 'a'.charCodeAt() + kChar.charCodeAt() - 'A'.charCodeAt()) % 26) + 'a'.charCodeAt()));
    }

    if (pChar >= 'A' && pChar <= 'Z') {
        return String.fromCharCode((((pChar.charCodeAt() - 'A'.charCodeAt() + kChar.charCodeAt() - 'A'.charCodeAt()) % 26) + 'A'.charCodeAt()));
    }

    return pChar;

}
