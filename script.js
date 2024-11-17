function checkPalindrome() {
    // Obtener el texto del campo de entrada
    let text = document.getElementById("textInput").value;
    
    // Limpiar el texto: quitar espacios y convertir a minúsculas
    let cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Verificar si el texto es igual a su versión invertida
    let isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
    
    // Mostrar el resultado en el párrafo con id "result"
    let resultElement = document.getElementById("result");
    if (isPalindrome) {
        resultElement.textContent = `"${text}" es un palíndromo`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `"${text}" no es un palíndromo`;
        resultElement.style.color = "red";
    }
}

