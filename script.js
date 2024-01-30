function validarInput() {
    const inputValidacion = document.getElementById('text-input').value;

    if (inputValidacion.trim() === "") {
        alert("Por favor, ingrese una palabra.");
    } else {
        palabraPalindrome(inputValidacion);
        document.getElementById('text-input').value = "";
    }
}

function palabraPalindrome(palabra) {
    const palabraminusculas = palabra.toLowerCase();
    const divResultado = document.getElementById('result');
    const palbraInvertida = palabraminusculas.split('').reverse().join('');

    if (palabraminusculas === palbraInvertida) {
        divResultado.innerHTML = '<span class="negrita">' + palabra + '</span> es una palabra palindrome';
    } else {
        divResultado.innerHTML = '<span class="negrita">' + palabra + '</span> no es una palabra palindrome';
    }
}
