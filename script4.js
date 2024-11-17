document.addEventListener("DOMContentLoaded", function() {
    const urlInput = document.getElementById("url");
    const mostrarBtn = document.getElementById("mostrar");
    const contenidosDiv = document.getElementById("contenidos");
    const estadoDiv = document.getElementById("estado");
    const cabecerasDiv = document.getElementById("cabeceras");
    const codigoEstadoDiv = document.getElementById("codigo-estado");
    // Establecer la URL actual por defecto en el cuadro de texto
    urlInput.value = window.location.href;
    // Manejar el clic del botón "Mostrar Contenidos"
    mostrarBtn.addEventListener("click", function() {
        const url = urlInput.value;
        if (!url) {
            alert("Por favor, ingresa una URL válida.");
            return;
        }
        // Crear la petición AJAX
        const xhr = new XMLHttpRequest();
        // Actualizar el estado de la petición
        xhr.onreadystatechange = function() {
            let estado = "";
            switch (xhr.readyState) {
                case 0:
                    estado = "No iniciada";
                    break;
                case 1:
                    estado = "Cargando";
                    break;
                case 2:
                    estado = "Cabeceras recibidas";
                    break;
                case 3:
                    estado = "Cargando datos";
                    break;
                case 4:
                    estado = "Completada";
                    break;
            }
            estadoDiv.textContent = estado;
            // Cuando la petición se completa
            if (xhr.readyState === 4) {
                // Mostrar el contenido de la respuesta
                if (xhr.status >= 200 && xhr.status < 300) {
                    contenidosDiv.textContent = xhr.responseText;
                } else {
                    contenidosDiv.textContent = `Error: ${xhr.status}`;
                }
                // Mostrar cabeceras
                cabecerasDiv.textContent = xhr.getAllResponseHeaders();
                // Mostrar código y texto del estado
                codigoEstadoDiv.textContent = `${xhr.status} - ${xhr.statusText}`;
            }
        };
        // Configurar y enviar la petición
        xhr.open("GET", url, true);
        xhr.send();
    });
});
