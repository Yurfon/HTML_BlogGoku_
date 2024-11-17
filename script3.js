function countVowels() { 
    // Obtener la frase ingresada por el usuario 
    let phrase = document.getElementById("phraseInput").value.toLowerCase(); 
    // Definir un objeto para contar las vocales 
    let vowelCount = { 
        'a': 0, 
        'e': 0, 
        'i': 0, 
        'o': 0, 
        'u': 0 
    }; 	
    // Recorrer cada carácter de la frase y contar las vocales 
    for (let char of phrase) { 

        if (vowelCount.hasOwnProperty(char)) { // Si el carácter es una vocal 

            vowelCount[char]++; // Incrementar el conteo de esa vocal 
        } 
    } 	
    // Crear el texto para mostrar el resultado 
    let resultText = ` 
        A = total de ${vowelCount['a']}<br> 
        E = total de ${vowelCount['e']}<br> 
        I = total de ${vowelCount['i']}<br> 
        O = total de ${vowelCount['o']}<br> 
        U = total de ${vowelCount['u']}
    `; 
    // Mostrar el resultado en el div con id "result" 
    document.getElementById("result").innerHTML = resultText; 
} 