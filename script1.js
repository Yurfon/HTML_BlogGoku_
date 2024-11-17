function compareNumbers() { 
    // Obtener los valores ingresados en los campos de entrada 
    let num1 = parseFloat(document.getElementById("num1").value); 
    let num2 = parseFloat(document.getElementById("num2").value); 
    // Verificar que los valores sean números 
    if (isNaN(num1) || isNaN(num2)) { 
        document.getElementById("result").textContent = "Por favor ingresar dos números válidos."; 
        document.getElementById("result").style.color = "red"; 
        return; 
    } 
    // Comparar los números y mostrar el resultado 
    let resultElement = document.getElementById("result"); 
    if (num1 > num2) { 
        resultElement.textContent = `El número mayor es: ${num1}`; 
        resultElement.style.color = "green"; 
    } else if (num2 > num1) { 
        resultElement.textContent = `El número mayor es: ${num2}`; 
        resultElement.style.color = "green"; 
    } else { 
        resultElement.textContent = "Los números son iguales."; 
        resultElement.style.color = "blue"; 
    } 
} 