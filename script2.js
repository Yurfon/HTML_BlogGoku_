function findVowels() { 
    // Obtener la frase del campo de entrada 
    let phrase = document.getElementById("phraseInput").value; 
    // Definir las vocales 
    const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']; 
    // Convertir la frase a minúsculas para una búsqueda precisa 
    phrase = phrase.toLowerCase(); 
    // Crear un conjunto para almacenar las vocales encontradas sin duplicados 
    let foundVowels = new Set(); 
    // Recorrer la frase y verificar cada carácter 
    for (let char of phrase) { 
        if (vowels.includes(char)) 
		{ 
            foundVowels.add(char); // Agregar la vocal al conjunto si está en la lista de vocales 
        } 
    } 
    // Convertir el conjunto a un array y unir los elementos para mostrarlos 
    let resultText = Array.from(foundVowels).join(', '); 
    // Mostrar el resultado en el párrafo con id "result" 
    document.getElementById("result").textContent = `Vocales encontradas: ${resultText || "Ninguna"}`; 
} 