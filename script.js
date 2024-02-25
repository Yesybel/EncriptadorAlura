function encriptar() {
    var texto = document.getElementById('inputText').value.toLowerCase();
    var textoEncriptado = '';
    for (var i = 0; i < texto.length; i++) {
        switch (texto.charAt(i)) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += texto.charAt(i);
        }
    }
    document.getElementById('outputText').value = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById('inputText').value;
    var textoDesencriptado = '';
    textoEncriptado = textoEncriptado.replace(/enter/g, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/g, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/g, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/g, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/g, 'u');
    document.getElementById('outputText').value = textoEncriptado;
}


function copiar() {
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles!');
}