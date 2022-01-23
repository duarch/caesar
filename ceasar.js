function rot13(str) {
    let deCode = ""
    const CEASAR = 13
    for (var i = 0; i < str.length; i++) {
        let pos = getIso(i)
        if (pos <= 64 || pos > 90) {
            newStr(pos)
        } else if (pos <= 77) {
            newStr(pos + CEASAR)
        } else {
            newStr(pos - CEASAR)
        }
    }

    function newStr(a) {
        deCode += getChar(a)
    }

    function getIso(pos) {
        return str.codePointAt(pos)
    }

    function getChar(pos) {
        return String.fromCharCode(pos)
    }
    return deCode;
}